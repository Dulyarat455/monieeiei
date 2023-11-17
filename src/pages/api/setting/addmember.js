import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function addmember (req,res)  {

    const uri = "mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );


    const token = req.headers["auth-token"];
    const decoded =   jwt.decode(token)
    const { user_id } = decoded || {};


    const {

      workspace_id,
      email_member,
      workspace_name
      

      } = req.body;
    
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const transactions  = client.db('monieeiei').collection('Workspace transaction');
                const workspacemember  = client.db('monieeiei').collection('Workspace member list');
                const  notifications = client.db('monieeiei').collection('Notification');
                const user  = client.db('monieeiei').collection('User');


                const getuser = await user.findOne({user_email: email_member},{})

                if (!getuser) {
                  return res.status(400).json({ message: 'Not have this account', success: false });
                }

                 //set time
                 const options = {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                  timeZone: 'Asia/Bangkok', // Indochina Time (GMT+7)
                };

                const formatter = new Intl.DateTimeFormat('en-US', options);
                const currentTime = new Date();

                //set formatdate
                const tzOffset = 7; // Offset for Indochina Time (GMT+7)
                const dateNow = new Date(Date.now() + tzOffset * 3600000).toISOString().split('T')[0];

                //countnotifications
                let count_notification ;
                const countNotification = await notifications.aggregate( [
                  { $count: "myCount" }
               ] ).toArray();
               if(countNotification.length === 0){
                  count_notification = 0
               }else {
                  count_notification =   countNotification[0].myCount
               }
                

                const result = await workspacemember.insertOne({ 
                      
                      user_id :   getuser.user_id ,
                      workspace_id : workspace_id

                })


                let getworkspacemember = await workspacemember.aggregate( [

                  {
                      $match:{
                          'workspace_id': workspace_id
                         }
  
                  }

                ] ).toArray();

                let resultNoti

                if( getworkspacemember.length > 0){

                for (let j=0 ; j < getworkspacemember.length; j++){
                 
                    resultNoti = await notifications.insertOne({

                      user_id: getworkspacemember[j].user_id,
                      notification_id: count_notification,
                      notification_type: 1,
                      description: `${getuser.user_username} was added to the workspace ${workspace_name} .`,
                      time_stamp : (formatter.format(currentTime)).toString(),
                      date:  dateNow,
                      read_status: 0

                    });
                    count_notification = count_notification + 1;


              }

              const resultNotimember = await notifications.insertOne({

                user_id: getuser.user_id,
                notification_id: count_notification,
                notification_type: 1,
                description: `You were added to the workspace ${workspace_name} .`,
                time_stamp : (formatter.format(currentTime)).toString(),
                date:  dateNow,
                read_status: 0

              });
              count_notification = count_notification + 1;
                

            }



                if(result && resultNoti &&resultNotimember){
                    return( res.status(200).json({ message: 'Add member success', success: true}))
                    
                }
                

                else{
                    return ( res.status(400).json({message: 'Add member failed', success: false}))
                }
            

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}

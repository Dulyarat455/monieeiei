import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
export default  async  function createworkspace (req,res)  {

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
        workspace_name,
        member_list,
        } = req.body;
  
        // console.log("workspace_name = ",workspace_name)
        // console.log("member_list = ",member_list)
      
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const person  = client.db('monieeiei').collection('User');
                const workspace  = client.db('monieeiei').collection('Workspace');
                const workspaceOwners = client.db('monieeiei').collection('Workspace owner list');
                const workspaceMembers = client.db('monieeiei').collection('Workspace member list');
                const  notifications = client.db('monieeiei').collection('Notification');
                const  workspaceproportion = client.db('monieeiei').collection('Workspace proportion');
                const  getbudget = client.db('monieeiei').collection('budget');

                let count
                let setOwner
                let setMemberOwner
                let i
                for ( i=0 ; i< member_list.length; i++){
                    const checkperson  = await person.findOne({user_email: member_list[i]},{})
                    if(!checkperson){
                        return( res.status(400).json({message: 'Not found this email in system', success: false}))
                    }
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
  
                //  const formatDate = (dateString) => {
                //   // Parse the date string
                //   const date = new Date(dateString);
          
                //   // Format the date using date-fns
                //   const formattedDate = format(date, 'dd MMM yyyy');
          
                //   return formattedDate;
                //  }
                  
                const keyId = uuidv4();

                 let count_notification ;
                 const countNotification = await notifications.aggregate( [
                   { $count: "myCount" }
                ] ).toArray();
                if(countNotification.length === 0){
                   count_notification = 0
                }else {
                   count_notification =   countNotification[0].myCount
                }

                 
                const countWorkSpace = await workspace.aggregate( [
                    { $count: "myCount" }
                 ] ).toArray();
                 if(countWorkSpace.length === 0){
                    count = 0
                 }else {
                    count =   countWorkSpace[0].myCount
                 }

                 console.log("count = ",count)


                const createworkspace = await workspace.insertOne({

                    workspace_id: keyId,
                    workspace_name:workspace_name,
                    max_ppl: 1+i

                  });

                

                if(createworkspace){
                    setOwner = await workspaceOwners.insertOne({
                    user_id: user_id,
                    workspace_id: keyId
                  })
                  setMemberOwner = await workspaceMembers.insertOne({
                    user_id: user_id,
                    workspace_id: keyId
                  })

                  const result = await notifications.insertOne({

                    user_id: user_id,
                    notification_id: count_notification,
                    notification_type: 1,
                    description: `You have created a workspace ${workspace_name} success .`,
                    time_stamp : (formatter.format(currentTime)).toString(),
                    date:  dateNow,
                    read_status: 0
                  });
                  count_notification = count_notification + 1;


                }

                if(setOwner && setMemberOwner){

                    for (let j=0 ; j< member_list.length; j++){
                        const checkperson  = await person.findOne({user_email: member_list[j]},{})
                       const setMember = await workspaceMembers.insertOne({
                            user_id: checkperson.user_id,
                            workspace_id: keyId
                          })
                          const result = await notifications.insertOne({

                            user_id: checkperson.user_id,
                            notification_id: count_notification,
                            notification_type: 1,
                            description: `You have been added to the workspace ${workspace_name} .`,
                            time_stamp : (formatter.format(currentTime)).toString(),
                            date:  dateNow,
                            read_status: 0
                          });
                          count_notification = count_notification + 1;


                    }

                    const setproportion = await workspaceproportion.insertOne({

                      percent0: 10,
                      percent1: 10,
                      percent2: 10,
                      percent3: 10,
                      percent4: 10,
                      percent5: 10,
                      percent6: 10,
                      percent7: 10,
                      percent8: 10,
                      percent9: 10,
                      workspace_id: keyId,
                      workspaceproportion_id: uuidv4()

                    });


                    const setbudget = await getbudget.insertOne({
                      budget_value: 0,
                      workspace_id: keyId,
                      budget_id: uuidv4()
                    });
                }
                   
                

                return( res.status(200).json({ message: 'Create workspace success', success: true}))
                
                
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
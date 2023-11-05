import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';


export default  async  function addtransactions (req,res)  {

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
      workspace_name,
      tran_name,
      tran_type,
      category_name,
      tran_member,
      pocket_name,
      amount,
      photo,
      bought_date,
      request_member

        } = req.body;


      // photo = photo ? photo : "";
  
        // console.log("workspace_name = ",workspace_name)
        console.log("trantype = ",tran_type)
      
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const person  = client.db('monieeiei').collection('User');
                const workspace  = client.db('monieeiei').collection('Workspace');
                const workspaceOwners = client.db('monieeiei').collection('Workspace owner list');
                const workspaceMembers = client.db('monieeiei').collection('Workspace member list');
                const  workspaceTransactions = client.db('monieeiei').collection('Workspace transaction');
                const  notifications = client.db('monieeiei').collection('Notification');

                let count ;
                const countTransactions = await workspaceTransactions.aggregate( [
                  { $count: "myCount" }
               ] ).toArray();
               if(countTransactions.length === 0){
                  count = 0
               }else {
                  count =   countTransactions[0].myCount
               }

               let count_notification ;
                const countNotification = await notifications.aggregate( [
                  { $count: "myCount" }
               ] ).toArray();
               if(countNotification.length === 0){
                  count_notification = 0
               }else {
                  count_notification =   countNotification[0].myCount
               }



              //  const cleanObject = (obj)=>   {
              //   for (var propName in obj) {
              //     if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
              //       delete obj[propName];
              //     }
              //   }
              //   return obj
              // }


              if(tran_type === 1){

                const result = await workspaceTransactions.insertOne( {

                  workspace_id: workspace_id,
                  user_id: user_id,
                  transworkspace_id: count,
                  tran_type: 1,
                  tran_name: tran_name,
                  tran_member:  tran_member,
                  pocket_name: pocket_name,
                  photo: photo,
                  category_name: category_name,
                  bought_date: bought_date,
                  amount: amount
                  
            
                });

                if(result){
                  if(request_member){
                    for ( let i=0 ; i< request_member.length; i++){
                    const result = await notifications.insertOne({

                      user_id: request_member[i],
                      notification_id: count_notification,
                      notification_type: 0,
                      description: `Please don't forget the cost ${tran_name} for workspace ${workspace_name}`
                    });
                    count_notification = count_notification + 1;
                  }
                }

                  return( res.status(200).json({ message: 'add transaction success', success: true}))
                }
                else{
                  return( res.status(400).json({ message: 'add transaction fail', success: false}))
                }


              }
              else if(tran_type === 0){
                const result = await workspaceTransactions.insertOne( {

                  workspace_id: workspace_id,
                  user_id: user_id,
                  transworkspace_id: count,
                  tran_type: 0,
                  tran_name: tran_name,
                  pocket_name: pocket_name,
                  photo: photo,
                  bought_date: bought_date,
                  amount: amount
                  
            
                });

                if(result){
                return( res.status(200).json({ message: 'add transaction success', success: true}))
                }
                else{
                  return( res.status(400).json({ message: 'add transaction fail', success: false}))
                }

              }

                
                

               
                
                
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function deletetransactions (req,res)  {

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
        transworkspace_id
  
          } = req.body;
  

      
     if (req.method !== 'DELETE') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const workspace  = client.db('monieeiei').collection('Workspace');
                const workspaceOwners = client.db('monieeiei').collection('Workspace owner list');
                const workspaceMembers = client.db('monieeiei').collection('Workspace member list');
                const  workspaceTransactions = client.db('monieeiei').collection('Workspace transaction');
                
                const result  = await  workspaceTransactions.deleteOne({ user_id: user_id ,transworkspace_id: transworkspace_id}) 
             
              
                
                if(result){
                  return( res.status(200).json({ message: 'Delete transactions success', success: true}))
                }
                else{
                  return( res.status(400).json({message: 'Failed to Delete transactions', success: false}))
                }
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
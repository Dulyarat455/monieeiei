import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function deleteworkspace(req,res)  {

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

      workspace_id
      
      } = req.body;
    
     if (req.method !== 'DELETE') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const transactions  = client.db('monieeiei').collection('Workspace transaction');
                const workspacemember  = client.db('monieeiei').collection('Workspace member list');
                const workspaceowner  = client.db('monieeiei').collection('Workspace owner list');
                const workspace  = client.db('monieeiei').collection('Workspace');
                const budget  = client.db('monieeiei').collection('budget');
                const proportion  = client.db('monieeiei').collection('Workspace proportion');

                const user  = client.db('monieeiei').collection('User');


                

                const resultTran  = await  transactions.deleteMany({ workspace_id : workspace_id  }) 
                const resultProp  = await  proportion.deleteOne({ workspace_id : workspace_id  }) 
                const resultBud  = await   budget.deleteOne({ workspace_id : workspace_id  }) 
                const resultOwner  = await   workspaceowner.deleteOne({ workspace_id : workspace_id  }) 
                const resultMember  = await   workspacemember.deleteMany({ workspace_id : workspace_id  }) 
                const resultWorkspace  = await   workspace.deleteOne({ workspace_id : workspace_id  }) 


                

                


                if(resultTran && resultProp && resultBud && resultOwner && resultMember && resultWorkspace){
                    return( res.status(200).json({ message: 'Delete workspace success', success: true}))
                    
                }
                

                else{
                    return ( res.status(400).json({message: 'Delete workspace failed', success: false}))
                }
            

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}

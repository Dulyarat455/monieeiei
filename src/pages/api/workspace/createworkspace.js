import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';


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
  

      
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const person  = client.db('monieeiei').collection('User');
                const workspace  = client.db('monieeiei').collection('Workspace');
                const workspaceOwners = client.db('monieeiei').collection('Workspace owner list');
                const workspaceMembers = client.db('monieeiei').collection('Workspace member list');

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

                    workspace_id: count,
                    workspace_name:workspace_name,
                    max_ppl: 1+i

                  });

                

                if(createworkspace){
                    setOwner = await workspaceOwners.insertOne({
                    user_id: user_id,
                    workspace_id: count
                  })
                  setMemberOwner = await workspaceMembers.insertOne({
                    user_id: user_id,
                    workspace_id: count
                  })

                }
                if(setOwner && setMemberOwner){

                    for (let j=0 ; j< member_list.length; j++){
                        const checkperson  = await person.findOne({user_email: member_list[j]},{})
                       const setMember = await workspaceMembers.insertOne({
                            user_id: checkperson.user_id,
                            workspace_id: count
                          })
                    }
                    

                }
                   
                

                return( res.status(200).json({ message: 'Create workspace success', success: true}))
                
                
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
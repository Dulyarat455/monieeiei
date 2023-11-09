import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';


export default  async  function getworkspacemember (req,res)  {

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

                
                const allWorkSpaceMember = await workspaceMembers.aggregate( [
                    {
                        $match:{
                                'user_id':{
                                    $ne: user_id
                                } 
                           }

                    },
                    {
                        $match:{
                            'workspace_id': workspace_id
                           }

                    },
                    {
                      $lookup:
                        {
                          from: "User",
                          localField: "user_id",
                          foreignField: "user_id",
                          as: "user"
                        }
                   },{$project:{"_id":0,"user._id":0,"user.user_password":0  }}

                 ] ).toArray();

                 for (let i=0 ; i< allWorkSpaceMember.length; i++){

                    allWorkSpaceMember[i].user = allWorkSpaceMember[i].user[0]

                 }


                 if(allWorkSpaceMember){
                    return( res.status(200).json({ message: 'Get workspace member success',allWorkSpaceMember, success: true}))
                  }
                  else{
                    return( res.status(400).json({message: 'Failed to Get workspace member', success: false}))
                  }

                            
             

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
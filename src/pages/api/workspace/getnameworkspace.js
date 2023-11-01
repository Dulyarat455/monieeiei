import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function getnameworkspace (req,res)  {

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

  

      
     if (req.method !== 'GET') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const workspace  = client.db('monieeiei').collection('Workspace');
                const workspaceOwners = client.db('monieeiei').collection('Workspace owner list');

                
                // const ans  = await workspaceOwners.find({user_id: user_id},{}).toArray()
                const allWorkSpace = await workspaceOwners.aggregate( [
                    {
                        $match: {
                            'user_id': user_id
                           }
                    },
                    {
                      $lookup:
                        {
                          from: "Workspace",
                          localField: "workspace_id",
                          foreignField: "workspace_id",
                          as: "name"
                        }
                   }
                 ] ).toArray();
                // // console.log(checkAccount['user_password'])

                for (let i=0 ; i< allWorkSpace.length; i++){
                    // getbook[i].room = getbook[i].room[0]
                    // getbook[i].roomtype = getbook[i].roomtype[0]
                    allWorkSpace[i].name = allWorkSpace[i].name[0]

                }
                

                
                if(allWorkSpace){
                  return( res.status(200).json({ message: 'Get name workspace success',allWorkSpace, success: true}))
                }
                else{
                  return( res.status(400).json({message: 'Failed to Get name workspace', success: false}))
                }
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
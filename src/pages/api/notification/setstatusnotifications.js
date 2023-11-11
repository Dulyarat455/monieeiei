import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function setstatusnotifications (req,res)  {

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

    
     if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const notifications  = client.db('monieeiei').collection('Notification');


                const setstatus = await notifications.updateMany( {  "user_id": user_id, "read_status": 0 },{ $set: {  read_status : 1
                } });

                

                if(setstatus){
                    return( res.status(200).json({ message: 'update read_status success', success: true}))
                    
                }

                else{
                    return ( res.status(400).json({message: 'update read_status failed', success: false}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }




}

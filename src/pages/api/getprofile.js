import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function getProfile (req,res)  {

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
                const person  = client.db('monieeiei').collection('User');
            
                const getAccount  = await person.findOne({ user_id :  user_id},{})

                if(!getAccount){
                    return ( res.status(400).json({message: 'Not found account', success: false}))
                }

                if(getAccount){
                    return( res.status(200).json({ message: 'Get account success',getAccount: getAccount, success: true}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }




}

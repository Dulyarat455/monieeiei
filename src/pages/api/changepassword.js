import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256'

export default  async  function changePassword (req,res)  {

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
      user_password,
      
      } = req.body;

      
     if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const person  = client.db('monieeiei').collection('User');
            
                const checkAccount  = await person.findOne({ user_id :  user_id},{})
                // console.log(checkAccount['user_email'])

                if(!checkAccount){
                    return ( res.status(400).json({message: 'Not found account', success: false}))
                }

                const hashedPassword = sha256(user_password + user_id).toString();

                const changePassword = await person.updateOne( {  "user_id": user_id },{ $set: {  user_password : hashedPassword,
                  } });

                


                if(changePassword){
                  return( res.status(200).json({ message: 'Change password success', success: true}))
                }
                else{
                  return( res.status(400).json({message: 'Failed to Change password', success: false}))
                }
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }


}
import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function editProfile (req,res)  {

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
      user_email,
      user_firstname,
      user_lastname,
      user_phonenumber,
      user_username,
      user_DOB,
      } = req.body;

      
     if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const person  = client.db('monieeiei').collection('User');
            
                const checkAccount = await person.findOne(
                  { user_id: { $ne: user_id }, user_email: user_email },
                  {}
                );
                
                // console.log(checkAccount['user_email'])

                if(checkAccount){
                    return ( res.status(400).json({message: 'You can not use this email.', success: false}))
                }


                const updateAccount = await person.updateOne( {  "user_id": user_id },{ $set: {  user_email : user_email,
                  user_firstname: user_firstname,
                  user_lastname: user_lastname,
                  user_phonenumber: user_phonenumber,
                  user_username: user_username,
                  user_DOB:user_DOB,} });

                


                if(updateAccount){
                  return( res.status(200).json({ message: 'Edit profile success', success: true}))
                }
                else{
                  return( res.status(400).json({message: 'Failed to edit', success: false}))
                }
                

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }




}

import { MongoClient, ServerApiVersion  } from 'mongodb';

import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256'
import jwt from 'jsonwebtoken';


export default  async  function Login (req,res)  {

    const uri = "mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );

    const {  user_password } = req.body;
    let user_email = req.body?.user_email;

    const inputmail = user_email;
  const inppassword = user_password;


     // check method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  //   // check every field is filled
  if (!user_email | !user_password) {
    return res.status(400).json({ message: 'Please fill all fields', success: false });
  }


  console.log("inputmail = ",inputmail)
  console.log("inppassword = ",inppassword)


  try{
       
    await client.connect();
    const person  = client.db('monieeiei').collection('User');
 
    const account  = await person.findOne({user_email: inputmail},{})

    if(!account){
        return ( res.status(400).json({message: 'Not found this account', success: false}))
    }

   const { user_id, user_email, user_password } = account || {} ;
   console.log("user_email = ",user_email)

    const cryptinput = sha256(inppassword+user_id).toString();

    // compare password
    const isMatch = cryptinput === user_password;

    if(isMatch){
        // 1 h age of account
      const token = jwt.sign({ user_id, user_email }, process.env.JWT_KEY, { expiresIn: '1h' });
      console.log(token)
      return res.status(200).json({ message: 'Login success', success: true, token: token });
    } else {
      return res.status(400).json({ message: 'Password is incorrect', success: false });
    }



}catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, success: false });
  } finally {
    await client.close();
  }


}



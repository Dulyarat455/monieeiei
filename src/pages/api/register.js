import { MongoClient, ServerApiVersion  } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';
import sha256 from 'crypto-js/sha256'



export default  async  function Register (req,res)  {

    const uri = "mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );


    const { 
        user_email,
        user_firstname,
        user_password,
        confirm_password,
        user_phonenumber,
        user_lastname,
        user_username,
        user_DOB,
        } = req.body;


     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


           try{
       
        await client.connect();
        const person  = client.db('monieeiei').collection('User');
     
        const checkAccount  = await person.findOne({ user_email :  user_email},{})

        if(checkAccount){
            return ( res.status(400).json({message: 'This email can not to use', success: false}))
        }

        if( user_password !== confirm_password){
          return res.status(405).json({ message: 'Comfirm password is invalid', success: false });
        }
      

        const account_id = uuidv4();

        const hashedPassword = sha256(user_password + account_id).toString();

        const result = await person.insertOne({

            user_id: account_id,
            user_email: user_email,
            user_firstname: user_firstname,
            user_lastname: user_lastname,
            user_password: hashedPassword,
            user_phonenumber:  user_phonenumber,
            user_username: user_username,
            user_DOB: user_DOB
      
      
          });

        if(result){
            return( res.status(200).json({ message: 'Register  success', success: true}))
        }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }




}


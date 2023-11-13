import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function updatebudget (req,res)  {

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

        workspace_id,
        budget_value,
        percent0,
        percent1,
        percent2,
        percent3,
        percent4,
        percent5,
        percent6,
        percent7,
        percent8,
        percent9

        } = req.body;

    
     if (req.method !== 'PUT') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const getbudget  = client.db('monieeiei').collection('budget');
                const getproportion  = client.db('monieeiei').collection('Workspace proportion');


             const resultbudget = await getbudget.updateOne( {  "workspace_id": workspace_id },{ $set: {  budget_value
                : budget_value 

             } });   
               
             const resultproportion = await getproportion.updateOne( {  "workspace_id": workspace_id },{ $set: {  
                percent0 : percent0,
                percent1 : percent1,
                percent2 : percent2,
                percent3 : percent3,
                percent4 : percent4,
                percent5 : percent5,
                percent6 : percent6,
                percent7 : percent7,
                percent8 : percent8,
                percent9 : percent9


             } });   

                
                

                if(resultbudget && resultproportion){
                    return( res.status(200).json({ message: 'update budget success', success: true}))
                    
                }

                else{
                    return ( res.status(400).json({message: 'update budget failed', success: false}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}

import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function getrate (req,res)  {

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
                const budget  = client.db('monieeiei').collection('budget');
                const proportion  = client.db('monieeiei').collection('Workspace proportion');
               


                const getproportion  = await proportion.findOne({ workspace_id :  workspace_id },{})
                const getbudget  = await budget.findOne({ workspace_id :  workspace_id },{})

                let objectrate = {
                    workspace_id: "",
                    budget_value : getbudget.budget_value,
                    percent0: getproportion.percent0,
                    percent1: getproportion.percent1,
                    percent2: getproportion.percent2,
                    percent3: getproportion.percent3,
                    percent4: getproportion.percent4,
                    percent5: getproportion.percent5,
                    percent6: getproportion.percent6,
                    percent7: getproportion.percent7,
                    percent8: getproportion.percent8,
                    percent9: getproportion.percent9
                }

                

                if(getproportion && getbudget){
                    return( res.status(200).json({ message: 'Get rate  success',getrate:objectrate, success: true}))
                    
                }

                else{
                    return ( res.status(400).json({message: 'Get rate  failed', success: false}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}
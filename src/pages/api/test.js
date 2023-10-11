import { MongoClient, ServerApiVersion  } from 'mongodb';

export default  async  function connectDB (req,res)  {

    const uri = "mongodb+srv://Monie:1234@cluster0.jl8dvxy.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
    );
    try{
       
        await client.connect();
        const mark  = client.db('monieeiei').collection('User');
     
        const ans  = await mark.find({},{projection:{"_id":0}}).toArray();


        return( res.status(200).json({ans  , message: 'Get bill success', success: true}))


    }


    
    catch(err){
        console.log(err)
    }
}


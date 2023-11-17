import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function gettransactions (req,res)  {

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
           
          } = req.body;

      
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
               
                const transactions = client.db('monieeiei').collection('Workspace transaction');
                const user = client.db('monieeiei').collection('User');

                
             

                let gettransactions = await transactions.aggregate( [
                  // {
                  //   $match: {
                  //     $or: [
                  //       { 'user_id': user_id },
                  //       { 'tran_member': user_id}
                  //     ]
                  //   }
                  // },
                  {
                    $match: {
                        'workspace_id': workspace_id
                       }
                  }
               ] ).toArray();

              
             
          
               let i = 0;
               let j = 0;
              for ( i=0 ; i< gettransactions.length; i++){
                const owner = await user.findOne({user_id: gettransactions[i].user_id},{})
                let arrayname = [] ;
              for ( j=0 ; j< gettransactions[i].tran_member.length; j++){  
                    if(j === 0 ){
                       arrayname.push(owner.user_username)
                    }
                   const getname = await user.findOne({user_id: gettransactions[i].tran_member[j] },{})
                    arrayname.push(getname.user_username )
                    
              }
                //   const check = await user.findOne({user_id: gettransactions[i].tran_member },{})

                   gettransactions[i]['username_member'] = arrayname 
                   gettransactions[i]['count_member'] = j+1 ;
                   gettransactions[i]['owner_name'] = owner.user_username ;


              }

              
                if(gettransactions){
                  return( res.status(200).json({ message: 'Get name workspace success',gettransactions, success: true}))
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
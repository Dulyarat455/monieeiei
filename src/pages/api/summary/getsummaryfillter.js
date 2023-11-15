import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function getsummaryfillter (req,res)  {

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
      dateIn,
      dateOut
      

      } = req.body;
    
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const transactions  = client.db('monieeiei').collection('Workspace transaction');
                const workspacemember  = client.db('monieeiei').collection('Workspace member list');
                const user  = client.db('monieeiei').collection('User');
                

                //set formatdate to day
                const tzOffset = 7; // Offset for Indochina Time (GMT+7)
                const dateNow = new Date(Date.now() + tzOffset * 3600000).toISOString().split('T')[0];

                let querydata = []


                querydata.push({
                    $match: {
                        'workspace_id': workspace_id

                    }
                })

                if(dateIn && dateOut){
                    querydata.push( {
                      '$match': {
                        
                          
                            'bought_date': {
                              $gte: dateIn,
                              $lte: dateOut
                            }
                          
                          
                          }
                    })
                  }


                let getworkspacemember = await workspacemember.aggregate( [
                  {
                    $match: {
                        'workspace_id': workspace_id

                    }
                }

                ] ).toArray();


                let gettransactions = await transactions.aggregate(querydata).toArray();

                 let arrayperson = []
                 let array = []
                 let sumbalance = 0
                 let countPerson = 1 
                 const compareArray  = (value,array) => {
                  for (let i=0 ; i< array.length ; i++){
                     if( array[i] === value){
                        return true ;
                     }
                  }
                  return false ;
               }

                 for (let i=0 ; i< getworkspacemember.length ; i++){    
                  const getusername = await user.findOne({user_id: getworkspacemember[i].user_id},{})
                  arrayperson.push({
                    member: getworkspacemember[i].user_id ,
                    username:  getusername.user_username ,
                    sum: 0 ,

                })
                      
                  }

                 for (let i=0 ; i< gettransactions.length ; i++){    
                  for (let j=0 ; j< arrayperson.length ; j++){ 
                      if(arrayperson[j].member === gettransactions[i].user_id ){
                          if(gettransactions[i].tran_type === 1){
                            arrayperson[j].sum = arrayperson[j].sum - gettransactions[i].amount/(gettransactions[i].tran_member.length + 1)
                          }
                          else if(gettransactions[i].tran_type === 0){
                            arrayperson[j].sum = arrayperson[j].sum + gettransactions[i].amount/(gettransactions[i].tran_member.length + 1)
                          }
                      }
                      else if(compareArray(arrayperson[j].member,gettransactions[i].tran_member) === true){
                        if(gettransactions[i].tran_type === 1){
                            arrayperson[j].sum = arrayperson[j].sum - gettransactions[i].amount/(gettransactions[i].tran_member.length + 1)
                        }
                        else if(gettransactions[i].tran_type === 0){
                            arrayperson[j].sum = arrayperson[j].sum + gettransactions[i].amount/(gettransactions[i].tran_member.length + 1)
                        }
                      }
                  }
                    
                  if(gettransactions[i].tran_type === 1){
                      sumbalance = sumbalance - gettransactions[i].amount

                  }
                  else if(gettransactions[i].tran_type === 0){
                      sumbalance = sumbalance + gettransactions[i].amount
                  }
                
                  }
                 


                


                  

                
                

                if(gettransactions){
                    return( res.status(200).json({ message: 'Get summary fillter success',sumbalance,arrayperson, success: true}))
                    
                }

                else{
                    return ( res.status(400).json({message: 'Get summary fillter failed', success: false}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}

import { MongoClient, ServerApiVersion  } from 'mongodb';
import jwt from 'jsonwebtoken';

export default  async  function getbudgetmanagement (req,res)  {

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
        budget_value
        

        } = req.body;

    
     if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed', success: false });
          }


    try{
       
                await client.connect();
                const budget  = client.db('monieeiei').collection('budget');
                const transactions  = client.db('monieeiei').collection('Workspace transaction');
                const proportion  = client.db('monieeiei').collection('Workspace proportion');
         

                //set formatdate to day
                 const tzOffset = 7; // Offset for Indochina Time (GMT+7)
                 const dateNow = new Date(Date.now() + tzOffset * 3600000).toISOString().split('T')[0];
                
                

                // const areYearAndMonthEqual = (date1,date2) => {
                //     const [year1, month1] = date1.split('-').map(Number);
                //     const [year2, month2] = date2.split('-').map(Number);
                //     console.log("year1 = ",year1)
                //     console.log("year2 = ",year2)
                //     console.log("month1 = ",month1)
                //     console.log("month2 = ",month2)
                //     return year1 === year2 && month1 === month2;
                //   };



                const getproportion  = await proportion.findOne({ workspace_id :  workspace_id },{})
                const getbudget  = await budget.findOne({ workspace_id :  workspace_id },{})

                if(getbudget.budget_value === 0){
                    return ( res.status(400).json({message: 'No budget', success: false}))
                }

                let gettransactions = await transactions.aggregate( [
                    {
                     $match:{
                        'tran_type': 1
                   }
                    },
                    {
                        $match:{
                           'workspace_id': workspace_id

                      }
                       },
                    {
                        $match: {
                          $expr: {   $eq: [
                            {
                              $substr: ['$bought_date', 0, 7], // Extract YYYY-MM from bought_date
                            },
                            dateNow.substring(0, 7), // Extract YYYY-MM from dateNow
                          ],

                          }
                        },
                      }
                  

                 ] ).toArray();


                 if(!gettransactions){
                    return ( res.status(400).json({message: 'gettransactions for budget failed', success: false}))
                }

                 let sumcategory = { food : 0 , utilities : 0 , entertainment : 0 , transport : 0, housing : 0,
                    personal: 0 , medical : 0 , education : 0 , technlogy : 0 , saving : 0
                }
                 for (let i=0 ; i< gettransactions.length; i++){

                        // sumcategory[gettransactions[i].category_name] = sumcategory[gettransactions[i].category_name] + gettransactions[i].amount
                        if(gettransactions[i].category_name === "food"){
                            sumcategory['food'] = sumcategory['food'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "utilities"){
                            sumcategory['utilities'] = sumcategory['utilities'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "entertainment"){
                            sumcategory['entertainment'] = sumcategory['entertainment'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "transport"){
                            sumcategory['transport'] = sumcategory['transport'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "housing"){
                            sumcategory['housing'] = sumcategory['housing'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "personal"){
                            sumcategory['personal'] = sumcategory['personal'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "medical"){
                            sumcategory['medical'] = sumcategory['medical'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "education"){
                            sumcategory['education'] = sumcategory['education'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "technlogy"){
                            sumcategory['technlogy'] = sumcategory['technlogy'] + gettransactions[i].amount
                        }
                        else if(gettransactions[i].category_name === "saving"){
                            sumcategory['saving'] = sumcategory['saving'] + gettransactions[i].amount
                        }

                 }

             let array = []   
             let  arrayloop = ["food", "utilities", "entertainment", "transport", "housing",
                "personal", "medical", "education" , "technlogy" , "saving"]
             let arraypercent = [getproportion.percent0,getproportion.percent1,getproportion.percent2,getproportion.percent3
             ,getproportion.percent4,getproportion.percent5,getproportion.percent6,getproportion.percent7,getproportion.percent8
            ,getproportion.percent9] 
              for (let i=0 ; i< arrayloop.length ; i++){    
                    array.push({
                    category_name : arrayloop[i] ,    
                    budget: getbudget.budget_value * arraypercent[i]/100,
                    actual: sumcategory[arrayloop[i]],
                    remaining: (getbudget.budget_value * arraypercent[i]/100) - sumcategory[arrayloop[i]]

                    })
             }
              
               console.log(sumcategory)
               console.log("array = ", array)

                //  {
                //     $match: {
                //       $or: [
                //         { 'user_id': user_id },
                //         { 'tran_member': user_id}
                //       ]
                //     }
                //   }
                

                if(array.length > 0 ){
                    return( res.status(200).json({ message: 'Get budget management success',array, success: true}))
                    
                }

                else{
                    return ( res.status(400).json({message: 'Get budget management failed',gettransactions, success: false}))
                }

    }catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message, success: false });
      } finally {
        await client.close();
      }



}

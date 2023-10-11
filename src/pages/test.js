import { useState, useEffect } from 'react';


const Test = () => {
     const [check, setCheck] = useState([{
        "User_id": 1,
        "User_firstname": "",
        "user_lastname": ""
    }])
    
     const [ans, setAns] = useState(null)
  
    
      useEffect(() => {
        
       
        
            const res =  fetch(`/api/test`,
               {
                 method: "GET",
                
               }
             ).then((res) => res.json())
             .then((data) => {
               console.log(data.ans)
               setCheck(data.ans)
             }
             );
           
       
      }, []);


      console.log("check = ",check[0]["user_id"])



    return (
        <div>
          <p>hello world</p> 
          {/* {check && (check)} */}
          { check &&  (check[0]["user_lastname"])}
        </div>
      );

}

export default Test;
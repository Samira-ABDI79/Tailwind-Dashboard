import { useEffect , useState } from "react";
import axios from "axios";



function Products(){
    const [productsData,setProducts]=useState([])

    const sendrequest=async ()=>{
        axios({
            method: "get",
            url: "http://localhost:3004/products",
            params: {
                _limit: 5
            }
          })
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
        
      
    }
useEffect(()=>{
   
    sendrequest()
},[])



    const deleteProduct=async (id)=>{
        await fetch (`http://localhost:3004/products/${id}`,{method:'DELETE'})
      setProducts(productsData.filter((item)=>item.id!== id))
    }


    const addProduct=async (title)=>{
        const response = await fetch('http://localhost:3004/products',
        {method:'POST',
        headers:{'Content-type':'application/json',},
        body:JSON.stringify(title)
    })
    const responseData2=await response.json()

     setProducts([...productsData,responseData2])
    }

    const onUpdate=(id , newtitle)=>{
        fetch(`http://localhost:3004/products/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              title: newtitle,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
           
            sendrequest()
      }


    return(
        <>
              <div className="ml-[20%] mr-3 w-[78%]">
 
<div>

{productsData.map((item)=>{
return <p>{item.title}</p>
                })
            }
</div>
              <p>salam</p>

              </div>
        </>
    )
}
export default Products;
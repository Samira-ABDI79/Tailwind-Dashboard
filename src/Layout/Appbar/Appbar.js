import { Link } from "react-router-dom"
import { Posts , Sun ,User,Comments ,Product} from "../../assets"


export const Appbar=()=>{
  return(
    <>
    <div className="px-4 py-6 bg-purple-500 fixed top-0 left-0 text-white font-bold w-[18%] h-screen z-20 text-xl">
 <p className="flex items-center">
    <span ><Sun /></span>
  <span className="ml-2 capitalize"  >Samira Abdi</span></p>
 <ul className="my-6">

   <li className="flex items-center mb-4">
       <span><User /></span> 
    <span className="ml-2 capitalize"> <Link  to="/users"> users</Link>  </span> </li>


       <li className="flex items-center mb-4">
       <span><Comments /></span> 
    <span className="ml-2 capitalize"> <Link  to="/comments"> Comments</Link>  </span> </li>


       <li className="flex items-center mb-4">
       <span><Posts /></span>
    <span className="ml-2 capitalize"> <Link  to="/posts"> Posts</Link>  </span> </li>
    <li className="flex items-center mb-4">
       <span><Product /></span>
    <span className="ml-2 capitalize"> <Link  to="/products"> Products</Link>  </span> </li>
    
    

 </ul>

    </div>
    </>
  )
}
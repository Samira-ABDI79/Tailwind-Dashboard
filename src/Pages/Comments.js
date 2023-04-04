import { useState , useEffect } from "react";
import axios from "axios";
import Editcomment from "../Components/EditComment";
import viewComments from "../Components/ViewComment";
import ViewComments from "../Components/ViewComment";

function Comments(){
    const [id,setId]=useState("")
    const [edit,setEdit]=useState(false);
const [viewcomment , setView ] = useState()
 const [showView,setShowView]=useState(false)
const [comment , setcomment ] = useState()
    const [comments,setcomments]=useState([])
  const sendrequest= () => {
    axios({
      method: "get",
      url: "http://localhost:3004/comments",
      params: {
          _limit: 5
      }
    })
      .then((response) => setcomments(response.data))
      .catch((error) => console.log(error));
  };


  
  const view= (id) => {
    axios({
      method: "get",
      url: `http://localhost:3004/comments/${id}`,
      params: {
          _limit: 5
      }
    })
      .then((response) => setView(response.data))
      .catch((error) => console.log(error));
  };
   
    useEffect(()=>{
      
        sendrequest()
    },[])
    const onUpdate = (newtext,id) => {
        axios({
            method: "patch",
            url: `http://localhost:3004/comments/${id}`,
            data: {
                text : newtext
            },
      })
          .then( sendrequest())
          .catch((error) => console.log(error));
    };
   
  
    const deletecomment = (id) => {
        axios
          .delete(`http://localhost:3004/comments/${id}`)
          .then(sendrequest())
          .catch((error) => console.log(error));
      };
const handleEdit =(comment,id)=>{
    setEdit(true)
setcomment(comment)
setId(id)
}


    


    return(
        <>
       <div className="ml-[20%] mr-3 w-[78%]">
         
<div className="relative overflow-x-auto  ">
    <div className="flex items-center justify-between py-4 bg-white ">
        
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-comments" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for comments"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
         
            <tr>
                <th scope="col" className="p-4">
       
                </th>
                <th scope="col" className="px-6 py-3">
               User
                </th>
                <th scope="col" className="px-6 py-3">
                   Text
                </th>
                <th scope="col" className="px-6 py-3">
                   Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
              {comments.map((comment, index) => (
         
<tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    
                    <div className="">
                        <div className="text-base font-semibold">{comment.username}</div>
                        <div className="font-normal text-gray-500">{comment.useremail}</div>
                    </div>  
                </td>
                <td className="px-6 py-4">
                  {comment.text}
                </td>
                <td className="px-6 py-4">
                  
                        <button onClick={()=>{
                            setShowView(true)
                            view(comment.id)}} className="font-medium  text-green-500 ">view</button> 
                  
                </td>
                <td className="px-6 py-4">
          
                    <a href="#" onClick={()=>handleEdit(comment,comment.id)}
                    
                     type="button" data-modal-target="editcommentModal" data-modal-show="editcommentModal" className="font-medium text-blue-600  hover:underline">Edit comment</a>
                </td>

                <td className="px-6 py-4">
          
          <a href="#" onClick={()=>deletecomment(comment.id)}  className="font-medium text-red-600  hover:underline">Delete</a>
      </td>
            </tr>
            
 
            ))}
           
           
            
           
          
           
        </tbody>
    </table>
    {/* <!-- Edit comment modal --> */}
    {showView?   
 <ViewComments comment={viewcomment} showView={showView}  setShowView={setShowView} /> 
:<></>    
}

 {edit?   
 <Editcomment comments={comment} showModal={edit} id={id} setshowModal={setEdit} onUpdate={onUpdate}/> 
:<></>    
}
</div>

       </div>
        </>
    )
}
    export default Comments;

import { useState } from "react";
function AddUser({showModal,onAdd,
    setshowModal}){
    
        const [name,setname]=useState()
        const [email,setemail]=useState()
        const [phone,setphone]=useState()


        const formHandler=(event)=>{
        event.preventDefault()
        onAdd(name , email , phone)
        setname("")
        setemail("")
        setphone("")
        
        }

    return(
        <>


    
    
 




         {/* <!-- Add user modal --> */}
   {showModal ? 
   <div className="modal">
    
   <div  tabindex="-1"  className="fixed top-0 modal  right-0 z-50 items-center justify-center flex  w-full p-4 overflow-x-hidden overflow-y-auto  h-screen ">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
        
            <form action="#" className="relative bg-white rounded-lg shadow " onSubmit={formHandler}>
              
                <div className="flex items-start justify-between p-4 border-b rounded-t ">
                    <h3 className="text-xl font-semibold text-gray-900 ">
                        Add user
                    </h3>
                    <button type="button" onClick={()=>setshowModal(false)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="AddUserModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
            
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 ">
                            <label for="user-name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                            <input
                            value={name}
                            onChange={(e)=>setname(e.target.value)}
                            type="text" name="user-name" id="user-name" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  " placeholder="Bonnie" required="" />
                        </div>
                      
                        <div className="col-span-6 ">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input
                              value={email}
                              onChange={(e)=>setemail(e.target.value)}
                            type="email" name="email" id="email" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  " placeholder="example@company.com" required="" />
                        </div>
                      
                        <div className="col-span-6 ">
                            <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
                            <input
                              value={phone}
                              onChange={(e)=>setphone(e.target.value)}
                            type="tel" name="phone-number" id="phone-number" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5  " placeholder="••••••••" required="" />
                        </div>
                       
                    </div>
                </div>
           
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">Save all</button>
                </div>
            </form>
        </div>
    </div>
   </div>
    
    :<></>}

        </>
    )
}

export default AddUser;
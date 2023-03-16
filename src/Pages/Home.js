import { useState } from "react";

const users=[
    {
        id:1,
        Name:"Neil Sims",
        email:"neil.sims@flowbite.com",
Position:"React Developer",
Status:"Online",
Action:"",
    },
      {
        id:2,
        Name:"Neil Sims",
        email:"neil.sims@flowbite.com",
Position:"React Developer",
Status:"Online",
Action:"",
    },
      {
        id:3,
        Name:"Neil Sims",
        email:"neil.sims@flowbite.com",
Position:"React Developer",
Status:"Online",
Action:"",
    },
      {
        id:4,
        Name:"Neil Sims",
        email:"neil.sims@flowbite.com",
Position:"React Developer",
Status:"Online",
Action:"",
    },
]
function Home(){
    const [edit,setEdit]=useState(false);
    return(
        <>
       <div className="ml-[20%] mr-3 w-[78%]">
         
<div className="relative overflow-x-auto  ">
    <div className="flex items-center justify-between py-4 bg-white ">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5   dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Action button</span>
                Action
                <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44  ">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label for="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
         
            <tr>
                <th scope="col" className="p-4">
       
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
              {users.map((user, index) => (
         
<tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    
                    <div className="">
                        <div className="text-base font-semibold">{user.Name}</div>
                        <div className="font-normal text-gray-500">{user.email}</div>
                    </div>  
                </td>
                <td className="px-6 py-4">
                  {user.Position}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> {user.Status}
                    </div>
                </td>
                <td className="px-6 py-4">
          
                    <a href="#" onClick={()=>setEdit(true)} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            
 
            ))}
           
           
            
           
          
           
        </tbody>
    </table>
    {/* <!-- Edit user modal --> */}
 {edit?    <div id="editUserModal" tabindex="-1"  className="fixed top-0 left-[10%] right-0 z-50 items-center justify-center  w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] ">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
            {/* <!-- Modal content --> */}
            <form action="#" className="relative bg-white rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 ">
                        Edit user
                    </h3>
                    <button type="button" onClick={()=>setEdit(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="editUserModal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 ">
                            <label for="user-name" className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
                            <input type="text" name="user-name" id="user-name" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 " placeholder="Bonnie" required="" />
                        </div>
                      
                        <div className="col-span-6 ">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input type="email" name="email" id="email" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 " placeholder="example@company.com" required="" />
                        </div>
                      
                        <div className="col-span-6 ">
                            <label for="current-password" className="block mb-2 text-sm font-medium text-gray-900 ">Current Password</label>
                            <input type="password" name="current-password" id="current-password" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 " placeholder="••••••••" required="" />
                        </div>
                        <div className="col-span-6 ">
                            <label for="new-password" className="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                            <input type="password" name="new-password" id="new-password" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 " placeholder="••••••••" required="" />
                        </div>
                    </div>
                </div>
           
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save all</button>
                </div>
            </form>
        </div>
    </div>
:<></>    
}
</div>

       </div>
        </>
    )
}
    export default Home;

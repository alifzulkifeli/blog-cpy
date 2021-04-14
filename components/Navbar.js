import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {

  const { user, username } = useContext(UserContext)


  return (
    <nav className="navbar bg-gray-800  ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-stretch justify-start">

              <div className=" flex-shrink-0 flex items-center cursor-pointer">
                <Link href="/">
                  <img class="h-12 w-auto" src="/al.png" alt="Workflow" />
                </Link>
              </div>
          </div>




      
        {/* user is signed-in and has username */}
        {username && (
          <>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button class="bg-gray-800 p-1 rounded-full text-gray-400 ">
         <a href="/admin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">+ NEW POST</a>
        </button>

        <div class="ml-3 relative cursor-pointer">
          
            <Link href={`/${username}`} class="bg-gray-800 flex text-sm rounded-full " id="user-menu" aria-expanded="false" aria-haspopup="true">
              <img class="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
            </Link>
        
        </div>
      </div>
            {/* <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li> */}
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
       
             <button class="bg-gray-800 p-1 rounded-full text-gray-400 ">
         <a href="/enter" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in</a>
        </button>
           
       
        )}
    
        </div>
      </div>
   
    </nav>

//       <div class="">
//         <div class="">
//           <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
//           <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
//         </div>
       
//       </div>
//       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//           <span class="sr-only">View notifications</span>

//          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
//         </button>

   
//         <div class="ml-3 relative">
//           <div>
//             <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
//               <span class="sr-only">Open user menu</span>
//               <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
//             </button>
//           </div>
//         </div>
//       </div>
  )
}

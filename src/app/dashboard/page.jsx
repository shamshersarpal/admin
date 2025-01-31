import SideBar from "@/components/SideBar"; 
import Image from "next/image";
import welcome from "@/app/images/welcome.svg"
import Footer from "@/components/Footer";

export const metadata = {
title: "Admin | Dashboard",
description: "Admin panel dashboard",
};

export default function dashboard(){
return(
<>                
<>
<section className="">
   <SideBar/>
   <div className="p-4 sm:ml-64 bg-gray-50  ">
      <div className=" rounded-lg dark:border-gray-700 mt-20">
         <div className="flex gap-3 lg:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 w-full">
               <div className="h-full  bg-blue-100 rounded-lg w-full shadow-sm border border-blue-300">
                  <div className="flex flex-wrap justify-between items-center">
                     <div className="p-4 lg:p-6">
                        <h2 className="text-gray-700 text-xl font-semibold">Welcome back Sam!</h2>
                        <div className="flex gap-5 pt-5">
                           <div>
                              <h1 className="text-3xl font-bold">$2,340</h1>
                              <h5 className="text-gray-600">Today’s Booking</h5>
                           </div>
                           <div>
                              <h1 className="text-3xl font-bold">35%</h1>
                              <h5 className="text-gray-600">Overall Performance</h5>
                           </div>
                        </div>
                     </div>
                     <div className="pt-4 pr-4">
                        <Image src={welcome} alt="welcome"/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <div className="bg-red-200 mx-auto shadow-sm p-2 border rounded-lg w-full h-full border-red-300">
                  <div className="flex justify-center">
                     <svg
                        className="w-20 h-20 text-red-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                           fillRule="evenodd"
                           d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                           clipRule="evenodd"
                           />
                     </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-center">200</h2>
                  <h5 className="text-gray-600 text-center">User Active</h5>
               </div>
            </div>
         </div>
         <div className="flex gap-3 mt-3 lg:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 w-full">
               <div className="w-full bg-white h-full shadow sm:rounded-lg border border-gray-200 p-5 ">
                  <div className="relative overflow-x-auto ">
                     <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                        <div>
                           <h2 className="text-xl font-semibold text-gray-800">
                              Last Bookings
                           </h2>
                        </div>
                        <label htmlFor="table-search" className="sr-only">
                        Search
                        </label>
                        <div className="relative">
                           <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                              <svg
                                 className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                 aria-hidden="true"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                                 >
                                 <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                    />
                              </svg>
                           </div>
                           <input
                              type="text"
                              id="table-search"
                              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Search for items"
                              />
                        </div>
                     </div>
                     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                           <tr>
                              <th scope="col" className="p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-all-search"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Product name
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Color
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Category
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                 Action
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-1"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 Apple MacBook Pro 17"
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">Laptop</td>
                              <td className="px-6 py-4">$2999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-2"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 Microsoft Surface Pro
                              </th>
                              <td className="px-6 py-4">White</td>
                              <td className="px-6 py-4">Laptop PC</td>
                              <td className="px-6 py-4">$1999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 Magic Mouse 2
                              </th>
                              <td className="px-6 py-4">Black</td>
                              <td className="px-6 py-4">Accessories</td>
                              <td className="px-6 py-4">$99</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 Apple Watch
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">Accessories</td>
                              <td className="px-6 py-4">$179</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 iPad
                              </th>
                              <td className="px-6 py-4">Gold</td>
                              <td className="px-6 py-4">Tablet</td>
                              <td className="px-6 py-4">$699</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                 >
                                 Apple iMac 27"
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">PC Desktop</td>
                              <td className="px-6 py-4">$3999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/3 w-full">
               <div className="w-full h-full shadow sm:rounded-lg border bg-white border-gray-200 p-4 ">
                  <ul className="">
                     <div className="flex items-center  justify-between">
                        <h3 className="mb-0 text-lg font-semibold text-ld">Notification</h3>
                        <span
                           className="flex h-fit w-fit items-center font-medium bg-blue-700 text-white p-1 text-xs rounded-full px-2.5 py-[5px]"
                           data-testid="flowbite-badge"
                           >
                        <span>5 new</span>
                        </span>
                     </div>
                     <div  className="max-h-80 mt-3">
                        <div className="simplebar-wrapper" >
                           <div className=" ">
                              <div className="simplebar-height-auto-observer" />
                              </div>
                              <div className="simplebar-mask">
                                 <div className="simplebar-offset" >
                                    <div
                                       className="simplebar-content-wrapper overflow-y-auto"
                                       tabIndex={0}
                                       role="region"
                                       aria-label="scrollable content">
                                       <div className="simplebar-content" style={{ padding: 0 }}>
                                       <li role="menuitem" className="focus:outline-none hover:bg-gray-100">
                                          <a
                                             type="button"
                                             className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                             tabIndex={-1}
                                             href="#"
                                             >
                                             <div className="flex items-center">
                                                <span className="flex items-center justify-center relative bg-blue-100 rounded-full h-10 w-10">
                                                   <svg
                                                      className="w-6 h-6 text-blue-700"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                                         clipRule="evenodd"
                                                         />
                                                   </svg>
                                                </span>
                                                <div className="ps-4">
                                                   <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                                      Roman smith
                                                   </h5>
                                                   <span className="text-xs block text-gray-500">
                                                   Congratulate him
                                                   </span>
                                                </div>
                                             </div>
                                          </a>
                                       </li>
                                       <li role="menuitem" className="focus:outline-none hover:bg-gray-100">
                                          <a
                                             type="button"
                                             className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                             tabIndex={-1}
                                             href="#"
                                             >
                                             <div className="flex items-center">
                                                <span className="flex items-center justify-center relative bg-red-100 rounded-full h-10 w-10">
                                                   <svg
                                                      className="w-6 h-6 text-red-700"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                                         clipRule="evenodd"
                                                         />
                                                   </svg>
                                                </span>
                                                <div className="ps-4">
                                                   <h5 className="mb-1 text-sm font-semibold text-gray-800">
                                                      New message
                                                   </h5>
                                                   <span className="text-xs block  text-gray-600">
                                                   Salma sent you new message
                                                   </span>
                                                </div>
                                             </div>
                                          </a>
                                       </li>
                                       <li role="menuitem" className="focus:outline-none hover:bg-gray-100">
                                          <a
                                             type="button"
                                             className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                             tabIndex={-1}
                                             href="#"
                                             >
                                             <div className="flex items-center">
                                                <span className="flex items-center justify-center relative bg-yellow-100 rounded-full h-10 w-10">
                                                   <svg
                                                      className="w-6 h-6 text-yellow-700"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                                         clipRule="evenodd"
                                                         />
                                                   </svg>
                                                </span>
                                                <div className="ps-4">
                                                   <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                                      Bianca sent payment
                                                   </h5>
                                                   <span className="text-xs block text-gray-600">
                                                   Check your earnings
                                                   </span>
                                                </div>
                                             </div>
                                          </a>
                                       </li>
                                       <li role="menuitem" className="focus:outline-none hover:bg-gray-100">
                                          <a
                                             type="button"
                                             className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                             tabIndex={-1}
                                             href="#"
                                             >
                                             <div className="flex items-center">
                                                <span className="flex items-center justify-center relative bg-green-100 rounded-full h-10 w-10">
                                                   <svg
                                                      className="w-6 h-6 text-green-700"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                                         clipRule="evenodd"
                                                         />
                                                   </svg>
                                                </span>
                                                <div className="ps-4">
                                                   <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                                      Jolly completed tasks
                                                   </h5>
                                                   <span className="text-xs block text-gray-600">
                                                   Assign her new tasks
                                                   </span>
                                                </div>
                                             </div>
                                          </a>
                                       </li>
                                       <li role="menuitem" className="focus:outline-none hover:bg-gray-100">
                                          <a
                                             type="button"
                                             className="cursor-pointer text-sm text-ld hover:text-primary focus:bg-hover focus:outline-none py-3 flex justify-between items-center bg-hover group/link w-full"
                                             tabIndex={-1}
                                             href="#"
                                             >
                                             <div className="flex items-center">
                                                <span className="flex items-center justify-center relative bg-orange-100 rounded-full h-10 w-10">
                                                   <svg
                                                      className="w-6 h-6 text-orange-700"
                                                      aria-hidden="true"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width={24}
                                                      height={24}
                                                      fill="currentColor"
                                                      viewBox="0 0 24 24"
                                                      >
                                                      <path
                                                         fillRule="evenodd"
                                                         d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                                         clipRule="evenodd"
                                                         />
                                                   </svg>
                                                </span>
                                                <div className="ps-4">
                                                   <h5 className="mb-1 text-sm text-gray-800 font-semibold">
                                                      John received payment
                                                   </h5>
                                                   <span className="text-xs block text-gray-600">
                                                   $230 deducted from account
                                                   </span>
                                                </div>
                                             </div>
                                          </a>
                                       </li>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </ul>
               </div>
            </div>
         </div>
         <Footer/>
      </div>
   </div>
</section>
</>
</>
)
}
export default function TableOne(){
    return(
        <>
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
                                 className="w-5 h-5 text-gray-500  "
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
                              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
                              placeholder="Search for items"
                              />
                        </div>
                     </div>
                     <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                           <tr>
                              <th scope="col" className="p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-all-search"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
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
                           <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-1"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
                                       />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 Apple MacBook Pro 17"
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">Laptop</td>
                              <td className="px-6 py-4">$2999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600   hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-2"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                                       />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 Microsoft Surface Pro
                              </th>
                              <td className="px-6 py-4">White</td>
                              <td className="px-6 py-4">Laptop PC</td>
                              <td className="px-6 py-4">$1999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600   hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-search-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                                       />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 Magic Mouse 2
                              </th>
                              <td className="px-6 py-4">Black</td>
                              <td className="px-6 py-4">Accessories</td>
                              <td className="px-6 py-4">$99</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600   hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 Apple Watch
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">Accessories</td>
                              <td className="px-6 py-4">$179</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600   hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   focus:ring-2  "
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 iPad
                              </th>
                              <td className="px-6 py-4">Gold</td>
                              <td className="px-6 py-4">Tablet</td>
                              <td className="px-6 py-4">$699</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600  hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                           <tr className="bg-white   hover:bg-gray-50  ">
                              <td className="w-4 p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-table-3"
                                       type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500   focus:ring-2  "
                                       />
                                    <label htmlFor="checkbox-table-3" className="sr-only">
                                    checkbox
                                    </label>
                                 </div>
                              </td>
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
                                 >
                                 Apple iMac 27"
                              </th>
                              <td className="px-6 py-4">Silver</td>
                              <td className="px-6 py-4">PC Desktop</td>
                              <td className="px-6 py-4">$3999</td>
                              <td className="px-6 py-4">
                                 <a
                                    href="#"
                                    className="font-medium text-blue-600   hover:underline"
                                    >
                                 Edit
                                 </a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
        </>
    )
}
import Image from "next/image"
import userOne from "@/app/images/profile-picture-1.jpg"
import userTwo from "@/app/images/profile-picture-2.jpg"
import userThree from "@/app/images/profile-picture-3.jpg"
import userFour from "@/app/images/profile-picture-4.jpg"
import userFive from "@/app/images/profile-picture-5.jpg"

export default function TableTwo(){
    return(
        <>
          <div className="w-full bg-white h-full shadow sm:rounded-lg border border-gray-200 p-5 ">
           
            <div className="relative overflow-x-auto  ">
  <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
    <div className="text-xl font-semibold text-gray-800">
    User Data
    </div>
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search-users"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search for users"
      />
    </div>
  </div>
  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">Name</th>
        <th scope="col" className="px-6 py-3">Position</th>
        <th scope="col" className="px-6 py-3">Status</th>
        <th scope="col" className="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <Image
            className="w-10 h-10 rounded-full"
            src={userOne}
            alt="Jese image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold">Neil Sims</div>
            <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">React Developer</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Edit user
          </a>
        </td>
      </tr>

      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <Image
            className="w-10 h-10 rounded-full"
            src={userTwo}
            alt="Jese image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold">Jese Leos</div>
            <div className="font-normal text-gray-500">jese@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">Vue JS Developer</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Edit user
          </a>
        </td>
      </tr>

      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <Image
            className="w-10 h-10 rounded-full"
            src={userThree}
            alt="Jese image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold">Bonnie Green</div>
            <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">Designer</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Edit user
          </a>
        </td>
      </tr>

      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <Image
            className="w-10 h-10 rounded-full"
            src={userFour}
            alt="Jese image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold">Leslie Livingston</div>
            <div className="font-normal text-gray-500">leslie@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">SEO Specialist</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Edit user
          </a>
        </td>
      </tr>

      <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
          <Image
            className="w-10 h-10 rounded-full"
            src={userFive}
            alt="Jese image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold">Thomas Lean</div>
            <div className="font-normal text-gray-500">thomes@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">UI/UX Engineer</td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Edit user
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
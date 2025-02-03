import SideBar from "@/components/SideBar";
import TableTwo from "@/components/TableTwo";
import Paginations from "@/components/Paginations";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Admin | Table Two",
    description: "Admin panel dashboard",
    };

export default function Table2nd(){
    return(
        <>
        <SideBar/>
        <div className="p-4 sm:ml-64 bg-gray-50  h-screen  ">
            <div className="mt-20">
             <TableTwo/>            </div>
             <Paginations/>
             <Footer/>
        </div>
        
        </>
    )
}
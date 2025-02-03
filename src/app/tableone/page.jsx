import Footer from "@/components/Footer";
import Paginations from "@/components/Paginations";
import SideBar from "@/components/SideBar";
import TableOne from "@/components/TableOne"; 

export const metadata = {
    title: "Admin | Table One",
    description: "Admin panel dashboard",
    };
    
export default function tableone(){
    return(
        <>
        <SideBar/>
        <div className="p-4 sm:ml-64 bg-gray-50 h-screen overflow-y-auto">
            <div className="mt-20">
            <div className=" ">
                <TableOne/>
            </div>
            </div>
            <Paginations/>
            <Footer/>
        </div>
            
        </>
    )
}
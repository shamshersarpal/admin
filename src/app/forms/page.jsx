import Footer from "@/components/Footer";
import FromOne from "@/components/FormOne";
import SideBar from "@/components/SideBar";

export const metadata = {
    title: "Admin | Forms",
    description: "Admin panel dashboard",
    };

export default function forms(){
    return(
        <>
        <SideBar/>
        <div className="p-4 sm:ml-64 bg-gray-50 h-screen overflow-y-auto">
            <div className="mt-20">
            <FromOne/>
            <Footer/>
            </div>
        </div>
       
        </>
    )
}
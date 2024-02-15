
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdLogIn } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";


export default function Navbar() {

    return (
        <div className="text-blue-950 font-medium flex justify-between sticky top-0 py-4 z-10 backdrop-blur-md  lg:px-16 px-6 ">
            <p>Logo</p>
            <div className="lg:flex hidden gap-8">
                <p className="flex gap-1 items-center"> <LuLayoutDashboard className="text-xl" />Dashboard</p>
                <p className="flex gap-1 items-center ">Sign out <IoMdLogIn className="text-xl" /></p>
                <Link href={'/auth/registration'} className="flex gap-1 items-center ">Register </Link>
            </div>
            <div className="flex lg:hidden gap-5">
                <p><LuLayoutDashboard className="text-2xl" /></p>
                <p><IoMdLogIn className="text-2xl" /></p>
            </div>
        </div>

    )
}

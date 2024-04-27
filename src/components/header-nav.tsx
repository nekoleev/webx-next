
import Link from "next/link";

export const HeaderNav = () => {
    return (
        <nav className="flex items-center bg-slate-600 text-white h-[72px] p-[16px] sm:h-[104px] sm:p-[32px]">
            {/* div.container.mx-auto.flex.justify-between.items-center>a.text-2x1.font-bold+div>link>a.mx-2 */}
            <div className="flex justify-between items-center h-[40px] w-full sm:h-[56px]">
                <a href="" className="text-2x1 font-bold">WAKARANAI</a>
                <div className="hidden sm:flex">
                    <Link href="/" className="mx-2 hover:font-bold">
                        Home
                    </Link>
                    <Link href="/about" className="mx-2 hover:font-bold">
                        About
                    </Link>
                    <Link href="/courses" className="mx-2 hover:font-bold">
                        Courses
                    </Link>
                    <Link href="/courses" className="mx-2 hover:font-bold">
                        LOGIN
                    </Link>
                </div>
            </div>
        </nav>
        // <div className="flex justify-center items-center h-[72px] w-full p-[16px] bg-white  ">
        //     <div className="flex justify-between items-center w-[343px] h-[40px]">
        //         <p>LOGO</p>
        //    </div>
        // </div>
    );
}
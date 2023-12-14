import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-20 shadow-md flex items-center gap-10 bg-slate-50 px-5">
            <div className="w-32 h-12 flex gap-3 items-center">
                <Image src="/ukulima-logo.png" alt="ukulima-logo" width={48} height={48}/>
                <h1 className="font-ephesis font-bold text-xl italic uppercase -ml-8">Ukulima</h1>
            </div>
            <div>
                <Link href="/" className="uppercase bg-sky-400 px-6 py-2 text-lg font-semibold font-ephesis rounded-3xl hover:bg-sky-500">Home</Link>
            </div>
        </div>
    )
}
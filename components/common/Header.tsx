import Link from "next/link"
import { useEffect, useState } from "react"

const Header: React.FC = () => {
    // const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const handleResize = () => {
    //             setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    //         }
        
    //         window.addEventListener("resize", handleResize)
    //         handleResize()

    //         return () => {
    //             window.removeEventListener("resize", handleResize)
    //         }
    //     }
    // }, [windowSize.width])

    return (
        <div className="flex flex-row-reverse sm:flex-row justify-between w-screen border-b-2 p-4 bg-slate-950">
            <h1 className="italic">
                PoGo Summary yolo
            </h1>


            <Link
                prefetch={false}
                href="/pokemons"
                className="hoverStyle font-bold"
            >
                Pokemons
            </Link>
        </div>
    )
}

export default Header
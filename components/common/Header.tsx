import { useRouter } from "next/router"
import Link from "next/link"

const Header: React.FC = () => {
    const path = useRouter().pathname
    
    const links = [
        {
            name: "Pokemons",
            href: "/pokemons"
        }
    ]

    return (
        <div className={`
                flex flex-row-reverse sm:flex-row justify-between w-screen border-b-2 border-teal-500 p-4 bg-slate-950

            `}>
            <h1 className="italic">
                PoGo Summary
            </h1>

            {links.map((link, index) => 
                <Link
                    key={index}
                    prefetch={false}
                    href={link.href}
                    className={`hoverStyle font-bold ${path === link.href ? "text-teal-500" : "text-white"}`}
                >
                    {link.name}
                </Link>
            )}
        </div>
    )
}

export default Header
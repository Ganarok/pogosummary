import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"

const Header: React.FC = () => {
    const [ isMobile, setIsMobile ] = useState(false)
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const router = useRouter()
    
    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Pokemon released",
            href: "/pokemons"
        },
        {
            name: "Possible dittos",
            href: "/dittos"
        },
    ]

    const changeLocale = (locale: string) => {
        router.locale = locale
        router.push(router.pathname, router.asPath, { locale })
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 640)
                document.body.style.overflow = isMenuOpen ? "hidden" : "auto"                
            }
        
            window.addEventListener("resize", handleResize)
            handleResize()

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [isMobile, isMenuOpen])

    return (
        <div className="flex flex-row-reverse relative justify-between items-center w-screen border-b-2 border-red-500 p-4 bg-slate-950">
            <h1 className="italic">
                PoGo Summary
            </h1>

            {isMobile &&
                <div className="absolute h-screen top-0 left-0 z-10">
                    <div
                        className={`
                        flex flex-col absolute space-y-4 right-0 justify-evenly items-center bg-slate-950 border-2 border-red-500 transition-all duration-500 ease-in-out transform w-screen h-screen
                        ${isMenuOpen ? "translate-x-full" : "translate-x-0"}
                    `}>
                        <div className="flex flex-col items-center h-1/2 justify-evenly">
                            {links.map((link, index) => 
                                <Link
                                    key={index}
                                    prefetch={false}
                                    href={link.href}
                                    className={`
                                        hoverStyle font-bold text-2xl
                                        ${router.pathname === link.href ? "bg-clip-text gradient-red text-transparent" : "text-white"}
                                    `}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>

                        {isMenuOpen &&
                            <div 
                                onClick={setIsMenuOpen.bind(this, !isMenuOpen)}
                                className="absolute top-0 right-4"
                            >
                                <div className="relative w-12 h-12">
                                    <Image 
                                        src="/images/close.svg"
                                        alt="close"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        }

                        <div className="w-3/4 border-t border-gray-200 opacity-10" /> 

                        <div className="flex w-full justify-evenly">
                            <a 
                                className="relative w-12 h-12"
                                href="https://github.com/Ganarok"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src="/images/github.svg"
                                    fill
                                    className="object-contain"
                                    alt="Github"
                                />
                            </a>

                            <a 
                                className="relative w-12 h-12"
                                href="https://gabrielriboldi.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src="/images/user_circle.svg"
                                    fill
                                    className="object-contain"
                                    alt="User"
                                />
                            </a>

                            <div
                                className="relative w-12 h-12"
                                onClick={changeLocale.bind(this, router.locale === "en" ? "fr" : "en")}
                            >
                                <Image
                                    src="/images/locale.svg"
                                    fill
                                    className="object-contain"
                                    alt="Locale"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {isMobile ?
                <div 
                    className="relative h-12 w-12"
                    onClick={setIsMenuOpen.bind(this, !isMenuOpen)}
                >
                    <Image
                        src="/images/menu.svg"
                        fill
                        className="object-contain"
                        alt="Menu"
                    />
                </div>
                :
                <div className="flex space-x-8">
                    {links.map((link, index) => 
                        <Link
                            key={index}
                            prefetch={false}
                            href={link.href}
                            className={`
                                hoverStyle font-bold
                                ${router.pathname === link.href ? "bg-clip-text gradient-red text-transparent" : "text-white"}
                            `}
                        >
                            {link.name}
                        </Link>
                    )}
                </div>
            }
        </div>
    )
}

export default Header
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { GetStaticProps } from 'next'
import Image from "next/image"

import getLanguage from 'lib/getLanguage'
import Layout from "components/common/Layout"
import Loader from "components/common/Loader"

const PokemonId: React.FC = () => {
    const { query: { id }, locale } = useRouter()
    const [ loading, setLoading ] = useState(true)
    const [ isShiny, setIsShiny ] = useState(false)
    const [ isMega, setIsMega ] = useState(false)
    const [ asset, setAsset ] = useState("")
    const [ pokemon, setPokemon ] = useState({})    

    useEffect(() => {
        if (!id)
            return

        const fetchPokemon = async () => {
            setLoading(true)

            try {
                if (!id) throw new Error("Failed to fetch pokemon: no ID provided")

                const response = await fetch(`https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id/${id}.json`)
                const data = await response.json()

                if (!response.ok || !data) throw new Error("Failed to fetch pokemon: invalid data")

                console.log(data)

                setPokemon(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [id])

    return (
        <Layout>
            {loading &&
                <div className="flex items-center w-full self-center justify-center">
                    <Loader />
                </div> 
            }

            {!loading &&
                <div className="flex space-y-4 w-full">
                    <div className="flex flex-col m-4 md:flex-row w-full items-center md:items-stretch md:justify-center md:space-x-4">
                        <div className="relative bg-slate-700 w-60 h-60 sm:w-72 sm:h-72">
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${isShiny ? 'shiny/' : ''}${id}.png`}
                                fill
                                sizes="25vw"
                                alt='pokemon'
                                priority
                            />

                            <div 
                                className={`
                                    absolute bottom-0 right-0 w-6 h-6 rounded-full p-5 m-2 select-none hover:hoverStyle
                                    ${isShiny ? 'bg-red-500' : 'bg-slate-600'}
                                `}
                                onClick={setIsShiny.bind(this, !isShiny)}
                            >
                                <Image
                                    src='/images/shiny.svg'
                                    alt='shiny'
                                    fill
                                    sizes="5vw"
                                />
                            </div>

                            {pokemon.hasMegaEvolution &&
                                <div 
                                    className={`
                                        absolute top-0 right-0 w-6 h-6 rounded-full p-5 m-2 select-none hover:hoverStyle
                                        ${isMega ? 'scale-105' : ''}
                                    `}
                                    onClick={setIsMega.bind(this, !isMega)}
                                >
                                    <Image
                                        src='/images/mega_evolve.png'
                                        alt='shiny'
                                        fill
                                        sizes="5vw"
                                        className='object-contain'
                                    />
                                </div>
                            }
                        </div>

                        <div className='flex flex-col space-y-2 font-bold'>
                            <h3 className="py-2 text-xl">
                                {pokemon.names[getLanguage(locale)]}
                            </h3>

                            <p>
                                Generation : {pokemon.generation}
                            </p>


                            {pokemon.evolutions.length > 0 &&
                                <div className='flex flex-col space-y-2 font-bold'>
                                    <p>
                                        Evolutions : {pokemon.evolutions.length}
                                    </p>

                                    <div className='flex flex-row space-x-2'>
                                        <div className='relative w-6 h-6'>
                                            <Image
                                                src='/images/candy.png'
                                                alt='candy'
                                                fill
                                                sizes="2vw"
                                                className='object-contain'
                                            />
                                        </div>

                                        <p className='font-bold'>
                                            {pokemon.evolutions[0].candies}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: 'id', locale: 'en' }}],
        fallback: true, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...await serverSideTranslations(locale!, ['common']),
            // Will be passed to the page component as props
        },
    }
}

export default PokemonId
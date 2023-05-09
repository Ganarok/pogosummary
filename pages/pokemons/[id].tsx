import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import { ISinglePokemon } from "lib/types"
import Layout from "components/common/Layout"
import Loader from "components/common/Loader"
import Image from "next/image"

const PokemonId: React.FC = () => {
    const { id } = useRouter().query
    const [ loading, setLoading ] = useState(true)
    const [ isShiny, setIsShiny ] = useState(false)
    const [ pokemon, setPokemon ] = useState({})

    // https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex/id/{id}.json
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
                    <div className="flex flex-col w-full items-center m-4">
                        <div className="relative bg-slate-700 w-60 h-60 sm:w-72 sm:h-72">
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${isShiny ? 'shiny/' : ''}${id}.png`}
                                fill
                                sizes="25vw"
                                alt='pokemon'
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
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

export default PokemonId
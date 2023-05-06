import { useEffect, useState } from "react"
import { 
    AutoSizer,
    List,
    ListRowProps
} from "react-virtualized"

import Layout from "components/common/Layout"
import Loader from "components/common/Loader"
import Pokemon from "components/Pokemon"

interface IPokemon {
    name: string
    id: number
}

interface IPokemons {
    [key: string]: IPokemon
}

const Pokemons: React.FC = () => {
    const [ pokemons, setPokemons ] = useState(Array<IPokemon>())
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true)

            try {
                const response = await fetch("https://pogoapi.net/api/v1/released_pokemon.json")
                const data: IPokemons = await response.json()

                if (!response.ok || !data) throw new Error("Failed to fetch pokemons")

                const parsedPokemons: Array<IPokemon> = Object.entries(data).map(([key, value]) => value)

                setPokemons(parsedPokemons)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemons()
    }, [])

    const renderRow = ({ key, index, style }: ListRowProps) => {
        const pokemon = pokemons[index]

        return (
            <Pokemon 
                key={key}
                id={pokemon.id}
                name={pokemon.name}
                style={style}
            />
        )
    }

    return (
        <Layout>
            {loading &&
                <div className="flex items-center w-full self-center justify-center">
                    <Loader />
                </div> 
            }

            {!loading && pokemons.length > 0 &&
                <AutoSizer className="grid grid-cols-1 sm:grid-cols-3 items-center">
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={300}
                            rowRenderer={renderRow}
                            rowCount={pokemons.length}
                        />
                    )}
                </AutoSizer>
            }
        </Layout>
    )
}

export default Pokemons
import { useEffect, useState } from "react"
import { 
    AutoSizer,
    Grid,
    GridCellProps
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
    const [ windowWidth, setWindowWidth ] = useState(0)

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

        if (!pokemons.length)
            fetchPokemons()

        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth)
            }
        
            window.addEventListener("resize", handleResize)
            handleResize()

            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [windowWidth])

    const cellRendering = ({ key, rowIndex, columnIndex, style }: GridCellProps) => {
        const pokemon = pokemons[rowIndex * 3 + columnIndex]

        if (!pokemon)
            return

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
        <Layout className="flex-col">
            {loading &&
                <div className="flex items-center w-full self-center justify-center">
                    <Loader />
                </div> 
            }

            {!loading && pokemons.length > 0 &&
                <AutoSizer style={{ width: '100%', height: '100%' }}>
                    {({ width, height }) => (
                        <Grid
                            width={width}
                            height={height}
                            rowHeight={300}
                            cellRenderer={cellRendering}
                            scrollToAlignment="center"
                            rowCount={pokemons.length}
                            columnWidth={300}
                            columnCount={Math.floor(windowWidth / 300)}
                        />
                    )}
                </AutoSizer>
            }
        </Layout>
    )
}

export default Pokemons
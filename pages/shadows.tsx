import { useState, useEffect } from "react"
import { Grid, GridCellProps } from "react-virtualized"

import { IPokemon, IPokemons } from "lib/types"
import Layout from "components/common/Layout"
import Loader from "components/common/Loader"
import Pokemon from "components/Pokemon"

const Shadows: React.FC = () => {
    const [ pokemons, setPokemons ] = useState(Array<IPokemon>())
    const [ loading, setLoading ] = useState(false)
    const [ windowWidth, setWindowWidth ] = useState(0)

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true)

            try {
                const response = await fetch("https://pogoapi.net/api/v1/shadow_pokemon.json")
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

        if (pokemons.length === 0)
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

    const cellRendering = ({ key, style }: GridCellProps) => {
        const indexes = key.split("-")
        const index = parseInt(indexes[0]) * Math.floor(windowWidth / 300) + parseInt(indexes[1])
        const pokemon = pokemons[index]

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
                <Grid
                    width={windowWidth}
                    height={window.innerHeight - 80}
                    rowHeight={300}
                    cellRenderer={cellRendering}
                    scrollToAlignment="center"
                    rowCount={pokemons.length}
                    columnWidth={300}
                    columnCount={Math.floor(windowWidth / 300)}
                    className="grid items-center justify-center"
                />
            }
        </Layout>
    )
}

export default Shadows
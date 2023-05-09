import Image from "next/image"
import Link from "next/link"

import { PokemonProps } from "lib/types"

const Pokemon: React.FC<PokemonProps> = ({ id, name, style }) => {
    return (
        <Link
            href={`/pokemons/${id}`}
            style={style}
            prefetch={false}
            className="flex flex-col space-y-4 items-center self-center justify-center col-span-1 hover:hoverStyle"
        >
            <div className="relative bg-slate-700 w-60 h-60">
                <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt='pokemon'
                    fill
                    sizes="25vw"
                    className="object-contain"
                />
            </div>

            <p className="font-bold">
                {name}
            </p>
        </Link>
    )
}

export default Pokemon
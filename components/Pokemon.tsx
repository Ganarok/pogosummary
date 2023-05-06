import Image from "next/image"

interface PokemonProps {
    id: number,
    name: string,
    style: object
}

const Pokemon: React.FC<PokemonProps> = ({ id, name, style }) => {
    return (

        <div
            style={style}
            className="flex flex-col col-span-1 space-y-4 items-center justify-center hover:hoverStyle"
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
        </div>
    )
}

export default Pokemon
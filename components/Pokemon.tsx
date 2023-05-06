import Image from "next/image"

interface PokemonProps {
    id: number,
    name: string,
    style: object
}

const Pokemon: React.FC<PokemonProps> = ({ id, name, style }) => {
    return (
        <div
            className="flex flex-col space-y-4 items-center justify-center col-span-1 hover:hoverStyle"
            style={style}
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
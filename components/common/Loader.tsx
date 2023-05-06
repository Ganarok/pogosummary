import Image from "next/image"

interface LoaderProps {
    size?: number
}

const Loader: React.FC<LoaderProps> = ({ size = 12 }) => {
    return (
        <div className={`relative animate-spin h-${size} w-${size}`}>
            <Image 
                src="/images/pokeball.svg"
                fill
                sizes="5vw"
                alt="Pokeball"
            />
        </div>
    )
}

export default Loader
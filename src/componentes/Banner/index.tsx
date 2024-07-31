import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textoAlternativo}/>
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}

        </header>
    )
}

export default Banner
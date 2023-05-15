import { useEffect, useState } from "react"

const Questao03 = () => {
    const [paisMaiorPopulacao, setPaisMaiorPopulacao] = useState({})
    const [paisMenorPopulacao, setPaisMenorPopulacao] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // criando uma promise que quando resolvida, retorna um array de objetos
    const getPaisesPromise = new Promise((resolve, reject) => {
        const paises = [
            { "capital": ["Dublin"], "population": 4994724 },
            { "capital": ["Nicosia"], "population": 1207361 },
            { "capital": ["Madrid"], "population": 47351567 }
        ]
        resolve(paises)
    })

    useEffect(() => {
        // executando a Promise, utilizando then para pegar os valores resolvidos
        getPaisesPromise
            .then(paises => {
                // usando array.reduce para obter o país de maior população, comparando cada elemento do array com o anterior
                const paisMaiorPopulacao = paises.reduce((previous, current) => {
                    return previous.population > current.population ? previous : current;
                })
                setPaisMaiorPopulacao(paisMaiorPopulacao)

                // usando array.reduce para obter o país de menor população, comparando cada elemento do array com o anterior
                const paisMenorPopulacao = paises.reduce((previous, current) => {
                    return previous.population < current.population ? previous : current;
                })
                
                setPaisMenorPopulacao(paisMenorPopulacao)

                setIsLoading(value => !value)
            })
    }, [])

    const renderiza = () => {
        if (isLoading) {
            return <p>Carregando</p>
        }

        return (
            <>
                <h3>Maior Populacao: {paisMaiorPopulacao.capital[0]} - {paisMaiorPopulacao.population}</h3>
                <h3>Menor Populacao: {paisMenorPopulacao.capital[0]} - {paisMenorPopulacao.population}</h3>
            </>
        )
    }

    return (
        <>
            {renderiza()}
        </>
    )
}

export default Questao03
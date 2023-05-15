import { useEffect, useState } from "react"

const Questao01A = () => {
    const [medias, setMedias] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getMedias = (value) => {
        setMedias(value)
        setIsLoading(previousValue => !previousValue)
    }

    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
    ]

    function renderiza() {
        if(isLoading) return (
            <p>Carregando...</p>
        )

        // com as médias calculadas, para cada média percorrida, se ela for maior que 6.0, será renderizado o nome e a média
        return (medias.map((media, i) => {
            if (media > 6.0) return (
                <p key={i}>{alunos[i].nome} - média: {media}</p>
            )
        }))
    }
    return (
        <>
            {/* passando para o componente filho a referencia da função que ele deve executar para obter as médias */}
            <Questao02B alunos={alunos} funcao={getMedias} />
            {renderiza()}
        </>
    )
}

function Questao02B({ alunos, funcao }) {
    const medias = []
    useEffect(() => {
        // para cada aluno recebido via props, vai ser calculado a média e adicionado ao vetor de médias
        alunos.forEach(aluno => {
            const { ap1, ap2 } = aluno.notas

            medias.push((ap1 + ap2) / 2)
        })

        // a função executada foi passada via props pelo componente pai, retornando as médias calculadas
        funcao(medias)
    }, [])
}

export default Questao01A
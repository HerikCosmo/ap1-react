import { useState } from "react"

const Questao02 = () => {
    const [isFront, setIsFront] = useState(true)


    return (
        <>
            {/* Se a variável isFront é verdadeira, renderize o código a seguir */}
            {isFront && (
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites//master/sprites/pokemon/25.png" />
            )}

            {/* Se a variável isFront é falsa, renderize o código a seguir */}
            {!isFront && (
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites//master/sprites/pokemon/back/25.png" />
            )}
           

            {/* Ao clicar no botão, a variável isFront vai inverter o seu valor */}
            <button onClick={() => setIsFront(previousValue => !previousValue)}>Virar</button>
        </>
    )
}

export default Questao02
import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)
    const [name, setName] = useState("Taka")
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <h1>If ternário</h1>
            {name === "Takashi" ?
                (
                    <div>
                        <p>O nome é Takashi</p>
                    </div>
                ) : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )}
            <button onClick={() => setName("Takashi")}>Clica aqui</button>
        </div>
    )
}

export default ConditionalRender
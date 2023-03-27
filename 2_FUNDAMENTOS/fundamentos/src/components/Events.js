const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);

        console.log( "Ativou o evento!");
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            {/* Não recomendado usar as funções no event como abaixo: */}
            <div>
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
                <button 
                    onClick={() => { 
                        if(true){
                            console.log("Isso não deveria existir =)")
                        }
                    }}
                >
                    Clica aqui, por favor
                </button>
            </div>
        </div>
    )
}

export default Events
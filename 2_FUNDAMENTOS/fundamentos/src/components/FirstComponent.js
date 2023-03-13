// Exemplo de comentário em JSX

const FirstComponent = () => {
    // Fora do return, o comentário é um comentário de JS
    
    /*
        Comentário de bloco
    */

    return (      
        <div>
            { /* Comentário dentro do return é um comentário de JSX e ele é feito assim*/}
            <h1>Meu primeiro componente</h1>
            
            <p className="teste">Meu texto</p>
        </div>
    );
}

export default FirstComponent;
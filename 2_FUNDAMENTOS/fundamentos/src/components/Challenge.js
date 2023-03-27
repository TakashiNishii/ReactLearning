const Challenge = () => {
    const num1 = 3;
    const num2 = 4;
    
    const handleSoma = (num1, num2) => {
        console.log(num1 + num2)
    }

    return (
    <div>
        <h1>{num1} + {num2}</h1>
        <button onClick={() => handleSoma(num1, num2)}>Somar</button>
    </div>
    )
}

export default Challenge
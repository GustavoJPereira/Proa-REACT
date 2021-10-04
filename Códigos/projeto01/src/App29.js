import './App.css';

var cota = parseFloat(prompt("Digite quantos dolares vale um real: "));
var real = parseFloat(prompt("Digite o quantos reais deseja converter: "));

function App29(){

    return(
        <div className = "App1">
            <p> O valor de R$: {real.toFixed(2)} equivale a US$: {(real * cota).toFixed(2)}</p>
        </div>
    );

}

export default App29;
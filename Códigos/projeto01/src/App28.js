import './App.css';

var cota = parseFloat(prompt("Digite quantos reais vale um dólar: "));
var dolar = parseFloat(prompt("Digite o quantos dólares deseja converter: "));

function App28(){

    return(
        <div className = "App1">
            <p> O valor de US$: {dolar.toFixed(2)} equivale a R$: {(dolar * cota).toFixed(2)}</p>
        </div>
    );

}

export default App28;   
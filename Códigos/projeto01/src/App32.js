import './App.css';

var numero = parseFloat(prompt("Digite um valor"));
               
function resposta(){
    if (numero > 10) {
        return(numero + " é maior que 10.");
    } else if (numero == 10) {
        return(numero + " é igual a 10.");
    } else {
        return(numero + " é menor que 10.");
    }
}

function App32(){

    return(
        <div className = "App1">
            <p>{resposta()}</p>
        </div>
    );

}

export default App32;   
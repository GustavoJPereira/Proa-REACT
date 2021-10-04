import './App.css';

var altura = parseFloat(prompt("Digite o valor da altura da lata: "));
var raio = (parseFloat(prompt("Digite a largura da lata: "))) / 2;
             
function resposta(){
    return raio ** 2 * altura * Math.PI;
}

function App21(){

    return(
        <div className = "App1">
            <p>O volume dessa lata de óleo é {resposta()}</p>
        </div>
    );

}

export default App21;   
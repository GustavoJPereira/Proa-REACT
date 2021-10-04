import './App.css';

var valor = parseInt(prompt("Digite o valor da prestação: "));
var tempo = parseInt(prompt("Digite o tempo de atraso em meses: "));
var taxa = parseInt(prompt("Digite a taxa de atraso: "));
    
function resposta(){
    return valor + valor * taxa / 100 * tempo;
}

function App23(){

    return(
        <div className = "App1">
            <p>O valor da prestação em atraso agora é de: R$ {resposta()}</p>
        </div>
    );

}

export default App23;   
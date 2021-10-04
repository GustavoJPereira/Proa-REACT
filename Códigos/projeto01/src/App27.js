import './App.css';

var altura = parseFloat(prompt("Digite a altura do paralelepipedo em metros: "));
var comprimento = parseFloat(prompt("Digite o comprimento do paralelepipedo em metros: "));
var profundidade = parseFloat(prompt("Digite a profundidade do paralelepipedo em metros: "));

function App26(){

    return(
        <div className = "App1">
            <p> O volume do paralelepipedo é {altura * comprimento * profundidade} m³</p>
        </div>
    );

}

export default App26;   
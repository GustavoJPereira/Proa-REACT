import './App.css';

var a = parseInt(prompt("Digite a largura do retângulo"));
var b = parseInt(prompt("Digite o comprimento do retângulo"));

function area(){
    return a*b / 2
}

function App08(){

    return(
        <div className = "App1">
            <p>A área do triângulo é: {area()}m² </p>
        </div>
    );

}

export default App08;
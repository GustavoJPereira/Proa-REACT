import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function mult(){
    return a*b
}

function App03(){

    return(
        <div className = "App">
            <p>A multiplicação dos dois valores digitados é: {mult()}</p>
        </div>
    );

}

export default App03;
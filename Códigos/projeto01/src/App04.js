import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function div(){
    return a/b
}

function App04(){

    return(
        <div className = "App01">
            <p>A divisão dos dois valores digitados é: {div()}</p>
        </div>
    );

}

export default App04;
import './App.css';

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function sub(){
    return a-b
}

function App02(){

    return(
        <div className = "App01">
            <p>A subtração dos dois valores digitados é: {sub()}</p>
        </div>
    );

}

export default App02;
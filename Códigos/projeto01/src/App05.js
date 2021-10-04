import './App.css';

var a = parseInt(prompt("Digite um valor"));

function antecessor(){
    return a--
}

function App05(){

    return(
        <div className = "App1">
            <p>O antecessor do número digitado é: {antecessor()}</p>
        </div>
    );

}

export default App05;
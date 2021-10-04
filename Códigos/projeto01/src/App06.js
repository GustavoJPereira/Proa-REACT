import './App.css';

var a = parseInt(prompt("Digite um valor"));

function sucessor(){
    return a++
}

function App06(){

    return(
        <div className = "App1">
            <p>O antecessor do número digitado é: {sucessor()}</p>
        </div>
    );

}

export default App06;
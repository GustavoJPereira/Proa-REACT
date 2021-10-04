import './App.css';

var a = parseInt(prompt("Digite a largura do quadrado"));

function area(){
    return a**2
}

function App10(){

    return(
        <div className = "App1">
            <p>A área do quadrado é: {area()}m² </p>
        </div>
    );

}

export default App10;
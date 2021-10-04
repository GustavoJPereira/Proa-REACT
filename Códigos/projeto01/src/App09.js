import './App.css';

var a = parseInt(prompt("Digite a largura do círculo"));

function area(){
    return (a/2)**2 * Math.PI
}

function App09(){

    return(
        <div className = "App1">
            <p>A área do círculo é: {area()}m² </p>
        </div>
    );

}

export default App09;
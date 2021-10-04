import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));
        
function App30(){

    return(
        <div className = "App1">
            <p>A²+ B² + C² =  {Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)}</p>
        </div>
    );

}

export default App30;
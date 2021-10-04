import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var  dif;

if (a > b) {
    dif = Math.pow((a - b), 2)
} else {
    dif = Math.pow((b - a), 2)
}

function App27(){

    return(
        <div className = "App1">
            <p> O quadrado da diferença entre A e B é  {dif}</p>
        </div>
    );

}

export default App27;   
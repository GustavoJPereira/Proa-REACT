import './App.css';

var a = parseInt(prompt("Digite o valor de A: "));
var b = parseInt(prompt("Digite o valor de B: "));
var c = parseInt(prompt("Digite o valor de C: "));
var d = parseInt(prompt("Digite o valor de D: "));

function App25(){

    return(
        <div className = "App1">
            <p> A + B = {a + b} A + C = {a + c} A + D = {a + d} B + C = {b + c} B + D = {b + d} C + D = {c + d}</p>
            <p> A x B = {a * b} A x C = {a * c} A x D = {a * d} B x C = {b * c} B x D = {b * d} C x D = {c * d}</p>
        </div>
    );

}

export default App25;   
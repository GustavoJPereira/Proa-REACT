import './App.css';

var v1 = prompt("Digite o valor da primeira variável: ");
var v2 = prompt("Digite o valor da segunda variável: ");
var v3 = v1;
v1 = v2;
v2 = v3
function App24(){

    return(
        <div className = "App1">
            <p>A variável A foi de {v2} para {v1} e a variável B foi de {v1} para {v2}.</p>
        </div>
    );

}

export default App24;   
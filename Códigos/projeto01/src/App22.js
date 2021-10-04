import './App.css';

var tempo = parseInt(prompt("Digite o tempo gasto na viagem em horas: "));
var velocidade = parseInt(prompt("Digite a velocidade média na viagem em km/h: "));
var distancia = tempo * velocidade
    
function App22(){

    return(
        <div className = "App1">
            <p>O gasto de combustível na viagem foi de: {distancia / 12} litros. Os números da viagem são:
            {tempo}  Horas gastas, {velocidade} kh/h de velocidade média, {distancia} kilometros de distância percorrida e {distancia / 12} litros de combustível gastos.</p>
        </div>
    );

}

export default App22;   
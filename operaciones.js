const consul = document.getElementById("consulta");
const depositar = document.getElementById("deposito");
const retirar = document.getElementById("retiro");
const i = parseInt(document.getElementById("uno").value)


var cuentas = [
    {nombre: "Alex", saldo: 700, user: "alex1", pass:"alex2", identify:"1"},
    {nombre : "Karen", saldo: 500, user: "karen3", pass: "karen4", identify:"2"},
    {nombre: "Luis", saldo: 200, user: "luis5", pass: "luis6", identify:"3"}
];

consul.addEventListener("click", verificar);
depositar.addEventListener("click", fdepositar);
retirar.addEventListener("click", fretirar);

function verificar(){
    let userSaldo = "$"+cuentas[i].saldo;
    document.getElementById("saldo").value= userSaldo;
    
}

function fdepositar(){
    const montoIntro = parseFloat(document.getElementById("monto").value);
    let userSaldo = cuentas[i].saldo;
    let newsaldo = userSaldo + montoIntro;
    cuentas[i].saldo = newsaldo; 
    let fnewsaldo = "$"+newsaldo
        if(newsaldo <= 990 && newsaldo >= 10){
            document.getElementById("currentSaldo").value = fnewsaldo;
            document.getElementById("saldo").value = fnewsaldo;
        }
        else if(newsaldo > 991){
            cuentas[i].saldo = userSaldo;
            alert("Tu cuenta no puede tener mas de $990")
        }
}

function fretirar(){
    const montoIntro = parseFloat(document.getElementById("montoRetirar").value);
    let userSaldo = cuentas[i].saldo;
    let newsaldo = userSaldo - montoIntro;
    cuentas[i].saldo = newsaldo; 
    let fnewsaldo = "$"+newsaldo
        if(newsaldo <= 990 && newsaldo >= 10){
            document.getElementById("currentSaldo2").value = fnewsaldo;
            document.getElementById("saldo").value = fnewsaldo;
        }
        else if(newsaldo < 10){
            cuentas[i].saldo = userSaldo;
            alert("Tu cuenta no puede tener menos de $10")
        } 
}


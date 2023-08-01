const logIn = document.getElementById("inicioSesion");


var cuentas = [
    {nombre: "Alex", saldo: 700, user: "alex1", pass:"alex2", identify:"1"},
    {nombre : "Karen", saldo: 500, user: "karen3", pass: "karen4", identify:"2"},
    {nombre: "Luis", saldo: 200, user: "luis5", pass: "luis6", identify:"3"}
]
var w = 0;
var access = 0;
 
logIn.addEventListener("submit", inicio);


function inicio (event){
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

            for(w = 0; w < cuentas.length; w++){
                if(cuentas[w].user === usuario && cuentas[w].pass === password){
                    access = 1; 
                    var currentUser = cuentas[w].user;   
                }
                
            }
            
            if(access === 1){
                if(currentUser === cuentas[0].user){
                    window.location.href = "paginaPrincipal.html"
                }
                else if(currentUser === cuentas[1].user){
                    window.location.href = "paginaPrincipal2.html"
                }
                else if(currentUser === cuentas[2].user){
                    window.location.href = "paginaPrincipal3.html"
                }
            }       
            else if(access === 0){
                
                alert("Contraseña o Usuario incorrecto"); 
            }
}






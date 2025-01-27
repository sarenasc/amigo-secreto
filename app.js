// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];

function agregarAmigo() {
    
    let IngresoAmigo = document.getElementById('amigo').value;
    if (document.querySelector("#amigo").value === ''){
        alert("Porfavor, Inserte un nombre.");
    }else{
    Amigos.push(IngresoAmigo);
    let AmigosLista =  document.querySelector(".name-list");
    AmigosLista.innerHTML = Amigos;
    console.log(Amigos);
    document.querySelector("#amigo").value='';
    
    }

    
}

function sortearAmigo(){
    if (Amigos == ''){
        alert ("No existe lista de Amigos")
    }else{
        let Cantidad = Amigos.length;
        let NumeroSecreto =Math.floor(Math.random()*Cantidad)+1;
        let ResultadoAmigo = Amigos[NumeroSecreto];
        let AmigoResultado = document.getElementById('resultado')
        AmigoResultado.innerHTML = ResultadoAmigo;

    }
}








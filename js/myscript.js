var array;
function cargarpagina(){
    array= [
        {nombre:"juan", codigo:"192114", doc:"1007945765", prog:"Ing de sistemas"},
        {nombre:"carlos",codigo:"192114", doc:"1007945765", prog:"Ing de sistemas"},
        {nombre:"melo", codigo:"192114", doc:"1007945765", prog:"Ing de sistemas"}
    ];
   
}
function calcular(){
    let nombre = $("#nombre").val();
    for(let i =0;i<array.length;i++){
        if(nombre==array[i].nombre){
            $("#nombre").html("el nombre encontrado es: "+nombre)
            console.log("el nombre encontrado es: "+nombre);
            break;
        }else{
            $("#nombre").html("el nombre "+nombre+" no fue encontrado")
            console.log("el nombre "+nombre+" no fue encontrado");
        }
       
    }
   
}
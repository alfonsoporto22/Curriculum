
function imprimeHola(){
    console.log("Hola");
};



function main() {
    console.log("Starting...");
    const titulo=document.querySelector("h1");
    /*pointerenter: cuando se pasa el ratón por encima*/ 
    titulo.addEventListener("pointerenter", imprimeHola);
    const elements=Array.from(document.body.querySelectorAll("*"));

    console.log(elements);

    
   for (let item of elements){
       console.log(item);
       item.addEventListener("pointerenter", ()=>{
           
        console.log("Nº de veces"+item)
    });
   }

}

/*load: Cuando la página esté cargada*/ 
window.addEventListener("load", main);



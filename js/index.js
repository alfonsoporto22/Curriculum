
function main() {
    console.log("Starting...");
    const titulo=document.querySelector("h1");
    titulo.addEventListener("pointerenter", imprimeHola);
}

window.addEventListener("load", main);


function imprimeHola(){
    console.log("Hola");
};
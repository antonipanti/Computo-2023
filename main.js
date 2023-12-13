let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let stop_btn = document.getElementById("stop-btn");
let contenedor = document.getElementById("contenedor");
let gatito = document.getElementById("gatito");

play_btn.addEventListener("click",()=>{
    cancion.play();
    contenedor.style.animationPlayState ="running";
    gatito.style.animationPlayState ="running";

})
pause_btn.addEventListener("click", ()=>{
    cancion.pause();
    contenedor.style.animationPlayState ="paused";
    gatito.style.animationPlayState ="paused";

   
})
stop_btn.addEventListener("click", ()=>{
    cancion.pause();
    cancion.currentTime =0;
    contenedor.style.animationPlayState ="paused";
    gatito.style.animationPlayState ="paused";
})

function entrar() {
    const fecha = document.getElementById("fecha").value.trim();

    if (fecha === "19/09/2024") {
        document.body.style.opacity = "0";

        setTimeout(() => {
            window.location.href = "galeria.html";
        }, 1000);

    } else {

        document.getElementById("mensaje").innerHTML =
        "💔 La fecha no es correcta.";
    }
}

// Pétalos
const particles = document.getElementById("particles");

for(let i=0;i<35;i++){

    let flor=document.createElement("div");

    flor.innerHTML="🌸";

    flor.className="flower";

    flor.style.left=Math.random()*100+"vw";

    flor.style.top="-100px";

    flor.style.fontSize=(18+Math.random()*20)+"px";

    flor.style.animationDuration=(6+Math.random()*8)+"s";

    flor.style.animationDelay=Math.random()*8+"s";

    particles.appendChild(flor);

}
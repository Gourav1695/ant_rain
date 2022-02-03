function createAnt() {
    const ant = document.createElement("div");
    ant.classList.add("ant");

    ant.style.left = Math.random() * 100 + "vw";
    ant.style.animationDuration = Math.random() * 2 + 3 + "s";

    ant.innerText ="🐜" ;

    document.body.appendChild(ant);

    setTimeout(() => {
        ant.remove();
    }, 5000);
}

setInterval(createAnt, 300);
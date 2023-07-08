const nosotros = document.querySelector("#nosotros");
const servicios = document.querySelector("#servicios");

/*Menu Portafolio*/
portafolio.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".nosotros");
    sectionP.scrollIntoView({behavior: "smooth"});
});

/*Menu Servicios*/
services.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionS = document.querySelector(".servicios");
    sectionS.scrollIntoView({behavior: "smooth"});
});
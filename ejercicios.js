
let $body = document.getElementById("body")
let $circle = document.querySelectorAll(".circle");





$circle.forEach(
    function (e) {
        e.addEventListener("click", function (e) {
            let clickeado = e.target;

            if (clickeado.classList.contains("circulo1")) {
                $body.classList.add("circulo1");
                $body.classList.remove("circulo2", ("circulo3"));
            } else if (clickeado.classList.contains("circulo2")) {
                $body.classList.add("circulo2");
                $body.classList.remove("circulo1", ("circulo3"))
            } else {
                $body.classList.add("circulo3")
                $body.classList.remove("circulo1", ("circulo2"))
            }

        })

    }
)





const $textarea = document.querySelector("textarea");
const $contador = document.querySelector(".contador");

$textarea.addEventListener("input", ({ currentTarget: target }) => {
    const caracteres = target.value.length;

});

var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    },
    {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, 
    {
        nombre: 'Roxana García',
        nota: 8
    }, 
    {
        nombre: 'Luciano Lopez',
        nota: 5
    }, 
    {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, 
    {
        nombre: 'Florencia Martinez',
        nota: 10
    },
     {
        nombre: 'Raul Sanchez',
        nota: 7
    }, 
    {
        nombre: 'Sandra Figueroa',
        nota: 8
    }

];

let contAprobados = document.querySelector(".cont-aprobados");


let aprobados = alumnos.filter(alumno => alumno.nota >= 7 );
for(i = 0; i < aprobados.length; i++){
    
    const p = document.createElement("p");
    p.textContent = ( `${aprobados[i].nombre} nota ${aprobados[i].nota}`);
    contAprobados.appendChild(p)
}

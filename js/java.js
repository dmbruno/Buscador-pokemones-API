

/* const urlBase = 'https://jsonplaceholder.typicode.com/users'
const listaUsuarios = document.querySelector('#usuarios')



fetch(urlBase)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach( user => {
        let article = document.createElement('article')
        article.innerHTML=
        `
                <h2>${user.name}</h2>
                <p>${user.phone}</p>
                <a href=${user.website}>WebSite</a>
        `
        listaUsuarios.append(article);



        company = document.createElement('h3')
        company.innerHTML=` trabajando para ${user.company.name}`

        usuarioInfo = document.createElement('p')
        usuarioInfo.innerHTML=`el correo del sr ${user.name} es ${user.email}`
        article.appendChild(usuarioInfo)
        article.appendChild(company)
    })
});

 */

/* const urlStars ='https://swapi.dev/api/people';
const personajes = document.querySelector('#wars')


fetch(urlStars)
.then(data =>{
    if (!data.ok) {
        throw new error('error throw')
    }
    return data.json();
})

.then(data=> {
    mostrarDatos(data.results);
});


function mostrarDatos(data) {
    data.forEach(data => {
        let article = document.createElement('article')
        article.classList.add('contenedor')
        article.innerHTML=`
            <h2>Nombre: ${data.name}</h2>
            <hr>
            <p>Cumple: ${data.birth_year}</p>
            <p>Genero: ${data.gender}</p>
        `
        personajes.append(article)
    })

}
 */

const btnBuscar = document.querySelector('#buscar2')
btnBuscar.addEventListener('click', () => {
    const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
    const pokeList = document.querySelector('#poke');

    fetch(pokeApi)
        .then(Response => {
            if (!Response.ok) {
                throw new error('error')
            }
            return Response.json();
        })
        .then(data => {
            console.log(data.results);
            mostrarPokemones(data.results);
        });


    function mostrarPokemones(pokemones) {
        pokemones.forEach(p => {

            fetch(p.url)
                .then(response => {
                    if (!response.ok) {
                        throw new error('error')
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    let article = document.createElement('article')
                    article.classList.add('card')

                    article.innerHTML =
                        `
                    <h2>Nombre: ${data.name}</h2>
                    <h3>Especie: ${data.species.name}</h3>
                    <img src=${data.sprites.front_default} alt=""></img>
                    <p class="info">Peso: ${data.weight} Gr. calculo...</p>
                    <p class="info">Experiencia: ${data.base_experience}</p>
                    <p class="info">Game indices: ${data.game_indices[0].game_index}</p>
                    <p class="info">Tipo: ${data.types[0].type.name}</p>
                `;
                    pokeList.append(article)
                })
        });
    }
})




const btnBuscar1 = document.querySelector('#buscar')
const nameImput = document.querySelector('#nombre')
const resultado = document.querySelector('#resultados')


function buscarPoke() {
    const nombre = nameImput.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(response => {
            if (!response.ok) {
                throw new error('error')
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                console.log(data);
                resultado.innerHTML =
                    `
                    <h2>Nombre: ${data.name}</h2>
                    <h3>Especie: ${data.species.name}</h3>
                    <img src=${data.sprites.front_default} alt=""></img>
                    <p class="info">Peso: ${data.weight} Gr. calculo...</p>
                    <p class="info">Experiencia: ${data.base_experience}</p>
                    <p class="info">Game indices: ${data.game_indices[0].game_index}</p>
                    <p class="info">Tipo: ${data.types[0].type.name}</p>
            `
            } else {
                resultado.innerHTML = `<h2>${error}</h2>
            <p>no se encontro el poke</p>
            `
            }
        })
        .catch(error => console.log(error));
}

btnBuscar1.addEventListener('click', buscarPoke);

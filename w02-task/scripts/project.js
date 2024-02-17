/* Project: Superhero Classification */

/* Declare and initialize global variables */
const superheroesContainer = document.getElementById('superheroes');
let superheroList = [];

/* async displaySuperheroes Function */
const displaySuperheroes = (superheroes) => {
  superheroes.forEach((superhero) => {
    // Crear un HTML <div> elemento (createElement).
    const superheroCard = document.createElement('div');
    superheroCard.classList.add('superhero-card');

    // Crear un HTML <h3> elemento y agregar la propiedad 'name' del superhéroe a este nuevo elemento.
    const h3Superhero = document.createElement('h3');
    h3Superhero.textContent = superhero.name;

    // Crear un HTML <img> elemento y agregar la propiedad 'url' del superhéroe a la src atributo
    // y la propiedad 'name' del superhéroe a la alt atributo.
    const imgSuperhero = document.createElement('img');
    
    // Verificar que la propiedad 'image' esté definida y que 'url' sea una propiedad válida antes de acceder a ella
    if (superhero.image && superhero.image.url) {
      imgSuperhero.src = superhero.image.url;
      imgSuperhero.alt = superhero.name;
    } else {
      // Manejar el caso donde 'image' o 'url' pueden ser undefined o no válidos
      console.error(`No se puede acceder a la propiedad 'url' de la imagen para ${superhero.name}`);
    }

    // Añadir el <h3> elemento y el <img> elemento al <div> elemento como hijos.
    superheroCard.appendChild(h3Superhero);
    superheroCard.appendChild(imgSuperhero);

    // Añadir el <div> elemento a la variable global superheroesContainer.
    superheroesContainer.appendChild(superheroCard);
  });
};

/* async getSuperheroes Function using fetch() */
const getSuperheroes = async () => {
  try {
    const response = await fetch( 'https://arimanley.github.io/cse121b/w02-task/scripts/data.json');
    if (response.ok) {
      // Convert the response to JSON
      const data = await response.json();

      // Check if "data.results" is an array
      if (Array.isArray(data.results)) {
        superheroList = data.results;
        displaySuperheroes(superheroList);
      } else {
        console.error('The "results" property in the response is not an array.');
      }
    } else {
      console.error('Error in fetch request:', response.statusText);
    }
  } catch (error) {
    console.error('Error in fetch request:', error);
  }
};

/* reset Function */
const reset = () => {
  superheroesContainer.innerHTML = '';
};

/* filterSuperheroes Function */
const filterSuperheroes = (superheroes) => {
  reset();

  const filter = document.getElementById('filtered').value;

  switch (filter) {
  
      case 'Android':
        displaySuperheroes(superheroes.filter(superhero => superhero.appearance && superhero.appearance.race === 'Android'));
        break;

        case 'Cosmic Entity':
        displaySuperheroes(superheroes.filter(superhero => superhero.appearance && superhero.appearance.race === 'Cosmic Entity'));
        break;

        case 'null':
        displaySuperheroes(superheroes.filter(superhero => superhero.appearance && superhero.appearance.race === 'null'));
        break;

    case 'all':
      displaySuperheroes(superheroes);
      break;
  }
};

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
  filterSuperheroes(superheroList);
});

getSuperheroes();
console.log(superheroList);
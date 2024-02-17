/* Project: Superhero Classification */

/* Declare and initialize global variables */
const superheroesContainer = document.getElementById('superheroes');
let superheroList = [];

/* async displaySuperheroes Function */
const displaySuperheroes = (superheroes) => {
  superheroes.forEach((superhero) => {
    // Create an HTML <div> element (createElement).
    const superheroCard = document.createElement('div');
    superheroCard.classList.add('superhero-card');

    // Create an HTML <h3> element and add the superhero's name property to this new element.
    const h3Superhero = document.createElement('h3');
    h3Superhero.textContent = superhero.name;

    // Create an HTML <img> element and add the superhero's image url property to the src attribute
    // and the superhero's name property to the alt attribute.
    const imgSuperhero = document.createElement('img');
    imgSuperhero.src = superhero.image.url;
    imgSuperhero.alt = superhero.name;

    // Append the <h3> element and the <img> element to the <div> element as children.
    superheroCard.appendChild(h3Superhero);
    superheroCard.appendChild(imgSuperhero);

    // Append the <div> element to the global superheroesContainer variable.
    superheroesContainer.appendChild(superheroCard);
  });
};

/* async getSuperheroes Function using fetch() */
const getSuperheroes = async () => {
  try {
    const response = await fetch('https://arimanley.github.io/cse121b/w02-task/scripts/data.json');
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
    case 'Cosmic Entity':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'Cosmic Entity'));
      break;

    case 'Android':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'Android'));
      break;

    case 'null':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'null'));
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
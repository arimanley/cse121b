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
  const response = await fetch('data.json');
  if (response.ok) {
    // The API will send us JSON...but we have to convert the response before we can use it.
    // .json() also returns a promise, so we await it as well.
    superheroList = await response.json();
    displaySuperheroes(superheroList);
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
    case 'Human':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'Human'));
      break;

    case 'Alien':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'Alien'));
      break;

    case 'Null':
      displaySuperheroes(superheroes.filter(superhero => superhero.appearance.race === 'Null'));
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
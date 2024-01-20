/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables DECLARE*/ 
let fullName= 'Ariana Manley';
let currentYear='2024';
let profilePicture='images/me.jpg';


/* Step 3 - Element Variables  GET*/
const nameElement=document.getElementById('name');
const foodElement=document.getElementById('food');
const yearElement=document.querySelector('#year');
const imageElement = document.getElementById('img')


/* Step 4 - Adding Content  ASSIGN*/
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.textContent = currentYear;
imageElement.setAttribute('src',`${profilePicture}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFood = ["fried chicken","fried potatoes","smoothies"];
foodElement.innerHTML += `<br>${favoriteFood}`;

let newFavoriteFood = "pizza";
favoriteFood.push(newFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift(); 
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop(); 
foodElement.innerHTML += `<br>${favoriteFood}`;







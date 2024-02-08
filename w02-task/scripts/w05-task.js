/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement=document.querySelector("#temples");

let templeList =[];


/* async displayTemples Function */
const displayTemples= (temples) =>{ 
    temples.forEach((temple) => {

//Create an HTML <article> element (createElement).
const articleTemple = document.createElement("article");
//Create an HTML <h3> element and add the temple's templeName property to this new element.
const h3Temple= document.createElement("h3");
//Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
const imgTemple = document.createElement("img");
imgTemple.src = temple.imageUrl; 
imgTemple.alt = temple.location
//Append the <h3> element and the <img> element to the <article> element as children. (appendChild)
articleTemple.appendChild(h3Temple);
articleTemple.appendChild(imgTemple);
//Append the <article> element to the global templesElement variable declared in Step 2.
templesElement.appendChild(articleTemple);

        console.log(temple);
})};


/* async getTemples Function using fetch()*/
const getTemples= async () => {
    const response= await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
       templeList = await response.json();
       displayTemples(templeList);
}}



/* reset Function */
const reset= () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
 reset();

 const filter = document.querySelector("#filtered").value;


 switch (filter) {
    case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("Utah")))    
    break;

    case "notutah":
  displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
    break;
 
    case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
    break;

    case "all":
        displayTemples(temples);
    break;


 }

};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();
console.log(templeList);
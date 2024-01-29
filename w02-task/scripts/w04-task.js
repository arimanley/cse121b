/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile={
    name:"Ariana Manley",
    photo:"images/me.jpg",
    favoriteFoods:["Fried potatoes","Pizza","Popcorn"],
    hobbies:["Walk","Watch series","Listen podcasts"],
    placesLived:[],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:"Brazil, Ribeirao Preto",
        length:"6 months"
    },
    {
        place:"Honduras, San Pedro Sula",
        length:"All my life"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent=myProfile.name;
/* Photo with attributes */
let imgElement=document.querySelector("#photo");
imgElement.src = myProfile.photo;
imgElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li=document.createElement('li');
    li.textContent=food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li=document.createElement('li');
    li.textContent=hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let dlElement = document.querySelector('#places-lived');
    myProfile.placesLived.forEach(placeInfo => {
        let dtElement = document.createElement('dt');
        dtElement.textContent = placeInfo.place;


        let ddElement = document.createElement('dd');
        ddElement.textContent = placeInfo.length; 

        dlElement.appendChild(dtElement);
        dlElement.appendChild(ddElement);
    });
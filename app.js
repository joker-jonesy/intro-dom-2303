//grab catch all
// document.querySelector(".profile").style.backgroundColor="red";


//grab all classes
const profiles =document.getElementsByClassName("profile");

for(let i=0; i<profiles.length; i++){
    profiles.item(i).style.backgroundColor="red"
//    grab p tags only in profiles
    profiles.item(i).getElementsByTagName("p").item(0).innerHTML="newtext"
}

const paras=document.getElementsByTagName("p");
console.log(paras);

//every p tag in document
// for(let ii=0; ii<paras.length; ii++){
//     paras[ii].innerHTML="new stuff"
// }

console.log(document.querySelector(".profile").getElementsByTagName("p"));
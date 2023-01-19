/*
    Made by: Justin Lama Perez
    Date: 12-12-2022
    Last change: 18-01-2023
*/

// Asserts that the language data is json.
import langData from './data/lang.json' assert {type: 'json'};

var dutch = false;

const el = document.querySelector("body");

//Fetch user ip info with the use of jQuery
$.get("http://ipinfo.io/?token=c5c3ed73a5eba7", function (response) {
    // Checks if the response is NL.
    if(response.country === 'NL'){
        countryNL();
    }else{
        countryEN();
    }
}, "jsonp");

// Displays the country selector
document.getElementById("languageselector").onclick = function(){
    vibrate();
    if(dutch === true){
        // Displays the country country.
        document.getElementById("dutch").style.display = 'none';
        document.getElementById("english").style.display = 'block';
        countryEN();
        // Sets dutch to false.
        dutch = false;
    }else{
        document.getElementById("english").style.display = 'none';
        document.getElementById("dutch").style.display = 'block';
        countryNL();
        // Sets dutch to true.
        dutch = true;
    }
}

// Displays the country NL
function countryNL()
{
    document.getElementById("english").style.display = 'none';
    document.getElementById("dutch").style.display = 'block';
    dutch = true;
    //Change navbar language
    document.getElementById("hobby").innerText = langData.nl.navhobby
    document.getElementById("experience").innerText = langData.nl.navexperiences
    document.getElementById("results").innerText = langData.nl.navresults

    pageSelector("NL")
}

// country - en
function countryEN()
{
    document.getElementById("dutch").style.display = 'none';
    document.getElementById("english").style.display = 'block';
    //Change navbar language
    document.getElementById("hobby").innerText = langData.en.navhobby;
    document.getElementById("experience").innerText = langData.en.navexperiences;
    document.getElementById("results").innerText = langData.en.navresults;

    pageSelector("EN");
}

// Returns the page selector for a given country.
function pageSelector(country){
    if(el.dataset.pageName === 'home'){
        return homePage(country);
    }
    if(el.dataset.pageName === 'hobby'){
        return hobbyPage(country);
    }
    if(el.dataset.pageName === 'experiences'){
        return experiencesPage(country);
    }
    if(el.dataset.pageName === 'portfolio'){
        return portfolioPage(country);
    }
    if(el.dataset.pageName === 'results'){
        return resultsPage(country);
    }
}

// Get the textboxttext from the home page
function homePage(country){
    // Returns the textbox title and textboxttext
    if(country === "EN"){
        document.getElementById("textboxtitle").innerText = langData.en.home.thisisme;
        document.getElementById("textboxttext").innerText = langData.en.home.thisismetext;
        return;
    }
    document.getElementById("textboxtitle").innerText = langData.nl.home.thisisme;
    document.getElementById("textboxttext").innerText = langData.nl.home.thisismetext;
}
// Returns the text of the page.
function hobbyPage(country){
    // Returns the text of the current country.
    if(country === "EN"){
        document.getElementById("title").innerText = langData.en.hobby.title
        document.getElementById("covertextp1").innerText = langData.en.hobby.covertextp1
        document.getElementById("covertextp2").innerText = langData.en.hobby.covertextp2
        document.getElementById("gaming").innerText = langData.en.hobby.gaming
        document.getElementById("gamingtext").innerText = langData.en.hobby.gamingtext
        document.getElementById("woodworking").innerText = langData.en.hobby.woodworking
        document.getElementById("woodworkingtext").innerText = langData.en.hobby.woodworkingtext
        document.getElementById("aquaminitext").innerText = langData.en.hobby.aquaminitext
        return;
    }
    document.getElementById("title").innerText = langData.nl.hobby.title
    document.getElementById("covertextp1").innerText = langData.nl.hobby.covertextp1
    document.getElementById("covertextp2").innerText = langData.nl.hobby.covertextp2
    document.getElementById("gaming").innerText = langData.nl.hobby.gaming
    document.getElementById("gamingtext").innerText = langData.nl.hobby.gamingtext
    document.getElementById("woodworking").innerText = langData.nl.hobby.woodworking
    document.getElementById("woodworkingtext").innerText = langData.nl.hobby.woodworkingtext
    document.getElementById("aquaminitext").innerText = langData.nl.hobby.aquaminitext
}
// Get experiences page for a country.
function experiencesPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        document.getElementById("deregenboog").innerText = langData.en.experiences.deregenboog
        document.getElementById("merletcollege").innerText = langData.en.experiences.merletcollege
        document.getElementById("action").innerText = langData.en.experiences.action
        document.getElementById("de7dwergen").innerText = langData.en.experiences.de7dwergen
        document.getElementById("kw1c").innerText = langData.en.experiences.kw1c
        return;
    }
    document.getElementById("deregenboog").innerText = langData.nl.experiences.deregenboog
    document.getElementById("merletcollege").innerText = langData.nl.experiences.merletcollege
    document.getElementById("action").innerText = langData.nl.experiences.action
    document.getElementById("de7dwergen").innerText = langData.nl.experiences.de7dwergen
    document.getElementById("kw1c").innerText = langData.nl.experiences.kw1c
}
// Returns portfolio page for a given country
function portfolioPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        
        return;
    }
}
// Returns the results page for the given country.
function resultsPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        
        return;
    }
}
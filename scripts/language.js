/*
    Made by: Justin Lama Perez
    Date: 12-12-2022
    Last change: 22-01-2023
*/

var dutch = false;

const el = document.querySelector("body");

//Fetch user ip info with the use of jQuery
try{
    $.get("http://ipinfo.io/?token=c5c3ed73a5eba7", function (response) {
        // Checks if the response is NL.
        if(response.country === 'NL'){
            countryNL();
        }else{
            countryEN();;
        }
    }, "jsonp");    
}catch(err){
    countryNL();
}

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
    return;
}
// Returns the text of the page.
function hobbyPage(country){
    // Returns the text of the current country.
    if(country === "EN"){
        document.getElementById("title").innerText = langData.en.hobby.title;
        document.getElementById("covertextp1").innerText = langData.en.hobby.covertextp1;
        document.getElementById("covertextp2").innerText = langData.en.hobby.covertextp2;
        document.getElementById("gaming").innerText = langData.en.hobby.gaming;
        document.getElementById("gamingtext").innerText = langData.en.hobby.gamingtext;
        document.getElementById("woodworking").innerText = langData.en.hobby.woodworking;
        document.getElementById("woodworkingtext").innerText = langData.en.hobby.woodworkingtext;
        document.getElementById("aquaminitext").innerText = langData.en.hobby.aquaminitext;
        return;
    }
    document.getElementById("title").innerText = langData.nl.hobby.title;
    document.getElementById("covertextp1").innerText = langData.nl.hobby.covertextp1;
    document.getElementById("covertextp2").innerText = langData.nl.hobby.covertextp2;
    document.getElementById("gaming").innerText = langData.nl.hobby.gaming;
    document.getElementById("gamingtext").innerText = langData.nl.hobby.gamingtext;
    document.getElementById("woodworking").innerText = langData.nl.hobby.woodworking;
    document.getElementById("woodworkingtext").innerText = langData.nl.hobby.woodworkingtext;
    document.getElementById("aquaminitext").innerText = langData.nl.hobby.aquaminitext;
    return;
}
// Get experiences page for a country.
function experiencesPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        document.getElementById("deregenboog").innerText = langData.en.experiences.deregenboog;
        document.getElementById("merletcollege").innerText = langData.en.experiences.merletcollege;
        document.getElementById("action").innerText = langData.en.experiences.action;
        document.getElementById("de7dwergen").innerText = langData.en.experiences.de7dwergen;
        document.getElementById("kw1c").innerText = langData.en.experiences.kw1c;
        return;
    }
    document.getElementById("deregenboog").innerText = langData.nl.experiences.deregenboog;
    document.getElementById("merletcollege").innerText = langData.nl.experiences.merletcollege;
    document.getElementById("action").innerText = langData.nl.experiences.action;
    document.getElementById("de7dwergen").innerText = langData.nl.experiences.de7dwergen;
    document.getElementById("kw1c").innerText = langData.nl.experiences.kw1c;
    return;
}
// Returns portfolio page for a given country
function portfolioPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        document.getElementById("de7dwergentext").innerText = langData.en.portfolio.de7dwergentext
        document.getElementById("portfoliotext").innerText = langData.en.portfolio.portfoliotext
        document.getElementById("assign4.3").innerText = langData.en.portfolio.assign43
        document.getElementById("assign4.3text").innerText = langData.en.portfolio.assign43text
        document.getElementById("assign1.3").innerText = langData.en.portfolio.assign13
        document.getElementById("assign1.3text").innerText = langData.en.portfolio.assign13text
        return;
    }
    document.getElementById("de7dwergentext").innerText = langData.nl.portfolio.de7dwergentext
    document.getElementById("portfoliotext").innerText = langData.nl.portfolio.portfoliotext
    document.getElementById("assign4.3").innerText = langData.nl.portfolio.assign43
    document.getElementById("assign4.3text").innerText = langData.nl.portfolio.assign43text
    document.getElementById("assign1.3").innerText = langData.nl.portfolio.assign13
    document.getElementById("assign1.3text").innerText = langData.nl.portfolio.assign13text
    return;
}
// Returns the results page for the given country.
function resultsPage(country){
    // Returns the country if the country is EN.
    if(country === "EN"){
        document.getElementById("result").innerText = langData.en.results.results;
        return;
    }
    document.getElementById("result").innerText = langData.nl.results.results;
    return;
}


const langData = {
    "_comment":{
        "Made_by":"Justin Lama Perez",
        "Date":"12-12-2022",
        "Changed_on":"05-01-2023"
    },
    "nl":{
        "navhobby":"// hobby's",
        "navexperiences":"// ervaringen",
        "navresults":"// resultaten",
        "home":{
            "thisisme":"DIT BEN IK",
            "thisismetext":"Hoi! Ik ben Justin, een programmeur in opleiding die in 2006 is geboren. Leuk dat je hier komt rondkijken! Op deze site wil ik laten zien wat ik heb gemaakt en wat ik toe nu toe kan. Ik hoop deze website uit te breiden in de toekomst om projecten te laten zien in nog leukere manieren!"
        },
        "hobby":{
            "title":"Dit zijn een paar van mijn hobby's",
            "covertextp1":"Net zoals iedereen heb ik ook een paar hobby's! Op deze pagina zal ik je over ze vertellen en wat ik zo leuk vind aan de hobby.",
            "covertextp2":"Het beste aan hobby's is dat er altijd mensen zijn met de zelfde hobby en om dan gemeenschap samen zien te komen over één onderwerp is geweldig!",
            "gaming":"GAMEN",
            "gamingtext":"Net zoals veel andere mensen rond mijn leventijd is gamen iets dat ik met veel plezier doe. Ik vind shooters, wereld bouwen en race games het leukste.",
            "woodworking":"HOUT BEWERKING",
            "woodworkingtext":"Dit is iets dat ik over de jaren heb opgepakt en leuk vind om te doen. Ik vind het ook relaxend om te zien hoe iets bij elkaar komt tijdens het maak proces.",
            "aquaminitext":"Aquamini is een passie project dat ik al lang aan werk met mijn beste vriend. Het is een fonteinenshow dat water, licht, geluid en vuur gebruikt om een prachtig beeld te creëren."
        },
        "experiences":
        {
            "deregenboog":"Basisschool De Regenboog is de basisschool waar ik 8 jaar op het gezetten. Dit was nog voornamelijk leuk maar het had zijn mindere momenten. Ik ben hier geslaagd met een MAVO/HAVO advies om mee naar de middelbare school te gaan.",
            "merletcollege":"Middelbare school Merletcollege heb ik 4 jaar op gezetten en was ik gestart op het MAVO/HAVO traject. Ik ben in de 3de afgezakt naar kader en heb hier de laaste 2 jaar op gezeten. Geslaagd met een kader diploma.",
            "action":"Dit was mijn eerste bijbaantje. Persoonlijk vond ik het vakkenvullen helemaal niks. Maar ik had wel hier geleerd dat ik hard moet werken. Naar 4 maanden in dienst te zijn had ik onslag genomen omdat ik niet blij op werk was.",
            "de7dwergen":"Bij De 7 dwergen was ik begonnen te werken naar een paar maanden niet gewerkt te hebben. Ik was hier begonnen in de afwas en naar een maand of 2 ben ik door gestroomd naar de keuken als keukenhulp. Ik werk tot het heden nog steeds.",
            "kw1c":"Dit is de school waar ik momenteel de opleiding Software Developer. Zo ver is de school redelijk fijn en heb ik een gezellig klas. Ik zit in jaar 1. Het is een niveau 4 MBO opleiding."
        },
        "results":{
            "results":"resultaten"
        },
        "portfolio":{
            "de7dwergentext":"Dit is het eerste project waar we aan hebben mogen werken. In dit project werkte we met 4 mensen aan 1 website. Ik had de voor pagina gedaan, het login systeem en het contact form. Hierbij heb ik Node.js en mongoDB gebruikt om gegevens op te slaan en om emails te versturen vanuit de website.",
            "portfoliotext":"Dit is de website waar je momenteel op zit. Dit was ook gemaakt voor een school project. Hier heb alleen ik aan gewerkt. Zelf een stijl bedenken was best moeilijk maar ik ben behoorlijk tevreden met het resultaat. Het was ook een nieuwe ervaring met een website hosten.",
            "assign43":"Opdracht 4.3",
            "assign43text":"Hier kregen we de opdracht om een website te maken waar we integratie van dingen zoals dark mode moesten doen. Dit was een redelijk simpele opdracht maar het was als nog leuk om te doen.",
            "assign13":"Opdracht 1.3",
            "assign13text":"Deze opdracht ging vooral over het maken van een layout van een website. Dit is werk dat ik meestal wat minder vind omdat het vooral veel proberen is. Maar een een kleinen 2 uurtje had ik de website in elkaar. Ook moesten we de gebruiken naar hun naam vragen en dat in de website verwerken."
        }
    },
    "en":{
        "navhobby":"// hobbies",
        "navexperiences":"// experiences",
        "navresults":"// results",
        "home":{
            "thisisme":"THIS IS ME",
            "thisismetext":"Hey! I am Justin, a studying programmer that was born in 2006. It's fun that you came to look around on this website! On this website I want to show what I've created and what I can achieve. I hope to expand this website in the future to show even more project in even more fun ways!"
        },
        "hobby":{
            "title":"These are a few of my hobbies",
            "covertextp1":"Just like everyone I have some hobbies too! On this page I'll tell you about them and what I enjoy about them.",
            "covertextp2":"The best thing about hobbies is that theres always people with the same hobby and seeing the community come together about one topic is great!",
            "gaming":"GAMING",
            "gamingtext":"Just like a lot of people around my age, gaming is something I enjoy greatly. I mostly like to play first person shooters, world building and race games.",
            "woodworking":"WOOD WORKING",
            "woodworkingtext":"This is something I picked up over some time and do enjoy doing. I find it to be relaxing to make something and slowly see it become the finished product.",
            "aquaminitext":"AquaMini is a passion project that I've been working on for a long time with my bestfriend. It's a fountainshow that uses water, light, fire and sound to create a beautiful sight."
        },
        "experiences":
        {
            "deregenboog":"Primary school De Regenboog is the primary school that I went to for 8 years. This was mainly fun but there were less fun moments. I graduated with a MAVO/HAVO advice to go to high school with.",
            "merletcollege":"I've been to Highschool Merletcollege for 4 years and I started the first 2 with MAVO/HAVO. In my 3th year I had to go to kader because of my academic performance. After 2 years of kader I graduated with a kader diploma.",
            "action":"This was my first parttime job. Personally I didn't like stocking shelves at all. But I did learn there that you have to work hard. After 4 months of working there I quited because I didn't doing my job anymore.",
            "de7dwergen":"I started working at De 7 Dwergen after not having worked for a few months. I started as a dishwasher but after 2 months I went slowly transitioned to the kitchen where I now help. To this day I still work there.",
            "kw1c":"This is my current school where I follow the study Software Developer. So far this school has been enjoyable and I have fun classmates to be around. I am currently in year 1. This is a niveau 4 MBO study."
        },
        "results":{
            "results":"results"
        },
        "portfolio":{
            "de7dwergentext":"This was the first project that we worked on. In this project we worked with 4 people on 1 website. I did the homepage, login system and made the contact page work. For this I used Node.js and mongoDB to store data and to send emails from the contact page to the user.",
            "portfoliotext":"This is the website you are currently on. This is also a school project. I worked on this website myself. Making my own style was quite difficult but I am pretty happy with how it turned out. It was also a new experience with hosting a website.",
            "assign43":"Assignment 4.3",
            "assign43text":"Here we had the assignment to create a website that has dark mode. It was a pretty simple assignment but it was pretty fun to do.",
            "assign13":"Assignment 1.3",
            "assign13text":"This assignment was mainly just to practise making the layout of a website. This type of work I find kind of boring because it's a lot of trying. But after 2 short hours I had the finished website. We also had to use the users name and show a hello message with the name."
        }
    }
}
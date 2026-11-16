const mainScreen =document.querySelector(".main-screen");
const journalView = document.querySelector("#journal-view");

let focusedJournal = document.querySelector(".journalCover-clicked");

//JOURNAL ONE ----------------------------------------------------------------------------------------------------------------------
const journalOne = document.querySelector(".journal-cover_1");
journalOne.addEventListener("click", function(){
    mainScreen.classList.add("hidden"); // adds the hidden class to mainScreen to hide main screen upon click
    journalView.classList.remove("hidden"); //removes the hidden class from journalView 
    startFlipbook(); //calls the startFlipbook function to initialize the flipbook
    focusedJournal.classList.remove("cover-two", "cover-three");
    focusedJournal.classList.add("cover-one");

    const asiaCryptids = cryptids.filter(cryptid => cryptid.continent === "Asia"); //filters crytpids to only be ones in Asia
    console.log(asiaCryptids);

    let pagesHTML = "";
    asiaCryptids.forEach(cryptid => {
        console.log(cryptid.name);
        pagesHTML += `<div class="journal-page pages"><h2>${cryptid.name}</h2> <p>${cryptid.description}</p><img src = "${cryptid.image}" alt="${cryptid.name}"></div>`;
        console.log(pagesHTML);
    })
    const pageHolder = document.createElement("div");
    pageHolder.innerHTML = pagesHTML; //creates a temporary div and then sets its innerHTML to the pagesHTML string
    const newPages = pageHolder.querySelectorAll(".pages");
    const updatedPages = [focusedJournal, ...newPages]
    pageFlip.updateFromHtml(updatedPages); //calls the pageFlip function with the updated pages array
})
//----------------------------------------------------------------------------------------------------------------------
//JOURNAL TWO ----------------------------------------------------------------------------------------------------------------------
const journalTwo = document.querySelector(".journal-cover_2");
journalTwo.addEventListener("click", function(){
    mainScreen.classList.add("hidden");
    journalView.classList.remove("hidden");
    startFlipbook();
    focusedJournal.classList.remove("cover-one" ,"cover-three"); //removes all other cover classes so that the correct one is the only one displayed
    focusedJournal.classList.add("cover-two");

    const africaCryptids = cryptids.filter(cryptid => cryptid.continent === "Africa"); //filters crytpids to only be ones in Africa
    console.log(africaCryptids);

    let pagesHTML = "";
    africaCryptids.forEach(cryptid => {
        console.log(cryptid.name);
        pagesHTML += `<div class="journal-page pages"><h2>${cryptid.name}</h2> <p>${cryptid.description}</p></div>`;
        console.log(pagesHTML);
    })
    const pageHolder = document.createElement("div");
    pageHolder.innerHTML = pagesHTML; //creates a temporary div and then sets its innerHTML to the pagesHTML string
    const newPages = pageHolder.querySelectorAll(".pages");
    const updatedPages = [focusedJournal, ...newPages]
    pageFlip.updateFromHtml(updatedPages); //calls the pageFlip function with the updated pages array
})

//----------------------------------------------------------------------------------------------------------------------
//JOURNAL THREE ----------------------------------------------------------------------------------------------------------------------
const journalThree = document.querySelector(".journal-cover_3");
journalThree.addEventListener("click", function(){
    mainScreen.classList.add("hidden");
    journalView.classList.remove("hidden");
    startFlipbook();
    focusedJournal.classList.remove("cover-one", "cover-two");
    focusedJournal.classList.add("cover-three");

    const europeCryptids = cryptids.filter(cryptid => cryptid.continent === "Europe"); //filters crytpids to only be ones in Europe
    console.log(europeCryptids);

    let pagesHTML = "";
    europeCryptids.forEach(cryptid => {
        console.log(cryptid.name);
        pagesHTML += `<div class="journal-page pages"><h2>${cryptid.name}</h2> <p>${cryptid.description}</p></div>`;
        console.log(pagesHTML);
    })
    const pageHolder = document.createElement("div");
    pageHolder.innerHTML = pagesHTML; //creates a temporary div and then sets its innerHTML to the pagesHTML string
    const newPages = pageHolder.querySelectorAll(".pages");
    const updatedPages = [focusedJournal, ...newPages]
    pageFlip.updateFromHtml(updatedPages); //calls the pageFlip function with the updated pages array
})
//----------------------------------------------------------------------------------------------------------------------
//BACK BUTTON ------------------------------------------------------------------------------------------------------------------------
const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", function(){
    mainScreen.classList.remove("hidden");
    journalView.classList.add("hidden");
})

//----------------------------------------------------------------------------------------------------------------------
//FOR WHEN A JOURNAL IS CLICKED
let pageFlip = null;
const bookContainer = document.querySelector("#inside-journals");
const bookPages = document.querySelectorAll(".pages");
function startFlipbook(){ //function to initialize the flipbook
    if (pageFlip === null){ //only starts the flipbook if it hasn't been initialized yet (prevents multiple flipbooks being created and causing the positioning issue)
        pageFlip = new St.PageFlip(bookContainer, {width: 600, height: 800, showCover: true} )
        pageFlip.loadFromHTML(bookPages);
        focusedJournal =document.querySelector(".journalCover-clicked");
    }
    pageFlip.turnToPage(0); //restarts the journal to the first page when exit and return
}

let cryptids = [] //empty array to hold the cryptids data
//----------------------------------------------------------------------------------------------------------------------
//loading cryptids.json
async function loadCryptids(){ //function for fetching the cryuptids.json file and then reading it into an array called cryptids
    const result = await fetch("cryptids.json")
    cryptids = await result.json()
    console.log(cryptids)
}

loadCryptids() //calling the function

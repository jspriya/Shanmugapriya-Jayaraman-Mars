// Get body element
const body = document.body;

// ------------ Footer ---------------
// Create a footer element
let footer = document.createElement("footer");

// Append footer to body
body.appendChild(footer);

// Create a new Date object
const today = new Date();

// Get current year
const thisYear = today.getFullYear();

// Get the current footer element
footer = document.querySelector("footer");

//Create a new <p> element
const copyright = document.createElement("p");

// Set the inner HTML with copyright symbol, name and year
copyright.innerHTML = `\u00A9 Shanmugapriya jayaraman ${thisYear}`

//Append <p> to footer
footer.appendChild(copyright);

// footer at center
footer.style.textAlign = "center";

// ---------Skills-------------

const skills = ["Javascript","HTML","CSS","Git","Github"];

// Select the skills section by id
const skillsSection = document.getElementById("Skills");

// seelect the empty <ul> list
const skillsList = skillsSection.querySelector("ul");

// Loop thru skills array
for (let i = 0; i < skills.length; i++) {
    // Create a new <li> element
    const skill = document.createElement("li");
    // Set the text of each li to the current skill
    skill.innerText = skills[i];
    // Append the <li> to the skills list
    skillsList.appendChild(skill);
}





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

//--------------MESSAGE FORM -------------------

// Select the leave_message form by name
const messageForm = document.querySelector("form[name=leave_messages]");

//Event listener for "submit"

messageForm.addEventListener("submit", function(event){
  // Preevent page refresh
  event.preventDefault();

  //Retrieve form field values
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  //Log values

  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);

  // Select the #Messafes section
  const messageSection = document.getElementById("Messages");

  // Select the <ul> inside the #Messages section
  const messageList =messageSection.querySelector("ul");

  //Create a new listitem
  const newMessage = document.createElement("li");
  
  //Set the inner HTML
  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;
  
  // Create a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-button";
  removeButton.type = "button";

  //  Add click event listener to remeove the message
  removeButton.addEventListener("click", function(){
    // Find the <li>
    const entry = removeButton.parentNode;
    //Remove it
    entry.remove();   
  })

  //Append the remove button to the new message
  newMessage.appendChild(removeButton);

  // Append the new message to the message list
  messageList.appendChild(newMessage)

 // Clear form 
 messageForm.reset();
});
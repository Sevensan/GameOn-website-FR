function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}
console.log("### URL current page ###")
let currentUrl = window.location.href
console.log(typeof currentUrl)
console.log(currentUrl)
console.log(currentUrl.indexOf("first"))

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelectorAll(".close")
const firstName = document.querySelector('#first')
const firstNotif = document.querySelector('#first-notif')
const firstNotifNum = document.querySelector("#firstNotifNum")
const lastName = document.querySelector('#last')
const lastNotif = document.querySelector('#last-notif')
const lastNotifNum = document.querySelector("#lastNotifNum")
const email = document.querySelector('#email')
const emailNotif = document.querySelector('#email-notif')
const birthDate = document.querySelector('#birthdate')
const birthNotif = document.querySelector('#birth-notif')
const quantity = document.querySelector('#quantity')
const quantityNotif = document.querySelector('#quantity-notif')
const location1 = document.querySelector('#location1')
const location2 = document.querySelector('#location2')
const location3 = document.querySelector('#location3')
const location4 = document.querySelector('#location4')
const location5 = document.querySelector('#location5')
const location6 = document.querySelector('#location6')
const locationNotif = document.querySelector('#location-notif')
const checkbox1 = document.querySelector('#checkbox1')
const checkbox2 = document.querySelector('#checkbox2')
const checkboxNotif = document.querySelector('#checkbox-notif')
const submitBtn = document.querySelectorAll('#submitBtn')
const success = document.querySelector("#success")
const locations = document.querySelectorAll(".location")
console.log("bouton type : " + submitBtn.type)
// SET CHECKBOX TO OFF BY DEFAULT
checkbox1.value = "off"
checkbox2.value = "off"
// IF ALREADY SUBMITTED, DISPLAY MESSAGE
if ( currentUrl.indexOf("first") > 1 ) {
  success.style.display = 'block'
  success.classList.add('submitted')
}


console.log("########                          #######")
console.log("####### AVANT ENVOI DU FORMULAIRE #######")
console.log("########                          #######")
console.log(locations)
console.log("firstname : " + firstName.value)
console.log("lastname : " + lastName.value)
console.log("email : " + email.value)
console.log("birthdate : " + birthDate.value)
console.log("quantity : " + quantity.value)
console.log("location1 : " + location1.value)
console.log("location2 : " + location2.value)
console.log("location3 : " + location3.value)
console.log("location4 : " + location4.value)
console.log("location5 : " + location5.value)
console.log("location6 : " + location6.value)
console.log("checkbox1 : " + checkbox1.value)
console.log("checkbox2 : " + checkbox2.value)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// red border function
function redBorder (element) {
  element.style.border = "1px solid red"
}

//check form
submitBtn.forEach((btn) => btn.addEventListener("click", submitForm))

// launch modal form
function launchModal () {
  modalbg.style.display = "block"
}
// close modal form
function closeModal () {
  modalbg.style.display = "none"
}


// LOCATION PART
let locationVal = ''
locations.forEach((loc => loc.addEventListener('click', function(){
  checkLocation(loc)
})))
function checkLocation (loc) {
  console.log("loc : " + loc.value + ", location : " + locationVal)
  locationVal = loc.value
  console.log("locationVal : " + locationVal)
}


// CHECKBOX1 PART
checkbox1.addEventListener('click', function(){
  if (checkbox1.value === 'off' ) {
    checkbox1.value = 'on'
  }
})


// HIDE & SHOW METHODS

function show (element) {
  element.style.display = "block"
}
function hide (element) {
  element.style.display = "none"
}

function validateEmail(val)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(val.match(mailformat))
  {
    return true;
  }  else
  {
    return false;
  }
}

// SUBMMIT THE FORM
function submitForm (event) {
  let submit = false
  let firstNameOK = false
  let lastNameOK = false
  let emailOK = false
  let birthDateOK = false
  let quantityOK = false
  let locationOK = false
  let checkbox1OK = false
  let checkbox2OK = true
  console.log("########                          #######")
  console.log("####### A L'ENVOI DU FORMULAIRE #######")
  console.log("########                          #######")
  console.log("firstname : " + firstName.value)
  console.log("lastname : " + lastName.value)
  console.log("email : " + email.value)
  console.log("birthdate : " + birthDate.value)
  console.log("quantity : " + quantity.value)
  console.log("location1 : " + location1.value)
  console.log("location2 : " + location2.value)
  console.log("location3 : " + location3.value)
  console.log("location4 : " + location4.value)
  console.log("location5 : " + location5.value)
  console.log("location6 : " + location6.value)
  console.log("checkbox1 : " + checkbox1.value)
  console.log("checkbox2 : " + checkbox2.value)


  // FIRSTNAME CHECK
  const regexNum = /\d/
  if ( firstName.value.length < 2 ) {
    show(firstNotif)
    redBorder(firstName)
    // check if there is numbers in firstname
  } else if ( regexNum.test(firstName.value )) {
    show(firstNotifNum)
    redBorder(firstName)
  } else {
    firstNameOK = true
    hide(firstNotif)
  }

  // LASTNAME CHECK
  if (lastName.value.length < 2) {
    show(lastNotif)
    redBorder(lastName)
    // check if there is numbers in lastname
  } else if ( regexNum.test(lastName.value )) {
    show(lastNotifNum)
    redBorder(lastName)
  }
   else {
    lastNameOK = true
    hide(lastNotif)
  }
  // EMAIL CHECK
    if (validateEmail(email.value)) {
    emailOK = true
    hide(emailNotif)
  } else {
    show(emailNotif)
    redBorder(email)
  }

  // BIRTHDATE CHECK
  if (birthDate.value.length != 10) {
    show(birthNotif)
    redBorder(birthDate)
  } else {
    birthDateOK = true
    hide(birthNotif)
  }

  // QUANTITY CHECK
  console.log("### quantity check ###")
  console.log(typeof quantity.value)
  if (quantity.value.length <= 0) {
    show(quantityNotif)
    redBorder(quantity)
  } else {
    quantityOK = true
    hide(quantityNotif)
  }

  // LOCATIONS CHECK
  if (locationVal.length == 0) {
    show(locationNotif)
  } else {
    locationOK = true
    hide(locationNotif)
  }

  // CHECKBOXES CHECK
  if (checkbox1.value === 'off') {
    show(checkboxNotif)

  } else {
    checkbox1OK = true
    hide(checkboxNotif)
  }

  // FINAL CHECK
  if (firstNameOK &&
      lastNameOK &&
      emailOK &&
      birthDateOK &&
      quantityOK &&
      locationOK &&
      checkbox1OK &&
      checkbox2OK) {
        submit = true
        console.log("########                          #######")
        console.log("####### APRES ENVOI DU FORMULAIRE #######")
        console.log("########                          #######")
        console.log(submitBtn)
        console.log("bouton type : " + submitBtn.type)
  }
  if (submit) {
    console.log("FORMULAIRE SUBMITTED")
  } else {
    event.preventDefault()
  }
  console.log("submit : " + submit)


}



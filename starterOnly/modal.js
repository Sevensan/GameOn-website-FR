function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelectorAll(".close")
const firstName = document.querySelector('#first')
const firstNotif = document.querySelector('#first-notif')
const lastName = document.querySelector('#last')
const lastNotif = document.querySelector('#last-notif')
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
// checkbox1.value = "unchecked"
// checkbox2.value = "unchecked"
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

locations.forEach((loc => loc.addEventListener('click', checkLocation(loc))))

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

//check form
submitBtn.forEach((btn) => btn.addEventListener("click", submitForm))

// launch modal form
function launchModal () {
  modalbg.style.display = "block"
}

function closeModal () {
  modalbg.style.display = "none"
}
let checked = false
function checkLocation (loc) {
  console.log(loc)
  let location = ''
  if (checked == false) {
    checked = true
    location = loc.value
    console.log(`location : ${location}, checked : ${checked}`)
  } else {
    checked = false
  }
}

function show (element) {
  element.style.display = "block"
}
function hide (element) {
  element.style.display = "none"
}

function submitForm () {
  let submit = false
  let firstNameOK = false
  let lastNameOK = false
  let emailOK = false
  let birthDateOK = false
  let quantityOK = false
  let location1OK = false
  let location2OK = false
  let checkbox1OK = false
  let checkbox2OK = false
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
  console.log("checkbox1 : " + checkbox1.value)
  console.log("checkbox2 : " + checkbox2.value)
  // FIRSTNAME CHECK
  if (firstName.value.length < 2) {
    show(firstNotif)
  }
  else {
    firstNameOK = true
    hide(firstNotif)
  }

  // LASTNAME CHECK
  if (lastName.value.length < 2) {
    show(lastNotif)
  }
  else {
    lastNameOK = true
    hide(lastNotif)
  }

  // EMAIL CHECK
  if (email.value === '') {
    show(emailNotif)
  }
  else {
    emailOK = true
    hide(emailNotif)
  }

  // BIRTHDATE CHECK
  if (birthDate.value.length != 10) {
    show(birthNotif)
  }
  else {
    birthDateOK = true
    hide(birthNotif)
  }

  // QUANTITY CHECK
  if (quantity.value === '') {
    show(quantityNotif)
  }
  else {
    quantityOK = true
    hide(quantityNotif)
  }

  // LOCATIONS CHECK
  if (location1.value === '') {
    show(locationNotif)
  }
  else {
    location1OK = true
    hide(locationNotif)
  }
  if (location2.value === '') {
    show(locationNotif)
  }
  else {
    location2OK = true
    hide(locationNotif)
  }

  // CHECKBOXES CHECK
  if (checkbox1.value === '') {
    show(checkboxNotif)

  }
  else {
    checkbox1OK = true
    hide(checkboxNotif)
  }
  if (checkbox2.value === '') {

  }
  else {
    checkbox2OK = true
  }

  // FINAL CHECK
  if (firstNameOK &&
      lastNameOK &&
      emailOK &&
      birthDateOK &&
      quantityOK &&
      location1OK &&
      location2OK &&
      checkbox1OK &&
      checkbox2OK) {
        submit = true
        submitBtn.type = 'submit'
        console.log("########                          #######")
        console.log("####### APRES ENVOI DU FORMULAIRE #######")
        console.log("########                          #######")
        console.log(submitBtn)
        console.log("bouton type : " + submitBtn.type)
  }
  if (submit) {
    success.style.display = "block"
  }
  console.log("submit : " + submit)


}



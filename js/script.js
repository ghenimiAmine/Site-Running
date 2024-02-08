const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

let password = document.querySelector("[name=password]")
password.addEventListener("keyup",verifMDP)

function verifMDP(){
  if(this.value.length < 8){
    this.classList.add("text-danger")
    this.classlist.remove("text-valid")
  }else{
    this.classlist.add("text-valid")
    this.classList.remove("text-danger")
  }
}

function verifierFormulaire() {
  let password = document.getElementById('password');
  let name = document.getElementById('name');
  let firstname = document.getElementById('firstname');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let age = document.getElementById('label');
  let cocher = document.getElementById('formCheck-1');
  if(password.value.length <8){
    password.classList.add('error');
    pwd.classList.remove('invisible');
  }
  else {
    password.classList.add('good');
    pwd.classList.add('invisible');
  }
  if(name.value.length <1){
    name.classList.add('error');
  }else {
    name.classList.add('good');
  }
  if(email.value.length <1){
    email.classList.add('error');
  }else {
    email.classList.add('good');
  }
  if(firstname.value.length <1){
    firstname.classList.add('error');
  }else {
    firstname.classList.add('good');
  }
  if(message.value.length <1){
    message.classList.add('error');
  }else {
    message.classList.add('good');
  }
  if(!cocher.checked){
    age.classList.add('red');
    age.classList.remove('vert');
   }else{ if(cocher.checked){
    age.classList.remove('red');
    age.classList.add('vert');
   }
  }
}
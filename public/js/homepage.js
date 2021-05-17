var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  console.log(showClass)
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}

const signUpSubmit = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signUpEmail').value.trim();
  const password = document.querySelector('#signUpPassword').value.trim();
  console.log(email, password);

  if (email && password) {

      const response = await fetch('/api/users/create', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          document.location.replace('/profile');
      } else {
          alert(response.statusText);
      }
  }};

const loginSubmit = async (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#loginEmail').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();
  
  if (email && password) {
  
      const response = await fetch('api/users/login', {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
          document.location.replace('/profile');
        console.log("It worked")
      } else {
          alert(response.statusText);
      }
  }};

document.querySelector('.signUpForm').addEventListener('submit', signUpSubmit);
document.querySelector('.loginForm').addEventListener('submit', loginSubmit);

changeSide();

radioGroup.addEventListener( 'change', changeSide );

// 

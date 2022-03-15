const input = document.getElementById('email');
const error = document.getElementById('error');

function myValidation() {
        if(input.validity.typeMismatch) {
            error.innerHTML = 'Check your email please!';
            error.classList.add('error-message');
            input.classList.add('red-border');
        } else {
            error.innerHTML = '';
            input.classList.remove('red-border');
        }
}


document.addEventListener('input', (function(){
    return function(e) {
      e.preventDefault();
      myValidation();
    };
})(), true);


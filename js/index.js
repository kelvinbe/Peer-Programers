
let inputs = document.getElementsByClassName('input');

Array.from(inputs).forEach(function(input){
    input.addEventListener('focus', function (e) {
        e.target.parentElement.classList.add('border-left');
    });

    input.addEventListener('focusout', function (e) {
        e.target.parentElement.classList.remove('border-left');
    });
});

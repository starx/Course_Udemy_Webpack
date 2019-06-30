import 'bootstrap';

// Dynamically load modules when it's needed
const button = document.createElement('button');
button.innerText = 'Click Me to load modules dynamically.';
button.setAttribute('class', 'btn btn-primary btn-lg btn-block');
button.setAttribute('data-toggle', 'tooltip');
button.setAttribute('title', 'Load modules dynamically');
button.setAttribute('data-placement', 'top');

button.addEventListener('click',() => {
    System.import('./imageViewerBig').then(module => {
        console.log(module);
    });
    System.import('./imageViewer').then(module => {
        console.log(module);
        module.default();
    });
});

document.getElementById('imageButtonContainer').appendChild(button);

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
import sum from "./sum";

const total = sum(1, 5);
console.log(total);

const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click',() => {
    System.import('./image_viewer_big').then(module => {
        console.log(module);
    });
    System.import('./image_viewer').then(module => {
        console.log(module);
        module.default();
    });
});

document.body.appendChild(button);
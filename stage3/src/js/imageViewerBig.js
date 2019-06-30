import big from '../../assets/big.jpg';
import '../../styles/image_viewer.css';

const image = document.createElement('img');
image.setAttribute('class', 'img-fluid');
image.src = big;

document.getElementById('bigImageContainer').appendChild(image);
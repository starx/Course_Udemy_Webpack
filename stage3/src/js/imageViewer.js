import small from '../../assets/small.jpg';

export default () => {
    const image = document.createElement('img');
    image.setAttribute('class', 'img-thumbnail');
    image.src = small;

    document.getElementById('smallImageContainer').appendChild(image);
}
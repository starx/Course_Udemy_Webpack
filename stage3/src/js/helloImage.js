const helloImage = document.createElement('img');

helloImage.src="http://blog.osteel.me/images/2015/12/18/docker-tutorial2.gif";
helloImage.setAttribute('alt', "Hello World!");
helloImage.setAttribute('class', 'img-fluid');

const imgContainer = document.getElementById('helloImageContainer');
imgContainer.appendChild(helloImage);
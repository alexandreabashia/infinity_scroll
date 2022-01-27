

const count = 10;
const accessKey = '1UFtnYmLfWIw0_8sPGuroCDOu_hu9_tYH2IUjq1Euyo';
const secretKey = 'OU8KZ4bu4AeEOd2Xi2A-pKimcnapqPYDv51T0U6o37k';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;

let photosArray = [];

let pc = document.getElementById('loaded')

// ASYNC AWAIT
async function execApi() {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        loadImages(photosArray)
}

function loadImages(photosArray) {
    photosArray.forEach(element => {
        var image = new Image();
        image.src = element.urls.small;
        document.getElementById('loaded').appendChild(image);
    });
}

pc.addEventListener('scroll', function(){
    if (pc.scrollTop + pc.clientHeight >= pc.scrollHeight) {
        execApi();
        console.log('whats up')
      }
})


execApi();




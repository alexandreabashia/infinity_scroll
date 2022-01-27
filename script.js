

const count = 10;
const accessKey = '1UFtnYmLfWIw0_8sPGuroCDOu_hu9_tYH2IUjq1Euyo';
const secretKey = 'OU8KZ4bu4AeEOd2Xi2A-pKimcnapqPYDv51T0U6o37k';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;

let photosArray = [];

// ASYNC AWAIT
async function execApi() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        console.log(photosArray)
    } catch(e) {
        console.log('Error fetching')
    }
}

execApi()



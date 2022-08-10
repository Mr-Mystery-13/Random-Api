let JMeme 
let JNASA

const m = fetch('https://api.imgflip.com/get_memes')
.then(function(response) {
    return response.json();
})

.then(function(jsonData) {
    JMeme = jsonData
})

const n = fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY')
.then(function(response) {
    return response.json();
})

.then(function(jsonData) {
    JNASA = jsonData
})


randNumGenerator = (e) => {
    // get a randomDec
    let randDec = Math.random(); // [0, 1)
    randDec *= e
    return Math.floor(randDec);
}

function MEME() {
    let x = randNumGenerator(JMeme.data.memes.length)

    let picture = {
        picture: JMeme.data.memes[x].url,
    }

    MemeUI(picture.picture)
}

function NASA() {
    let x = randNumGenerator(JNASA.photos.length)

    let picture = {
        picture: JNASA.photos[x].img_src
    }

    NASA_UI(picture.picture)
}

function MemeUI (e) {
    document.querySelector('#meme img').src = e
}

function NASA_UI (e) {
    document.querySelector('#NASA img').src = e
}

function RandBoth () {
    MEME ()
    NASA ()
}
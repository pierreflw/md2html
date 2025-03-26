/* 

// Importation des fonctions de conversion du md au html
let converter = new showdown.Converter(), // Instance de la classe du module
    text = '# hello, the md style', // Emplacement du code markdown
    html = converter.makeHtml(text) // Stockage du résultat dans une variable

// Affichage du contenu md dans la page au format html
container.innerHTML = html

*/

// Modes sombre et clair
let darkMode = document.querySelector('.dark_mode'),
    lightMode = document.querySelector('.light_mode'),
    container = document.querySelector('.container')

    darkMode.addEventListener('click', e => {
        darkMode.style.display = 'none'
        lightMode.style.display = 'inherit'
        document.querySelector('nav').style.backgroundColor = '#FFFFFF'
        document.body.style.backgroundColor = '#151515'
        container.style.color = '#FFFFFF'
        document.body.style.transition = 'background-color 0.5s ease-in-out'
        document.querySelector('hr').style.backgroundColor = 'linear-gradient(to right, transparent, rgb(255 255 255 / 50%), transparent)'
    })

    lightMode.addEventListener('click', e => {
        lightMode.style.display = 'none'
        darkMode.style.display = 'inherit'
        document.body.style.backgroundColor = '#F2F2F2'
        container.style.color = '#151515'
        document.body.style.transition = 'background-color 0.5s ease-in-out'
        document.querySelector('hr').style.backgroundColor = 'linear-gradient(to right, transparent, rgb(0 0 0 / 50%), transparent)'
    })



init();

function init() {

    window.addEventListener( 'hashchange', hashChange, false )

    hashChange()

}

function hashChange() {

    fileName = location.hash ? location.hash.split( '#' )[1] : 'accueil.md'

    document.title = document.title ? document.title : fileName

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', fileName, true )
    xmlHttp.onreadystatechange = function() {

        container.innerHTML = xmlHttp.readyState === 4 ? new showdown.Converter({tables: true}).makeHtml( xmlHttp.responseText ) : ''

    };

    xmlHttp.send( null )

}
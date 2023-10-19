//const contents = document.getElementById('contents')
////contents.parentNode.removeChild(contents)



const imgARRAY = [

    {"ELEPHANT": "https://pics.craiyon.com/2023-07-19/ce7d04fee3924afba897a478efbd5923.webp"}
    , {"PIGEON": "https://i.pinimg.com/736x/4a/33/4d/4a334d258764587c90edab9e2aaea1d4.jpg"}
    
    ]


const randImg = Math.floor(Math.random() * imgARRAY.length);

setInterval(alert(Object.keys(imgARRAY[randImg])[0]), 1000)

const images = document.querySelectorAll('img')

for(i = 0 ; i<images.length ; i++){

    
    images[i].src = Object.values(imgARRAY[randImg])[0];

}








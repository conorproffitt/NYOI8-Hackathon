//const contents = document.getElementById('contents')
////contents.parentNode.removeChild(contents)



const imgARRAY = [

    {"ELEPHANT": "https://pics.craiyon.com/2023-07-19/ce7d04fee3924afba897a478efbd5923.webp"}
    , {"PIGEON": "https://i.pinimg.com/736x/4a/33/4d/4a334d258764587c90edab9e2aaea1d4.jpg"}
    , {"DOG": "https://fabulousmasterpieces-blog.co.uk/wp-content/uploads/anthropomoric-dog-art-fabulous.jpg"}
    , {"TIGER": "https://m.media-amazon.com/images/I/61u1LhABcML._AC_UF894,1000_QL80_.jpg"}
    , {"BUFFALO": "https://www.boredpanda.com/blog/wp-content/uploads/2019/06/human-body-animal-face-sculptures-alessandro-gallo-fb6.png"}
    , {"HORSE": "https://fabulousmasterpieces-blog.co.uk/wp-content/uploads/horse-in-uniform.jpg"}
    , {"LEOPARD": "https://images.fineartamerica.com/images-medium-large-5/royal-noble-gepard-portrait-jolanta-prunskaite.jpg"}
    , {"FANCY ELEPHANT": "https://laughingsquid.com/wp-content/uploads/il_fullxfull.191856970.jpg"}
    , {"SEXY COW": "https://ih1.redbubble.net/image.4816338233.7820/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"}
    , {"BUSINESS ZEBRA": "https://media.istockphoto.com/id/508882713/photo/earn-your-stripes-in-the-corporate-jungle.jpg?s=612x612&w=0&k=20&c=Gh16AzPEaL9YmFovcVOMGzKF5_uDG2Ep3WCGuOmCMnw="}
    , {"JACKPOT": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fd62e808-7051-48ad-9a6a-975fef68686e/dedt37s-c0c2ad22-8549-4fe6-bac5-3d72bcb7d319.jpg/v1/fill/w_800,h_1000,q_70,strp/animal_head_human_body_by_themodelstationbykc_dedt37s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkzNSIsInBhdGgiOiJcL2ZcL2ZkNjJlODA4LTcwNTEtNDhhZC05YTZhLTk3NWZlZjY4Njg2ZVwvZGVkdDM3cy1jMGMyYWQyMi04NTQ5LTRmZTYtYmFjNS0zZDcyYmNiN2QzMTkuanBnIiwid2lkdGgiOiI8PTE1NDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JDqzoNRjPqlyaO2kL0Qn4M8gOuBemWWNdI1Kb4FFdfs"}
]


const randImg = Math.floor(Math.random() * imgARRAY.length);

setInterval(alert(Object.keys(imgARRAY[randImg])[0]), 1000)

const images = document.querySelectorAll('img')

for(i = 0 ; i<images.length ; i++){

    
    images[i].src = Object.values(imgARRAY[randImg])[0];
    images[i].srcset = Object.values(imgARRAY[randImg])[0];

}








let images = [{
    src:"https://www.clker.com/cliparts/A/q/u/A/w/A/insect-hi.png"
},{
    src:"https://static.vecteezy.com/system/resources/previews/033/125/103/non_2x/cute-cartoon-insect-bee-generative-ai-free-png.png"
},{
    src:"https://cdn.pixabay.com/photo/2012/04/14/15/56/bug-34374_1280.png"
},{
    src:"http://clipground.com/images/the-insects-clipart-12.jpg"
},{
    src:"https://purepng.com/public/uploads/large/purepng.com-beetlenature-macro-fly-danger-insect-beetle-bug-pest-wild-zoology-bite-dangerous-smallanimals-821523994374hydnc.png"
},{
    src:"https://pngimg.com/uploads/spider/spider_PNG10.png"
},{
    src:"https://cdn.pixabay.com/photo/2012/04/14/15/55/beetle-34372_640.png"
},{
    src:"https://cdn.pixabay.com/animation/2024/05/18/20/36/20-36-02-155__340.png"

},{
    src:"https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-watercolor-beetle-insect-png-image_10019432.png"
},{
    src:"https://webstockreview.net/images/clipart-bee-honey-bee-5.png"
}]












let btn   = document.querySelector("button")
let body   = document.querySelector("body")


btn.addEventListener("click",function(){

let img = document.createElement("img")
let randomLength = Math.floor(Math.random()*images.length)   
img.setAttribute("src",`${images[randomLength].src}`)
img.style.position = "absolute"
img.style.height = "50px"
img.style.left = Math.random()*90 + "%"
img.style.top = Math.random()*90 + "%"
img.style.rotate = Math.random()*360 + "deg"

body.appendChild(img)



})
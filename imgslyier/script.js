const colors=[
    "red",
    "green",
    "blue",
    "yelow"
]
function update(){
    main.src= images[activeIndex];
    document.body.style.backgroundColor = colors[activeIndex];
}
const images =["https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1017/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1019/600/400"];
const main = document.querySelector(".img");
const p = document.querySelector(".p-errow");
const n = document.querySelector(".n-errow");
let activeIndex = 0;

p.addEventListener("click",() => {
    activeIndex++;
    if(activeIndex >= images.length){
        activeIndex=0;
    }
    update();
})
n   .addEventListener("click",()=>{
    activeIndex--;
    if(activeIndex<0){
        activeIndex=images.length-1;
    }
    update();
})
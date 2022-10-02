const getPatti = document.getElementById("patti");
let count=0;
const arr = ["Free Samples with All Orders","Due to high volume, shipping times may be delayed","Free Shipping for BlueRewards Members","Free Gifts with Purchase, Browse Now >"];
setInterval(() => {
    if(count===arr.length){
        count=0;
    }
    getPatti.innerHTML=null;
  let p1 = document.createElement("p");
  p1.innerText=arr[count];
  count++;
  getPatti.append(p1);
},4000)

const image = ["https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_35241559-d9bf-4847-ad60-246ce1c321c5_2000x.jpg?v=1662761308",
               "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/female-founders-edit-hero-des_2000x.jpg?v=1663617304",
               "https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Derek_Jonson_-_The-Maker-hp-hero-des-2_2000x.jpg?v=1663942552"]

let index=0;

let slide1 = document.getElementById("slide1");
        
address = setInterval(() => {
    if(index === image.length){
        index=0;
    }
    slide1.innerHTML=null;
    let img = document.createElement("img");
    img.src=image[index];
    slide1.append(img);
    index++;
    if(index==0){
        document.getElementById("image1").style.backgroundColor="#12284c";
        document.getElementById("image2").style.backgroundColor="white";
        document.getElementById("image3").style.backgroundColor="white";
    }
    else if(index==1){
        document.getElementById("image1").style.backgroundColor="white";
        document.getElementById("image2").style.backgroundColor="#12284c";
        document.getElementById("image3").style.backgroundColor="#white";
    }
    else if(index==2){
        document.getElementById("image1").style.backgroundColor="white";
        document.getElementById("image2").style.backgroundColor="white";
        document.getElementById("image3").style.backgroundColor="#12284c";
    }
},6000);

let image11 = () => {
    slide1.innerHTML=null;
    let img = document.createElement("img");
    img.src=image[0];
    slide1.append(img);
    document.getElementById("image1").style.backgroundColor="#12284c";
    document.getElementById("image2").style.backgroundColor="white";
    document.getElementById("image3").style.backgroundColor="white";
}
let image22 = () => {
    slide1.innerHTML=null;
    let img = document.createElement("img");
    img.src=image[1];
    slide1.append(img);
    document.getElementById("image1").style.backgroundColor="white";
    document.getElementById("image2").style.backgroundColor="#12284c";
    document.getElementById("image3").style.backgroundColor="#white";
}
let image33 = () => {
    slide1.innerHTML=null;
    let img = document.createElement("img");
    img.src=image[2];
    slide1.append(img);
    document.getElementById("image1").style.backgroundColor="white";
    document.getElementById("image2").style.backgroundColor="white";
    document.getElementById("image3").style.backgroundColor="#12284c";
}

const productContainer = [...document.querySelectorAll('.product-container')];
const pre = [...document.querySelectorAll('.pre-btn')];
const nxt = [...document.querySelectorAll('.nxt-btn')];

productContainer.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxt[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })
    pre[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
})
let obj;
let products =
  localStorage.getItem("products") === null
    ? { favourite: [] }
    : JSON.parse(localStorage.getItem("products"));
let number=
    localStorage.getItem("quanty")===null
        ? 0
        : JSON.parse(localStorage.getItem("quanty"));
let productsQuanty=
    localStorage.getItem("products-quanty")===null
        ?{}
        : JSON.parse(localStorage.getItem("products-quanty"));

let names=
    localStorage.getItem("names")===null
        ?[]
        : JSON.parse(localStorage.getItem("names"));

if (localStorage.getItem("quanty")!=null){
    document.getElementById("num").innerHTML=JSON.parse(localStorage.getItem("quanty"));
}
function addProduct(tittle,cash){
    let obj= new Object();
    obj[tittle]=cash;
    console.log(obj)
    console.log(products.favourite);
    if (!names.includes(tittle)){
        products.favourite.push(obj);
        names.push(tittle);
        localStorage.setItem("names",JSON.stringify(names));
        number++;
        localStorage.setItem("products",JSON.stringify(products));
        localStorage.setItem("quanty",JSON.stringify(number));
        console.log(localStorage.getItem("quanty"));
        document.getElementById("num").innerHTML=JSON.parse(localStorage.getItem("quanty"));
        productsQuanty[`${tittle}`]=1;
        localStorage.setItem("products-quanty",JSON.stringify(productsQuanty));
    }else{
        productsQuanty[`${tittle}`]++;
        localStorage.setItem("products-quanty",JSON.stringify(productsQuanty));
    }

}

function renderItems(){
    if (localStorage.getItem("products")!==null){
        let cartList=document.getElementById("wrapper");
        let cartItems=JSON.parse(localStorage.getItem("products")).favourite;
        let itemQuanty=JSON.parse(localStorage.getItem("products-quanty"));
        console.log(cartItems);
        console.log(cartItems.map((item)=>Object.keys(item)[0]))
        cartList.innerHTML=cartItems.map((item)=>
            `<div class="requested-Product" >
            <div class="left-container">
                <div class="info-price">
                    <div class="info">${Object.keys(item)[0]}</div>
                    <div class="price">${Object.values(item)[0]}</div>
                </div>
            </div>
            <div class="right-container">
                <div class="quantity1">Quantity:</div>
                <div class="quantity2">${itemQuanty[Object.keys(item)[0]]}</div>
            </div>
        </div>`
        ).join("");
    }

}
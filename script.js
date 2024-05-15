let products = [
	{
		id: 1,
		title: "Forest Art",
		price: 200,
		image: "./images/p1.jpg",
	},
	{
		id: 2,
		title: "Plain Art",
		price: 500,
		image: "./images/p2.jpg",
	},
	{
		id: 3,
		title: "Manuver",
		price: 700,
		image: "./images/p3.jpg",
	},
	{
		id: 4,
		title: "Cas Art",
		price: 400,
		image: "./images/p4.jpg",
	},
	{
		id:5,
		title: "Breeze",
		price: 500,
		image: "./images/p5.jpg",
	},
];
let cartItem =[];


let hamBurger = document.querySelector('.icon');
let navItems = document.querySelector('.navitems');
/**Catch Product Div */
let productDiv = document.querySelector('.products');
/**Cart */
let showCart = document.querySelector('.cart');
let total = document.querySelector('.subtotal');

function showNav(){
navItems.classList.toggle("hidden");
}

/*Slider*/ 

let slideImage = document.querySelector(".slide");

let images = [
	"../images/slide.jpg",
	"../images/slide2.jpg",
	"../images/slide3.jpg",
];
let i = 0;
slideImage.src = images[i];

function right() {
	i++;
	if (i < images.length) {
		slideImage.src = images[i];
	} else {
		i = 0;
		slideImage.src = images[i];
	}
}
setInterval( ()=>right(), 10000);

/**Dynamically add product to HTML */

products.forEach((item)=>{
	productDiv.innerHTML += `
	
	 <div class="product flex flex-col justify-center">
            <img src="${item.image}" class="product-image">
            <p class="title text-sm font-bold text-center">${item.title}</p>
            <p class="price text-center">${item.price}</p>
            <button type="button" class="text-center bg-gray-50 p-1 rounded-lg shadow-lg shadow-slate-800" onclick='cart(${item.id})'>Add to cart</button>
        </div>`;
});

function cart(i){
	console.log(i);
if(!cartItem.includes(i)){
cartItem.push(i);
}

let price =0;
showCart.innerHTML ='';
 cartItem.forEach((item) => {
	
	let product = products[item - 1];
	console.log(product);
	
	price += product.price
	showCart.innerHTML += `
	<div class="product flex flex-col justify-center">
            <img src="${product.image}" class="product-image h-[10vh]">
            <p class="title text-sm font-bold text-center">${product.title}</p>
            <p class="price text-center">${product.price}</p>
            
        </div>`;

		total.innerHTML = ` Subtotal: ${price}`
		
});


}
/**Search */

let tit =[];

products.forEach(
	(item)=>{
		tit.push(item.title)
	}
)
tit.forEach((i)=>{
	
	searchitem.innerHTML+=`<button  class="px-5 py-2 hover:bg-black hover:text-white w-full text-left pointer"> ${i}</button> </br>`;
	 
})
// searchitem.innerHTML= tit;

search.onkeyup = function () {
	searchitem.classList.toggle("hidden")
	let content = [];
	let isearch = search.value.toLowerCase();
	
	if (isearch) {
	  content = products.forEach((item)=>{
		let it =item.title.toLowerCase();
		
		if(it.match(isearch)){

			searchitem.innerHTML=`<button onclick="pusa(${item.id})"  class='search_button hover:bg-black hover:text-white w-full text-left pointer px-5 py-2' >${item.title}</button>`;
	
		}
		
	  }) 
	}
	
	
};
// function con(id){
// 	console.log(id)
// }

function pusa(id){
		
        final.classList.toggle("hidden")
	final.innerHTML = `
	<button onclick="hide()" class="cross absolute right-5"><i class="fa-solid fa-xmark"></i></button>
	<div class="product flex flex-col justify-center w-[20vw]">
			<img src="${products[id-1].image}" class="product-image h-[30vh] ">
			<p class="title text-sm font-bold text-center">${products[id-1].title}</p>
			<p class="price text-center">${products[id-1].price}</p>
			
		</div>`;
		// document.getElementsByTagName("body")[0].innerHTML=`
		// <div class="product flex flex-col justify-center">
		// 		<img src="${products[id-1].image}" class="product-image h-[10vh]">
		// 		<p class="title text-sm font-bold text-center">${products[id-1].title}</p>
		// 		<p class="price text-center">${products[id-1].price}</p>
				
		// 	</div>`;
}

function hide(){
	final.classList.toggle("hidden");
}
document.querySelector(".cartbt").addEventListener("click",()=>{
      document.querySelector(".cartmain").classList.toggle('hidden')
})



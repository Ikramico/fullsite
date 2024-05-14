let products = [
	{
		title: 'Forest Art', 
		price: 200,
		image: './images/p1.jpg'
	},
	{
		title: 'Plain Art', 
		price: 500,
		image: './images/p2.jpg'
	},
	{
		title: 'Manuver', 
		price: 700,
		image: './images/p3.jpg'
	},
	{
		title: 'Cas Art', 
		price: 400,
		image: './images/p4.jpg'
	},
	{
		title: 'Breeze', 
		price: 500,
		image: './images/p5.jpg'
	}
	
]



let hamBurger = document.querySelector('.icon');
let navItems = document.querySelector('.navitems');
/**Catch Product Div */
let productDiv = document.querySelector('.products');

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
setInterval( right(), 10000);

/**Dynamically add product to HTML */

products.forEach((item)=>{
	productDiv.innerHTML += `
	
	 <div class="product flex flex-col justify-center">
            <img src="${item.image}" class="product-image">
            <p class="title text-sm font-bold text-center">${item.title}</p>
            <p class="price text-center">${item.price}</p>
            <button type="button" class="text-center bg-gray-50 p-1 rounded-lg shadow-lg shadow-slate-800">Add to cart</button>
        </div>`;
	// document.createElement('div')
})
const btns = [
    {
        id : 1,
        name : "shoes"
    },
    {
        id : 2,
        name : "shirts"
    },
    {
        id : 3,
        name : "jewerry"
    },
    {
        id : 4,
        name : "jackets"
    },
    {
        id : 5,
        name : "watches"
    }
];
const filters = [...new Set(btns.map((btn) => {return btn}))];
document.getElementById("btns").innerHTML = filters.map((btn) =>{
    var{name, id} = btn;
    return(
        "<button class='fil-p' onclick ='filterItems("+(id)+`)'>${name}</button>`
    )
}).join('')

const product = [
    {
        id : 4,
        image : './images/products/jacket-1.jpg',
        title : "hosea",
        price : 120,
        category : 'jackets'
    },
    {
        id : 1,
        image : './images/products/shoe-1.jpg',
        title : "roma",
        price : 119,
        category : 'shoes'
    },
    {
        id : 4,
        image : './images/products/jacket-2.jpg',
        title : "Jackotiy",
        price : 167,
        category : 'jackets'
    },
    {
        id : 4,
        image : './images/products/jacket-6.jpg',
        title : "pacha",
        price : 120,
        category : 'jacket'
    },
    {
        id : 2,
        image : './images/products/shirt-1.jpg',
        title : "naivas",
        price : 120,
        category : 'shirts'
    },
    {
        id : 1,
        image : './images/products/shoe-3.jpg',
        title : "hosea",
        price : 120,
        category : 'shoes'
    },
    {
        id : 5,
        image : './images/products/watch-1.jpg',
        title : "rolex",
        price : 198,
        category : 'watches'
    },
    {
        id : 3,
        image : './images/products/jewellery-1.jpg',
        title : "necklace er",
        price : 120,
        category : 'jewerry'
    },
    {
        id : 2,
        image : './images/products/shirt-2.jpg',
        title : "ola",
        price : 70,
        category : 'shirts'
    },
    {
        id : 5,
        image : './images/products/watch-3.jpg',
        title : "honda",
        price : 30,
        category : 'watches'
    },
    {
        id : 4,
        image : './images/products/jacket-4.jpg',
        title : "katnika",
        price : 128,
        category : 'jackets'
    },

 {
        id : 3,
        image : './images/products/jewellery-2.jpg',
        title : "kambyin",
        price : 90,
        category : 'jewerry'
    },
    {
        id : 5,
        image : './images/products/watch-4.jpg',
        title : "sonex",
        price : 120,
        category : 'watches'
    },
    {
        id : 3,
        image : './images/products/jewellery-3.jpg',
        title : "hosea",
        price : 68,
        category : 'jewerry'
    }
];

const categories = [...new Set(product.map((item) => {return item}))];
const filterItems = (a) =>{
    const filterCategories = categories.filter(item);
    function item(value){
        if(value.id == a){
            return(
                value.id
            )
        }
    }
    displayItem(filterCategories)
}

document.getElementById("searchBar").addEventListener('keyup', (e) =>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) =>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})

const displayItem = (items) =>{
    document.getElementById('root').innerHTML = items.map((item) =>{
        var{image, title, price} = item;
        return(
            `<div class='box'>
            <h3>${title} </h3>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <h2>$ ${price}.00</h2>
            <button>Add to cart</button>
            </div>
            </div>`
        )
    }).join('')
}
displayItem(categories)
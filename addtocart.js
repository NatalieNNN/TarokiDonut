/// a list of 'product' 
/// content in each box: image, title, price & add-to-cart button

const product = [
   {
       id: 0,
       image: 'image/cake1.png',
       title: 'Smiley Cake',
       price: 58,
   },
   {
       id: 1,
       image: 'image/cake3.png',
       title: 'Spiderman Cake',
       price: 58,
   },
   {
       id: 2,
       image: 'image/cake6.png',
       title: 'Minions Cake',
       price: 58,
   },
   {
       id: 3,
       image: 'image/cake7.jpg',
       title: 'Unicorn Cake',
       price: 58,
   },
   {
    id: 4,
    image: 'image/cake8.png',
    title: 'Basketball Cake',
    price: 58,
    },
    {
    id: 5,
    image: 'image/cake9.png',
    title: 'Babyshark Cake',
    price: 58,    
    }
];


const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>&#163 ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')


    
    var cart=[]

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(){
        let j = 0, total = 0 ;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "&#163 "+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total = total + price;
                document.getElementById("total").innerHTML = "&#163 "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class = 'row-img'>
                        <img class = 'rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>&#163 ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    }



const products=[
    {id:1,name:"lebtop",price:12000},

    {id:2,name:"Asus",price:20000},
]
console.log(products);
const product=products.map((p)=>{
    return p.name;
})
console.log(product)
const price=products.map((p)=>p.price)
const total=price.reduce((previcus,current)=>previcus+current,0)
console.log(total);
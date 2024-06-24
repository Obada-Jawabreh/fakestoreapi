function Product(title ,price,description,image){
    this.title=title;
    this.price=price;
    this.description=title;
    this.image=image;
}
async function render(){
    let respons = await fetch("https://fakestoreapi.com/products?limit=20")
    let vlues = await respons.json();
    // console.log(vlues);
    vlues.forEach(element => {
        let title=element.title;
        let price=element.price;
        let description=element.description;
        let image=element.image;
        let product=new Product(title ,price,description,image);
        console.log(product.image);
        createCard(product);
    });
}
render();
function createCard(product){
//    let v= document.getElementsByClassName('product-grid');
   let v= document.getElementById('product-grid');

   let div = document.createElement('div');
   div.classList.add("product");
   v.appendChild(div);

   let i = document.createElement('img');
   i.id='image';
   i.setAttribute('src',product.image)
//   or i.src=product.image
//    i.style.width="50px";
//    i.style.marginBottom="60px"
   div.appendChild(i);

   let t = document.createElement('h3');
   t.id='title';
   t.innerHTML=product.title;
   div.appendChild(t);
   
   let d = document.createElement('p');
   d.id='description';
   d.innerHTML=product.description;
   div.appendChild(d);

   let p = document.createElement('p');
   p.id='price';
   p.innerHTML=product.price;
   div.appendChild(p);



   
}
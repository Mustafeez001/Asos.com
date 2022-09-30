import navbar from "../components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();

const appendBagData=()=>{
    let SbagData=document.getElementById('SbagData');
    SbagData.innerHTML=null;
    let data= JSON.parse(localStorage.getItem('Sremove')) || [];
    data.forEach(el=> {
        let div=document.createElement('div');
        div.setAttribute('class','Sdata')

        let div_img=document.createElement('div')
        div_img.setAttribute('class','Simage')
        

        let img = document.createElement('img');
     
        img.src = el.urls.small;
        div_img.append(img)
       

        const bun = document.createElement("p")
        bun.innerText = "price 30$";
        const heading = document.createElement("h5");
        heading.innerText = el.alt_description;
       // let qty_btn=document.createElement('select');
        
       
      

        let Sdiv=document.createElement('div');
        Sdiv.setAttribute('class','SDiv')
        Sdiv.append(bun,heading);
        div.append(div_img,Sdiv)
        SbagData.append(div)

      
        
    });

}
appendBagData()

let data= JSON.parse(localStorage.getItem('count'))
let total_items=document.getElementById('total_items');
total_items.innerHTML=data

let Sprice=JSON.parse(localStorage.getItem('price'));

let total_price=document.getElementById('total_price');
total_price.innerHTML=`${Sprice}$`;

let Scheck_btn=document.getElementById('Scheck_btn');
Scheck_btn.addEventListener('click',()=>{
    window.location.href='../index/address.html'
})

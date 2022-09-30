

import navbar from "../components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();


const appendSloveData=()=>{
    let ch= JSON.parse(localStorage.getItem('loove')) || [];
    let SloveData=document.getElementById('SloveData');
    SloveData.innerHTML=null;


    ch.forEach((el) => {
        
      //  console.log('el',el)
        let div = document.createElement("div");
        div.setAttribute("id", "Tcard")

        const img = document.createElement('img');
        img.src = el.urls.small;
        img.setAttribute("class", "Tproimg");


        const heading = document.createElement("h5");
        heading.innerText = el.alt_description;
        heading.setAttribute("class", "Tproh");

        let Sdiv=document.createElement('div');
        Sdiv.setAttribute('class','SDiv')

        const bun = document.createElement("p")
        bun.innerText = "price 30$";

        const Sbtn=document.createElement('img');
        Sbtn.src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M15%203a1%201%200%200%201%201%201h2a1%201%200%201%201%200%202H6a1%201%200%200%201%200-2h2a1%201%200%200%201%201-1h6Z%22%2F%3E%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20d%3D%22M6%207h12v12a2%202%200%200%201-2%202H8a2%202%200%200%201-2-2V7Zm3.5%202a.5.5%200%200%200-.5.5v9a.5.5%200%200%200%201%200v-9a.5.5%200%200%200-.5-.5Zm5%200a.5.5%200%200%200-.5.5v9a.5.5%200%200%200%201%200v-9a.5.5%200%200%200-.5-.5Z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E'
        Sbtn.setAttribute('class','Slove');
        Sbtn.addEventListener('click',()=>{

            SdeleteItems(el.id)

        })
        let move_btn=document.createElement('button');
        move_btn.innerText=' MOVE TO BAG';
        move_btn.setAttribute('class','Smove');
        move_btn.addEventListener('click',()=>{
            SmoveItens(el)
        })


        Sdiv.append(bun,Sbtn)
        div.append(img, heading, Sdiv,move_btn)
        SloveData.append(div)
    })
}


appendSloveData()

///delete function 
const SdeleteItems=(id)=>{
    let ch= JSON.parse(localStorage.getItem('loove')) || [];
    ch=ch.filter((el)=>{
        return el.id !==id;
    })
    localStorage.setItem('loove',JSON.stringify(ch))

    appendSloveData()


}
// to add the items in the bag
const  SmoveItens=(el)=>{
    let data= JSON.parse(localStorage.getItem('Sremove')) || [];
    data.push(el);
    localStorage.setItem('Sremove',JSON.stringify(data))
    CoutItems()
   
}


function CoutItems(){
    let data= JSON.parse(localStorage.getItem('Sremove')) || [];
    let Scount=document.getElementById('Scount');
    Scount.innerHTML=data.length;
    
   localStorage.setItem('count',data.length)
   addprice()
}

function addprice(){
    let data= JSON.parse(localStorage.getItem('count'))
   let Sperice=data*30;
   localStorage.setItem('price',Sperice)

}




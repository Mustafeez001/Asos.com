import navbar from "../components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();

let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    Submit()
})
const Submit=()=>{
    let name= document.getElementById('name').value
    let email= document.getElementById('email').value
    let mobile= document.getElementById('mobile').value
    let username= document.getElementById('username').value
    let password= document.getElementById('password').value
    let des= document.getElementById('des').value
    
    let obj={
        name,
        email,
        mobile,
        username,
        password,
        des
    }
    if(obj.name !='' && obj.email !=='' && obj.username !='' && obj.password !==''){
        alert('You have Succesfully Submitted')
        let data=JSON.parse(localStorage.getItem('sign')) || [];
        data.push(obj);
        localStorage.setItem('sign',JSON.stringify(data))
    }else{
        alert('Please Fill all the information ')
    }

   
    
     document.getElementById('name').value=null
        document.getElementById('email').value=null
     document.getElementById('mobile').value=null
    document.getElementById('username').value=null
     document.getElementById('password').value=null
    document.getElementById('des').value=null
}



function userDetailsAppend(){
    
let data=JSON.parse(localStorage.getItem('sign')) || [];
    let tbody=document.getElementById('appendAddress');
    tbody.innerHTML=null;
    data.forEach(element => {
        let div=document.createElement('div');
        div.setAttribute('class','Saddress')
        let house=document.createElement('p')
        house.innerText=`House No: ${element.username}`;

        let name=document.createElement('p')
        name.innerText=`Name:${element.name}`;
        
        let email=document.createElement('p')
        email.innerText=`Email:${element.email}`;
      
        let mobile=document.createElement('p')
        mobile.innerText=`Mobile:${element.mobile}`;

        
        let pin=document.createElement('p')
        pin.innerText=`Pin:${element.password}`;
        let address=document.createElement('p')
        address.innerText=`Address: ${element.des}`;

        let div_btn=document.createElement('div');
        div_btn.setAttribute('class','Sdiv_btn')

        let change_btn=document.createElement('button');
        change_btn.innerText='Change'
        let placed_btn=document.createElement('button');
        placed_btn.innerText='Confrim';
    placed_btn.addEventListener('click',()=>{
        window.location.href='payment.html'

    })
        div_btn.append(change_btn,placed_btn)

        div.append(house,name,email,mobile,pin,address,div_btn)
        tbody.append(div)
    });
}
userDetailsAppend()


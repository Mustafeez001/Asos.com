import navbar from "../components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();

let Splace_order=document.getElementById('Splace_order')
Splace_order.addEventListener('click',()=>{
    placeOrder()
})



function placeOrder(){
    let card_number=document.getElementById('card_number').value ;
let Smonth=document.getElementById('Smonth').value;
let Syear=document.getElementById("Syear").value;
let card_name=document.getElementById('card_name').value;
let ccv=document.getElementById('ccv').value;
let Sobj={
    card_number,Smonth,Syear,card_name,ccv
}

if(Sobj.card_number !='' && Sobj.Smonth !=='' && Sobj.Syear !='' && Sobj.card_name !=='' && Sobj.ccv !==''){
   // alert('Your address Details is Correct')
   SumbitSData()
    let order_data=JSON.parse(localStorage.getItem('order'))|| [];
    order_data.push(Sobj);
    localStorage.setItem('order',JSON.stringify(order_data))
}else{
    alert('Please Fill all the information ')
}



 document.getElementById('card_number').value=null
 document.getElementById('Smonth').value=null
 document.getElementById('Syear').value=null
 document.getElementById('card_name').value=null
 document.getElementById('ccv').value=null

}






function SumbitSData(){
    setTimeout(function(){
       alert('Your order is accepted ')
   
    },0)
    setTimeout(function(){
       alert('Your order is being Packed  ')
   
    },500)
    setTimeout(function(){
       alert('Your order is in transit  ')
   
    },1000)
    setTimeout(function(){
       alert('Your order is out for delivery ')
   
    },1000)
    setTimeout(function(){
       alert('Order delivered ')
   
    },1000)
   }
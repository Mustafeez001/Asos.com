

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
        let qty_btn=document.createElement('select');
        
       
      

        let Sdiv=document.createElement('div');
        Sdiv.setAttribute('class','SDiv')
        Sdiv.append(bun,heading,qty_btn);
        div.append(div_img,Sdiv)
        SbagData.append(div)

      
        
    });

}
appendBagData()
import navbar from "../components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()

import footer from "../components/footer.js";
let foot=document.getElementById("footer");
foot.innerHTML=footer();


const APIKIY = `sjYjaQYJg7twCbi4Lj3gr51ujbvUxshEKI3HsvYG5H4`

let gallery = document.getElementById("Scontainer") //adich


const data = async () => {
    try {
        let searchParam = document.getElementById("query").value;
        let res = await fetch(`https://api.unsplash.com/search/photos?client_id=${APIKIY}&query=${searchParam}&per_page=20`)
        let data = await res.json()
        // console.log(data.results);
        let final_data = data.results
        // console.log(final_data);
        display(final_data)
    } catch (error) {
        console.log(error);
    }
}

const display = (data) => {
    gallery.innerHTML = null;
    data.forEach((el) => {
        console.log('el',el)
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
        Sbtn.src='data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h48v48H0z%22%2F%3E%3Cpath%20d%3D%22m24%2042.7-2.9-2.63C10.8%2030.72%204%2024.55%204%2017%204%2010.83%208.83%206%2015%206c3.48%200%206.82%201.62%209%204.17C26.18%207.62%2029.52%206%2033%206c6.17%200%2011%204.83%2011%2011%200%207.55-6.8%2013.72-17.1%2023.07L24%2042.7z%22%2F%3E%3C%2Fsvg%3E'
        Sbtn.setAttribute('class','Slove');
        Sbtn.addEventListener('click',()=>{

            SaveItems(el)

        })
        // const price= document.createElement("p")
        // heading.innerText="price is --";

        // heading.setAttribute("class","Tpropri");


        Sdiv.append(bun,Sbtn)
        div.append(img, heading, Sdiv)
        gallery.append(div)
    });
}

let buttonSearch = document.getElementById("Tsearch");
buttonSearch.addEventListener("click", function () {
    display  ()
})


const SaveItems=(data)=>{

    let ch= JSON.parse(localStorage.getItem('loove')) || [];
    ch.push(data);
    localStorage.setItem('loove',JSON.stringify(ch))

}


//  let query=document.getElementById('Tsearch');
//     query.addEventListener('click',()=>{
//         SearchItems()

//     })

//     const SearchItems=()=>{
//         window.location.href='API.html'

//      }
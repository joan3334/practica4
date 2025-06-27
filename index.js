document.addEventListener("DOMContentLoaded", ()=>{
   const btn= document.getElementById("btn");
   const fm= document.getElementById("fm");
   const na= document.getElementById("na")
   
const body = document.getElementsByTagName("body");
const imagenes =[
  "../assets/img3.webp",
  "../assets/img4.jpg",
  "../assets/img5.webp",
  "../assets/img6.jpeg",
  "../assets/img7.jpeg"
]

   const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti y todo será posible.",
    "Haz de cada día tu obra maestra.",
    "No cuentes los días, haz que los días cuenten.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario."
   ]
   const autores = [
    "1Robert Collier",
      "2Robert Collier",
        "3Robert Collier",
          "4Robert Collier",
            "5Robert Collier"
   ]
   fm.textContent=frases[0];
  na.textContent=autores[0];
   btn.addEventListener("click", ()=>{
    var num = Math.floor(Math.random() * 5);
    console.log(num);
    fm.textContent=frases[num];
    na.textContent=autores[num];
    body[0].setAttribute("style","backgraund-image: url("+imagenes")")
   })
});
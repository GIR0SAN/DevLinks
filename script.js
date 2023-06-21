function toggleMode(){
  const html= document.documentElement
   html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  
   if(html.classList.contains('light')){
    img.setAttribute("src", "./images/giro-cartoon.png") 
        img.setAttribute("alt", "cartoon do Giro desesperado") 


  } else {
    img.setAttribute("src", "./images/Mask group.png") 
        img.setAttribute("alt", "Foto do Gilson olhando pra frente") 

  }

}
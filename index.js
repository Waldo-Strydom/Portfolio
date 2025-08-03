const scrollFun = (id)=>{
  let div = ""
switch(id){
  case "bioListItem":
      div = "bioDiv";
      break;
  case "techWorkListItem":
    div = "techWorkDiv";
      break;
  case "techListItem":
    div = "technologiesDiv"
      break;
  case "projectsListItem":
    div = "projectsDiv"
      break;
  case "educationListItem":
    div = "educationDiv"
    break;
  case "otherWorkListItem":
    div = "OtherworkDiv" 
    break;
  case "contactListItem":
    div = "contactDiv";
    break; 
}

closeNavFun()
let divElement = document.getElementById(`${div}`)
divElement.scrollIntoView({behavior: "smooth"})

}

const closeNavFun = ()=>{
  navDiv.classList.replace("openNavDiv", "closeNavDiv")
}

const navDiv = document.getElementById("navList")

const openNavBtn = document.getElementById("navOpenBtn")
openNavBtn.addEventListener("click", ()=>{
  if(navDiv.classList.contains("closeNavDiv")){
    navDiv.classList.replace("closeNavDiv", "openNavDiv")
  }else{
    navDiv.classList.add("openNavDiv")
  }
  
})

const closeNavBtn = document.getElementById("navCloseBtn")
closeNavBtn.addEventListener("click", closeNavFun)

const navDivScroll = document.querySelectorAll(".navDivClass")

const navListItems = document.querySelectorAll(".navListItem")
navListItems.forEach((e)=>{
  e.addEventListener("click", ()=>{
    scrollFun(e.id)
  } )
})
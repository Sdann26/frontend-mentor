const sectionShare = document.getElementById("section-share")
const tooltip = document.getElementById("tooltip")
const [userAvatar, userInfo, textShare, iconsSocial, bShare ] = Array.from(sectionShare.children)

let openShare = false

const showShare = ()=>{
  let windowWidth = window.innerWidth;
  if (windowWidth < 768){
    if(openShare===false){
      userAvatar.classList.replace("block", "hidden")
      userInfo.classList.replace("flex", "hidden")
      textShare.classList.replace("hidden", "inline")
      iconsSocial.classList.replace("hidden", "flex")
      sectionShare.classList.add("bg-Very-Dark-Grayish-Blue")
      bShare.classList.replace("bg-Light-Grayish-Blue", "bg-Desaturated-Dark-Blue")
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#ECF2F8')
    }
    else{
      userAvatar.classList.replace("hidden", "block")
      userInfo.classList.replace("hidden", "flex")
      textShare.classList.replace("inline", "hidden")
      iconsSocial.classList.replace("flex", "hidden")
      sectionShare.classList.remove("bg-Very-Dark-Grayish-Blue")
      bShare.classList.replace("bg-Desaturated-Dark-Blue", "bg-Light-Grayish-Blue")
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#6E8098')
    }
    openShare = !openShare
  }
  else{
    if(openShare===false){
      tooltip.classList.replace("md:hidden", "md:flex")
      bShare.classList.replace("bg-Light-Grayish-Blue", "bg-Desaturated-Dark-Blue")
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#ECF2F8')
    }
    else{
      tooltip.classList.replace("md:flex", "md:hidden")
      bShare.classList.replace("bg-Desaturated-Dark-Blue", "bg-Light-Grayish-Blue")
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#6E8098')
    }
    openShare = !openShare
  }
}

// Events
bShare.addEventListener("click", showShare)

window.addEventListener('resize',()=>{ 
  if(window.innerWidth >= 730 && window.innerWidth <= 800 && bShare.classList.contains("bg-Desaturated-Dark-Blue")){
    showShare()
  }
});
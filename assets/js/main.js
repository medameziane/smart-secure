let servicesSection = document.querySelector(".services-section")
let projectsSection = document.querySelector(".projects-section")
let membersSection = document.querySelector(".members-section")
let contactSection = document.querySelector(".contact-section")
let aboutSection = document.querySelector(".about-section")
let reasonSection = document.querySelector(".reasons-section")
window.addEventListener("scroll",()=>{
  
  let windowHeight = window.innerHeight


  // Start services
  if(servicesSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".services-title").classList.add("active")
    document.querySelector(".services-items").classList.add("active")
  }else{
    document.querySelector(".services-title").classList.remove("active")
    document.querySelector(".services-items").classList.remove("active")
  }

  // Start projects
  if(projectsSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".projects-title").classList.add("active")
    document.querySelector(".projects-items").classList.add("active")
  }else{
    document.querySelector(".projects-title").classList.remove("active")
    document.querySelector(".projects-items").classList.remove("active")
  }

  // Start members
  if(membersSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".members-title").classList.add("active")
    document.querySelector(".members-items").classList.add("active")
  }else{
    document.querySelector(".members-title").classList.remove("active")
    document.querySelector(".members-items").classList.remove("active")
  }

  // Start about
  if(aboutSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".about-image").classList.add("active")
    document.querySelector(".about-content").classList.add("active")
  }else{
    document.querySelector(".about-image").classList.remove("active")
    document.querySelector(".about-content").classList.remove("active")
  }

  // Start reason
  if(reasonSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".reason-image").classList.add("active")
    document.querySelector(".reason-content").classList.add("active")
  }else{
    document.querySelector(".reason-image").classList.remove("active")
    document.querySelector(".reason-content").classList.remove("active")
  }

  // Start contact
  if(contactSection.getBoundingClientRect().top <= windowHeight - 150 ){
    document.querySelector(".contact-image").classList.add("active")
    document.querySelector(".contact-form").classList.add("active")
  }else{
    document.querySelector(".contact-image").classList.remove("active")
    document.querySelector(".contact-form").classList.remove("active")
  }

})
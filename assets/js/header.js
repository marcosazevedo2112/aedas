(()=>{
  let hamburger = document.querySelector('.hamb');
  let menu = document.querySelector('.menu');
  
  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });
})();
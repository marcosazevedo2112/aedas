(()=>{
  let map = document.querySelector("#map");
  let pinExemplo = document.querySelector(".pin-card");
  let fecharBtn = document.querySelector(".pin-card-close");
  if(pinExemplo != undefined && fecharBtn != undefined){
    map.addEventListener("click",()=>{
      pinExemplo.classList.toggle("active");
    });
    fecharBtn.addEventListener("click", ()=>{
      pinExemplo.classList.toggle("active");
    });
  }else{
    console.error("Pin ou botão de fechar o pin não existem na pagina");
  }

})()
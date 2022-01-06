menu();
severidade();
municipio();
filtro();

function menu(){
  let hamburgerEl = document.querySelector('.hamb');
  let menuEl = document.querySelector('.menu-mobile');

  hamburgerEl.addEventListener("click", ()=>{
    hamburgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
  });
}

function severidade(){
  let actSeveridadeEl = document.querySelectorAll('.act-severidade');
  let severidadeContainerEl = document.querySelector('.severidade');

  actSeveridadeEl.forEach(element => {
    element.addEventListener("click", ()=>{
      severidadeContainerEl.classList.toggle("active");
    });
  })
}

function municipio(){
  let actMunicipioEl = document.querySelectorAll('.act-municipio');
  let municipioContainerEl = document.querySelector('.municipio');
  let selecionaTodosEl = document.querySelector('.switch input');
  let municipiosCheckEl = document.getElementsByName("municipio-input");

  actMunicipioEl.forEach(element => {
    element.addEventListener("click", ()=>{
      municipioContainerEl.classList.toggle("active");
    });
  });

  selecionaTodosEl.addEventListener("change", ()=>{
    if(selecionaTodosEl.checked){
      municipiosCheckEl.forEach(element => {
        element.checked = true;
      });
    }else{
      municipiosCheckEl.forEach(element => {
        element.checked = false;
      });
    }
  });
}

function filtro(){

  let actFiltroEl = document.querySelectorAll('.act-filtro');
  let filtroContainerEl = document.querySelector('.filtro');
  let categoriasInputEl = document.getElementsByName('categorias-input');
  let tempoInputEl = document.getElementsByName('tempo-input');
  let selecionaTodosEl = document.querySelector("#filtro-seleciona-todos");

  actFiltroEl.forEach(element => {
    element.addEventListener("click", ()=>{
      filtroContainerEl.classList.toggle("active");
    });
  });

  selecionaTodosEl.addEventListener("change", ()=>{
    if(selecionaTodosEl.checked){
      categoriasInputEl.forEach(element => {
        element.checked = true;
      });
      tempoInputEl.forEach(element => {
        element.checked = true;
      });
    }else{
      categoriasInputEl.forEach(element => {
        element.checked = false;
      });
      tempoInputEl.forEach(element => {
        element.checked = false;
      });
    }
  });
}
(()=>{
perguntas();
})()

function perguntas(){
  let perguntasEl = document.querySelectorAll('.pergunta-box');
  perguntasEl.forEach(pergunta => {
    pergunta.children[0].addEventListener('click', function(){
      pergunta.classList.toggle('active');
    })
  });
}
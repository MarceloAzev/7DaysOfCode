

    
//   alert('Olá '+ pergunta1.value + ' você tem ' + pergunta2.value + ' anos e já está aprendendo '+ pergunta3.value); 

// button.onclick = "window.location.href = 'http://pt.stackoverflow.com'"

var pergunta1 = document.querySelector("#pergunta1");
var pergunta2 = document.querySelector("#pergunta2");
var pergunta3 = document.querySelector("#pergunta3");

var botao = document.querySelector("#botao");

var botao1 = document.querySelector('#escolha');
var botao2 = document.querySelector('#escolha1');

botao.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#formulario");
    var nome = pergunta1.value;
    var idade = pergunta2.value;
    var linguagemProgramacao = pergunta3.value;
    var texto =  'Olá '+ pergunta1.value + ' você tem ' + pergunta2.value + ' anos e já está aprendendo '+ pergunta3.value;
    var apresentacaoTexto = document.createElement("p");
    apresentacaoTexto.setAttribute("class", "texto");

    //Definindo o pai do elemento criado.
     form.appendChild(apresentacaoTexto);

    apresentacaoTexto.textContent = texto;
    document.getElementById("box2").style.display = ''; // hide

    var paragrafo  = document.getElementById("PerguntaNova").innerHTML;
    paragrafo = paragrafo +linguagemProgramacao+ '?';
        
    document.getElementById("PerguntaNova").innerHTML = paragrafo;
  
 });

 botao1.addEventListener("click",function(event){
    event.preventDefault();
    var escolha = botao1.value
    console.log(escolha)
    if(escolha == 'sim'){
        document.getElementById("sim").style.display = ''; // hide
        document.getElementById("nao").style.display = 'none'; // hide

    }
})
botao2.addEventListener("click",function(event){
    event.preventDefault();
    var escolha = botao2.value
    console.log(escolha)
    if(escolha == 'nao'){
        document.getElementById("sim").style.display = 'none'; // hide
        document.getElementById("nao").style.display = ''; // hide

    }
})




  

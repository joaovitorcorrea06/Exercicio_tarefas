var botaoAdicionar = document.getElementById ('adicionar');
var inputTarefa = document.getElementById('tarefa');
var botaoExcluir = document.getElementById ('excluir')

inputTarefa.onkeypress = function(evento){
    if (evento.key === 'Enter'){
        adicionar();
    }
};

botaoAdicionar.addEventListener('click', adicionar);

    
    function adicionar() {
            var tarefa = inputTarefa.value;
            if (tarefa !== ''){

                var li = document.createElement('li');
                li.innerText = tarefa;

                li.style.color = 'red';
                li.onclick = function(){
                    li.style.color= 'green';
                };
                li.ondblclick = function(){
                    li.style.color= 'red';
                };

                var botaoExcluir = document.createElement ('Button')
                botaoExcluir.onclick = function (){ 
                    li.appendChild (botaoExcluir)
                };

                var ol = document.getElementById ('tarefas');
                ol.appendChild(li);

                inputTarefa.value = "";
            }
        }

//insere no display o numero ou operador digitado
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//botao C de clean, limpa o display total
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//botao de retrocesso para limpar o ultimo numero digitado
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//funcao que faz o calculo
function calcular()
{
    //pega os dados preenchido
    var resultado = document.getElementById('resultado').innerHTML;

    //confirmado se a variavel tem algo 
    //Se houver algo em resultado, a função avalia essa expressão matemática 
    //usando eval(resultado), que calcula o resultado da expressão.
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    // Se a variável resultado estiver vazia 
    //(ou seja, se nada foi inserido na calculadora), a função exibe "Vazio!" na div 'resultado'.
    else{
        document.getElementById('resultado').innerHTML = "Err"
    }
}


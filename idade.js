function verificar(){

    var nasci = document.getElementById('nasc');
    var nasc = Number(nasci.value);
    var data = new Date();
    var ano = data.getFullYear();
    var res = document.getElementById('resultado');

   //res.innerHTML = `${nasc}`;

   if (nasci.value.length == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
   }else{
        var sexo = document.getElementsByName('sexo');
        var idade = ano - nasc;
        //res.innerHTML = idade
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'homem';
        } else {
            genero = 'mulher'
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${genero} e tem ${idade} anos`;

        if (idade >=0 && idade <12){

            img.setAttribute('src', `imagens/${genero}/crianca.png`);

        } else if (idade <21) {

            img.setAttribute('src', `imagens/${genero}/adolescente.png`);

        } else if (idade < 50){

            img.setAttribute('src', `imagens/${genero}/adulto.png`);

        }else {

            img.setAttribute('src', `imagens/${genero}/idoso.png`);

        }
        res.innerHTML+= '<br><br>'
        res.appendChild(img);

   }



}
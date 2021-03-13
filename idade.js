function verificar(){

    var nasci = document.getElementById('nasc');
    var nasc = Number(nasci.value);

    var res = document.getElementById('resultado');

    res.innerHTML = `${nasc}`;



}
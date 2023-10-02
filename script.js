
function converttemp(){
    let far = parseFloat(document.getElementById("temp").value)
    let cel = (far - 32) * 5/9;
    let mensagem = ''
    if(cel > 0 && cel <= 16){
        mensagem = '<p>Está frio, use agasalho!</p>'
    }else if (cel >= 16 && cel <= 25){
        mensagem = '<p>Está um dia agradavel, aproveite!</p>'
    }else if (cel >= 25 && cel <= 32){
        mensagem = '<p>Esta um dia quente, use protetor solar ao sair!</p>'
    }else if(cel >= 32){
        mensagem = '<p>Está muito quente hoje, evite exposição ao sol, use protetor!</p>'
    }else if(cel <= 0){
        mensagem = '<p>Hoje é um dia bem frio, evite locais abertos e agasalhe-se!</p>'
    }
    document.getElementById("res").innerHTML = 'A temperatura em Graus Celsius é ' +  cel.toFixed(1) + "Cº. " + mensagem;
}
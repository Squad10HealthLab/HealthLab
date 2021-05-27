function atribuirRisco(event){
    let setor = document.getElementById('setor');
    let cargo = document.getElementById('cargo');
    let funcao = document.getElementById('funcao');
    let unidade = document.getElementById('unidade');
    let classificao = document.getElementById('classificao');

    if(setor.value != "" && unidade.value != "" && cargo.value != "" && funcao.value != ""){
        classificao.textContent="QUÍMICO (02.01.000)";
    }
    else{
        classificao.textContent="";
    }
}
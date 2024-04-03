//---------------------------------------------------------------------
//Estudo de elementos HTML
//---------------------------------------------------------------------
const alementBtnAdd = document.getElementById('btnAdd');
alementBtnAdd.addEventListener('click', function () {

    window.alert('Me clicou, farei algo');

    let resposta = window.confirm("Vou retornar um valor boleano.\nClique OK!\npara prosseguir!");
    if (resposta) {

        window.alert("OK,vou fechar esta pagina!");

        //Fecha a aba corrente:
        close();        
    }

});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Limpar mensagens de erro anteriores
    emailError.textContent = '';
    passwordError.textContent = '';

    //Validação do e-mail:
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailPattern.test(emailInput.value);

    if (!emailValid) {
        emailError.textContent = 'Digite um e-mail válido.';
    }

    //Validação da senha:
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'A senha deve conter pelo menos 6 caracteres.\nInforme:123456';
    }

    // Simulação de autenticação - Aqui você pode verificar as credenciais com um servidor backend
    if (emailValid && passwordInput.value.length >= 6) {
        alert('Login realizado com sucesso!');

        // Aqui você pode redirecionar
    }

});


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
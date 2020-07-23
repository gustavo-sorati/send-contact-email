const button = document.querySelector('button');
const formulario = document.querySelector('#formulario');

function handleClick(event) { 
    // Desestrutura os dados dos inputs
    const fields = [...document.querySelectorAll('input'), ...document.querySelectorAll('textarea')]
    
    // Verifica se os campos do formulário estão nulos
    fields.forEach(field => {
        if(field.value === "") formulario.classList.add("validation-error");
    });

    // Seleciona o formulario que ocorreu um erro
    const formError = document.querySelector('.validation-error');
    if(formError){
        // Verifica se a animação `nono` terminou, se true remove o validation error do formulario
        formError.addEventListener('animationend', event => {
            if(event.animationName === "nono")
                formulario.classList.remove("validation-error");
        })
    } else {
        // Caso contrario ativa a animação
        formulario.classList.add('active');
    }
}

button.addEventListener('click', handleClick);

// Assim que animação down é ativada, ativa a classe overflow no body para não criar um scroll na página
formulario.addEventListener('animationstart', event => {
    if(event.animationName === "down")
        document.querySelector('body').style.overflow = "hidden";
})

// Assim que animação down é encerrada, retira a classe overflow do body para não existir interferência em outros elementos
formulario.addEventListener('animationend', (event) => {
    if(event.animationName === "down"){
        formulario.style.display = "none";
        document.querySelector('body').style.overflow = "hidden";
    }
});
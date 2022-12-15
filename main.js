$(document).ready(function() { // Colocamos pra funcionar nosso jQuery primeiro
    $('#carousel-images').slick({ // Depois pegamos nossa div onde estão as imagens 
        autoplay: true,          // E adicionamos o efeito do carousel com a função slick
    })                          // O autoplay é para que a função rode sozinha
    
    $('.hamburger-menu').click( () => {
        $('nav').slideToggle()
    })

    $('#tell').mask('(00) 00000-0000', {
        placeholder: "(00) 12345-1234"
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true // vai aplicar uma validação personalizada para o tipo email
            },
            tell: {
                required: true
            },
            mensage: {
                required: false
            },
            carInterest: {
                required: false
            }

        },
        messages: {
            name: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu E-mail',
            tell: 'Por favor, insira o seu telefone'
        },
        submitHandler: function(form) { // Caso de tudo certo, ele irá executar essa função
            console.log(form);
        },
        invalidHandler: function(e, validate) { // Caso de errado, ele irá executar essa função
            let invalidFields = validate.numberOfInvalids() // aqui eu estou pegando quantos campos estão incorretos e mostrando no log
            console.log(invalidFields);
        }
    })

    $('.cars-list button').click(function() {
        const destine = $('#contact')
        
        const carName = $(this).parent().find('h3').text() // aqui eu estou pegando o pai do botão (this), e procurando dentro dele o h3 e pegando o texto dele

        $('#car-interest').val(carName) // aqui eu estou indo no input e atribuindo o valor da const carName nele

        $('html').animate({
            scrollTop: destine.offset().top
        }, 1000)
        
        //aqui eu criei a animação de rolagem da pagina quando o botão dentro da cars-list for clicado
    })
})
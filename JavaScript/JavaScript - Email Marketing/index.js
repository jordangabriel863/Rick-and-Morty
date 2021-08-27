const criaEmail = () => {

    const body = document.querySelector('body')

    const divPrimaria = document.createElement('div')
    const nibo = document.createElement('div')
    const flexBackground = document.createElement('div')
    const backgroundYout = document.createElement('div')
    const backgroundText1 = document.createElement('div')
    const backgroundCountdown = document.createElement('div')
    const flexIntroducao = document.createElement('div')
    const flexAgenda = document.createElement('div')
    const flexAgendaLine = document.createElement('div')
    const flexAgendaText = document.createElement('div')
    const flexVantagens = document.createElement('div')
    const vantagensText1 = document.createElement('div')
    const vantagensButton = document.createElement('div')
    const vantagensDuracao = document.createElement('div')
    const flexFooter = document.createElement('div')
    const footerImg = document.createElement('div')

    divPrimaria.classList.add('flex')
    nibo.classList.add('flex__logo-nibo')
    flexBackground.classList.add('flex__background')
    backgroundYout.classList.add('flex__background-youtube')
    backgroundText1.classList.add('flex__background-text-1')
    backgroundCountdown.classList.add('flex__background-countdown')
    flexIntroducao.classList.add('flex__introducao')
    flexAgenda.classList.add('flex__agenda')
    flexAgendaLine.classList.add('flex_agenda-line')
    flexAgendaText.classList.add('flex_agenda-text')
    flexVantagens.classList.add('flex__vantagens')
    vantagensText1.classList.add('flex__vantagens-text1')
    vantagensButton.classList.add('flex__vantagens-button')
    vantagensDuracao.classList.add('flex__vantagens-duracao')
    flexFooter.classList.add('flex__footer')
    footerImg.classList.add('flex__footer-img')


    const niboImg = `
        <img class="flex__logo-nibo-img" src="img/logo-nibo.png"></img>
    `

    const youtBackground = `
        <img class="flex__background-youtube-img" src="img/badge-live-white-2@.png">
    `

    const text1Background = `
        <p><b>Muito desconto</b> e conteúdo de </p>
        <p><b>BPO Financeiro</b></p>
    `

    const countdownBackground = `
        <img class="flex__background-countdown-img" src="http://gen.sendtric.com/countdown/b7xi12723v">
    `



    const textItroducao = `
        <p>Olá, {{Contact.firstname}}. Tudo Bem?</p>
        <p>Para começar a Black Week BPO do Nibo, Eliandro Prado, sócio da OmegaPrice,
        Pablo Goulart, Head de Vendas do Nibo, e Gabriel Gaspar, CEO do Nibo, vão bater
        um papo ao vivo com dicas e estratégias para vender BPO Financeiro.
        </p>
 `

    const textAgenda = `
        <p><b>Já anota na agenda!</b></p>
        <p>A live vai acontecer no dia <b>23/11</b> (segunda-feira) às <b>17h (horário de Brasília)</b></p>
 `

    const text1Vantagens = `
        <p>Confira o que vai rolar:</p>
        <p><img class="flex__vantagens-verify" src="img/check-yellow.png">Dicas de Eliandro Prado sobre como vender BPO Financeiro e aumentar as vendas em datas comemorativas, como Black Fryday;</p>
        <p><img class="flex__vantagens-verify" src="img/check-yellow.png">Estratégias de vendas com Pablo Goulart;</p>
        <p><img class="flex__vantagens-verify" src="img/check-yellow.png">Ofertas e descontos exclusivos para os participantes da live.</p>
`

    const buttonvantagens = `
        <button><b>Quero Participar</b></button>
    `

    const duracaoVantagens = `
        <p><b>Vai ser 1 hora de muito conteúdo e ofertas surpresas exclusivas.</b></p>
        <p>Te aguardamos!</p>
    `

    const imgFooter = `
        <img class="flex__footer-icone" src="img/icone_blog.png">
        <img class="flex__footer-icone" src="img/icone_facebook.png">
        <img class="flex__footer-icone" src="img/icone_youtube.png">
        <img class="flex__footer-icone" src="img/icone_instagram.png">
    `

    nibo.innerHTML = niboImg
    backgroundYout.innerHTML = youtBackground
    backgroundText1.innerHTML = text1Background
    backgroundCountdown.innerHTML = countdownBackground
    flexIntroducao.innerHTML = textItroducao
    flexAgendaText.innerHTML = textAgenda
    vantagensText1.innerHTML = text1Vantagens
    vantagensButton.innerHTML = buttonvantagens
    vantagensDuracao.innerHTML = duracaoVantagens
    footerImg.innerHTML = imgFooter






    body.appendChild(divPrimaria)
    divPrimaria.appendChild(nibo)
    divPrimaria.appendChild(flexBackground)
    divPrimaria.appendChild(flexIntroducao)
    divPrimaria.appendChild(flexAgenda)
    divPrimaria.appendChild(flexVantagens)
    divPrimaria.appendChild(flexFooter)
    flexBackground.appendChild(backgroundYout)
    flexBackground.appendChild(backgroundText1)
    flexBackground.appendChild(backgroundCountdown)
    flexAgenda.appendChild(flexAgendaLine)
    flexAgendaLine.appendChild(flexAgendaText)
    flexVantagens.appendChild(vantagensText1)
    flexVantagens.appendChild(vantagensButton)
    flexVantagens.appendChild(vantagensDuracao)
    flexFooter.appendChild(footerImg)


}
criaEmail()
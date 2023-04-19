function global() {
    const form = document.querySelector('.formulario')

    const returnAnos = document.querySelector('.resultadoAno')
    const returnMeses = document.querySelector('.resultadoMeses')
    const returnDias = document.querySelector('.resultadoDias')

    const labelDia = document.querySelector('#labelDia')
    const labelMes = document.querySelector('#labelMes')
    const labelAno = document.querySelector('#labelAno')

    const classDiaInput = document.querySelector('#iDia')
    const classMesInput = document.querySelector('#iMes')
    const classAnoInput = document.querySelector('#iAno')

    const paragErro = document.querySelector('.erro')


    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const diaInput = document.querySelector('#iDia')
        const mesInput = document.querySelector('#iMes')
        const anoInput = document.querySelector('#iAno')
        const diaUsuario = Number(diaInput.value)
        const mesUsuario = Number(mesInput.value)
        const anoUsuario = Number(anoInput.value)
        const dataUsuario = [diaUsuario, mesUsuario, anoUsuario]
        const dataAtual = criaDataAtual()

        switch (mesUsuario) {
            case 1, 3, 5, 6, 7, 8, 10, 12: //meses final 31
                console.log('mes 31')
                break
            case 2: // fevereiro final 28
                if (diaUsuario > 28) {

                } else {
                    console.log('mes 28')
                }
                break
            case 4, 6, 9, 11: // meses final 30
                if (diaUsuario > 30) {

                } else {
                console.log('mes 30')
                }
                break
        }

        // Anos

        let diffAnos = dataAtual[2] - anoUsuario

        if (mesUsuario <= dataAtual[1]) {
            returnAnos.innerHTML = diffAnos
        } else {
            diffAnos--
            returnAnos.innerHTML = diffAnos
        }

        // Meses

        let diffMeses = dataAtual[1] - mesUsuario // valor negativo

        diffMeses = Math.abs(diffMeses) // valor positivo

        diffMeses = 12 - diffMeses

        switch (diffMeses) {
            case 12:
                diffMeses = 0
                break
        }

        returnMeses.innerHTML = diffMeses

        // Dias

        let diffDias = dataAtual[0] - diaUsuario

        switch (mesUsuario) {
            case 1, 3, 5, 6, 7, 8, 10, 12:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 2:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 28 - diffDias
                    returnDias.innerHTML = diffDias
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 4, 6, 9, 11:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 30 - diffDias
                    returnDias.innerHTML = diffDias
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
        }
    })

    function enviouForm() {

    }

    function criaDataAtual() {
        const data = new Date()
        const diaAtual = data.getDate()
        const mesAtual = data.getMonth() + 1
        const anoAtual = data.getFullYear()
        const dataAtual = [diaAtual, mesAtual, anoAtual]
        return dataAtual
    }

}
global()
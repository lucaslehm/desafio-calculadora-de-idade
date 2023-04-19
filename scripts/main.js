function global() {
    const form = document.querySelector('.formulario')

    const returnAnos = document.querySelector('.resultadoAno')
    const returnMeses = document.querySelector('.resultadoMeses')
    const returnDias = document.querySelector('.resultadoDias')

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
            case 1:
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
                case 3:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
        }
    })

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
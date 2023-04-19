function escopoGlobal() {
    const erro = document.querySelector('.erro')
    const form = document.querySelector('.formulario')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const inputDia = document.querySelector('#iDia')
        const diaUsuario = Number(inputDia.value)
        const inputMes = document.querySelector('#iMes')
        let mesUsuario = Number(inputMes.value - 1)
        const inputAno = document.querySelector('#iAno')
        const anoUsuario = Number(inputAno.value)
        const dataUsuario = criaDataUsuario(anoUsuario, mesUsuario, diaUsuario)

        switch (mesUsuario + 1) {
            case 2:
                if (diaUsuario > 28) {
                    erro.innerHTML = `insira uma data válida`
                }
            break
            case 4:
                if (diaUsuario > 30) {
                    erro.innerHTML = `insira uma data válida`
                }
            break
            case 6:
                if (diaUsuario > 30) {
                    erro.innerHTML = `insira uma data válida`
                }
            break
            case 9:
                if (diaUsuario > 30) {
                    erro.innerHTML = `insira uma data válida`
                }
            break
            case 11:
                if (diaUsuario > 30) {
                    erro.innerHTML = `insira uma data válida`
                }
            break
        }

        // primeiro resultado é simples, 1 ano menos o outro
        const anoRes = document.querySelector('.resultadoAno')
        const dataAtual = criarData()
        const anoAtual = dataAtual[2]
        let mesAtual = dataAtual[1]
        const diaAtual = dataAtual[0]

        mesAtual--

        let anoTexto = Number(anoAtual - anoUsuario)

        if (mesUsuario > mesAtual) {
            anoTexto--
        } else if (diaUsuario > diaAtual) {
            anoTexto--
        }
        anoRes.innerHTML = anoTexto

        // o segundo resultado é a quantidade de meses que eu vivi caso eu ainda não tenha feito aniversario

        const mesRes = document.querySelector('.resultadoMeses')

        mesAtual++
        mesUsuario++

        let mesesVividos = (mesUsuario - mesAtual) - 12
        mesesVividos = Math.abs(mesesVividos)

        switch (mesesVividos) {
            case 12:
                mesesVividos = '00'
                break
            case 13:
                mesesVividos = 0
                mesesVividos++
                break
            case 14:
                mesesVividos = 1
                mesesVividos++
                break
            case 15:
                mesesVividos = 2
                mesesVividos++
                break
            case 16:
                mesesVividos = 3
                mesesVividos++
                break
            case 17:
                mesesVividos = 4
                mesesVividos++
                break
            case 18:
                mesesVividos = 5
                mesesVividos++
                break
            case 19:
                mesesVividos = 6
                mesesVividos++
                break
            case 20:
                mesesVividos = 7
                mesesVividos++
                break
            case 21:
                mesesVividos = 8
                mesesVividos++
                break
            case 22:
                mesesVividos = 9
                mesesVividos++
                break
            case 23:
                mesesVividos = 10
                mesesVividos++
                break
        }

        if (diaAtual < diaUsuario) {
            mesesVividos--
        }

        mesRes.innerHTML = mesesVividos

        // O ultimo são os dias.. a quantidade de dias que eu vivi dentro deste mes

        const diaRes = document.querySelector('.resultadoDias')
        let diasVividos = (diaUsuario - diaAtual)
        diasVividos = Math.abs(diasVividos)

        if (diaAtual < diaUsuario) {
            diasVividos = 30 - diasVividos
        }

        if (diasVividos === 0 ) {
            mesRes.innerHTML = mesesVividos
        }

        diaRes.innerHTML = diasVividos

    })

    function criaDataUsuario(anoUsuario, mesUsuario, diaUsuario) {
        const dataUsuario = new Date(anoUsuario, mesUsuario, diaUsuario)
        return dataUsuario
    }
    function criarData() {
        const data = new Date()
        const dia = data.getDate()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()
        const arrData = [dia, mes, ano]
        return arrData
    }
}
escopoGlobal()
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
            case 1:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 2:
                if (diaUsuario > 28) {
                    inserirClassesDeErro()
                    addMsgErro()
                    return
                } else {
                    removeMsgErro()
                    removerClassesdeErro()
                }
                break
            case 3:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 4:
                if (diaUsuario > 30) {
                    inserirClassesDeErro()
                    addMsgErro()
                    return
                } else {
                    removeMsgErro()
                    removerClassesdeErro()
                }
                break
            case 5:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 6:
                if (diaUsuario > 30) {
                    inserirClassesDeErro()
                    addMsgErro()
                    return
                } else {
                    removeMsgErro()
                    removerClassesdeErro()
                }
                break
            case 7:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 8:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 9:
                if (diaUsuario > 30) {
                    inserirClassesDeErro()
                    addMsgErro()
                    return
                } else {
                    removeMsgErro()
                    removerClassesdeErro()
                }
                break
            case 10:
                removeMsgErro()
                removerClassesdeErro()
                break
            case 11:
                if (diaUsuario > 30) {
                    inserirClassesDeErro()
                    addMsgErro()
                    return
                } else {
                    removeMsgErro()
                    removerClassesdeErro()
                }
                break
            case 12:
                removeMsgErro()
                removerClassesdeErro()
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
            case 1:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 3:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 5:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 6:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 7:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 8:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 10:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 12:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 31 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 2:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 28 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 4:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 30 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 6:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 30 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 9:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 30 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
            case 11:
                if (diffDias < 0) {
                    diffDias = Math.abs(diffDias)
                    diffDias = 30 - diffDias
                    returnDias.innerHTML = diffDias
                    diffMeses --
                    returnMeses.innerHTML = diffMeses
                } else {
                    returnDias.innerHTML = diffDias
                }
                break
        }
    })

    function inserirClassesDeErro() {
        labelDia.classList.add("labelErro")
        labelMes.classList.add("labelErro")
        labelAno.classList.add("labelErro")
        classAnoInput.classList.add("inputErro")
        classDiaInput.classList.add("inputErro")
        classMesInput.classList.add("inputErro")
    }

    function removerClassesdeErro() {
        labelDia.classList.remove("labelErro")
        labelMes.classList.remove("labelErro")
        labelAno.classList.remove("labelErro")
        classAnoInput.classList.remove("inputErro")
        classDiaInput.classList.remove("inputErro")
        classMesInput.classList.remove("inputErro")
    }

    function addMsgErro() {
        paragErro.innerHTML = 'Insira uma data válida'
    }

    function removeMsgErro() {
        paragErro.innerHTML = ''
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
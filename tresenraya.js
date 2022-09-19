const casilla = [[0, 0, 0], [0,0,0], [0,0,0]]
let turno = 1

const desactivarCasillas= () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            document.getElementById(`${i}_${j}`).className += " disabled" 
        }
    }
}

const hayEmpate = () => {
    for (let i=0; i < 3; i++) {
        for (let j=0; j < 3; j++) {
            if (casilla[i][j] == 0) return false
        }
    }
    return true
}

const verificarGanador = () => {
    if (casilla[0][0] != 0 && casilla[0][0] == casilla[0][1] && casilla[0][1] == casilla[0][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }
    if (casilla[1][0] != 0 && casilla[1][0] == casilla[1][1] && casilla[1][1] == casilla[1][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }
    if (casilla[2][0] != 0 && casilla[2][0] == casilla[2][1] && casilla[2][1] == casilla[2][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }

    if (casilla[0][0] != 0 && casilla[0][0] == casilla[1][0] && casilla[1][0] == casilla[2][0]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }
    if (casilla[0][1] != 0 && casilla[0][1] == casilla[1][1] && casilla[1][1] == casilla[2][1]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }
    if (casilla[0][2] != 0 && casilla[0][2] == casilla[1][2] && casilla[1][2] == casilla[2][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }

    if (casilla[0][0] != 0 && casilla[0][0] == casilla[1][1] && casilla[1][1] == casilla[2][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }
    if (casilla[0][2] != 0 && casilla[0][2] == casilla[1][1] && casilla[1][1] == casilla[0][2]) {
        console.log(`Gano jugador ${turno}`)
        desactivarCasillas()
        document.getElementById("titulo").innerText = turno == 1 ? "Ganador X" : "Ganador O"
        return
    }

    if (hayEmpate()) {
        desactivarCasillas()
        document.getElementById("titulo").innerText = "Empate"
    }
    
}

const elegirCasilla = (fila, col) => {
    if (casilla[fila][col] == 0) {
        casilla[fila][col] = turno
        if (turno == 1) {
            document.getElementById(`${fila}_${col}`).innerText = "X"
            verificarGanador()
            turno = 2
        }else {
            document.getElementById(`${fila}_${col}`).innerText = "O"
            verificarGanador()
            turno = 1
        }
    } 
}
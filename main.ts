// El inicio de la palabra con pausa de 1 segundo va el signo #
basic.pause(1000)
basic.showLeds(`
    . # . . .
    . # . . .
    # # . . .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
// Cada palabra inicial con una coma y pausado 1 segundo 
basic.showLeds(`
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
// Con pausa de 3 segundos por consonante empieza la letra G
basic.pause(3000)
basic.showLeds(`
    # # . . .
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
// Con pausa de 1 segundo escribe la vocal A
basic.pause(1000)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
// Con pausa de 3 segundos va la consonante T
basic.pause(3000)
basic.showLeds(`
    . # . . .
    . # . . .
    # . . . .
    # . . . .
    . . . . .
    `)
// Con pausa 5 segundos para la vocal O
basic.pause(5000)
basic.showLeds(`
    # . . . .
    . # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
// Con pausa de un segundo y para finalizar la palabra escribo el símbolo #
basic.pause(1000)
basic.showLeds(`
    . # . . .
    . # . . .
    # # . . .
    . . . . .
    . . . . .
    `)

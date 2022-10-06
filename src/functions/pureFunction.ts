// Funcao pura
// funcao em que o valor de retorno é determinado apenas por seus valores de entrada, sem efeitos colaterais

const PI = 3.14

// funcao impura - PI é um valor externo
export function circleAreaXX(radius) {
    return radius * radius * PI
}

export function circleArea(radius, pi) {
    return radius * radius * pi
}
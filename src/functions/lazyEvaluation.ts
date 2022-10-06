export function lazy(a) {

    // processamento pesado
    const endFunction = Date.now() + 2500
    while (Date.now() < endFunction) { }

    const value = Math.pow(a, 3)

    return function (b) {
        return value + b
    }
}
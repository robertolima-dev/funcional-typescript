export function calc(a) {
    return function (b) {
        return function (fn) {
            return fn(a, b)
        }
    }
}

export function sum3(a, b) {
    return a + b
}

export function subtract(a, b) {
    return a - b
}
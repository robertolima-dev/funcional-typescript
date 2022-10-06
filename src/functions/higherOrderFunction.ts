// funcoes que operam em outras funcoes, tomando-as como argumento ou retornando-as

export function execute(fn, ...params) {
    return fn(...params)
}

export function sum2(a, b, c, d, e) {
    return a + b + c + d + e
}

export function multi(a, b) {
    return a * b
}

export function myName(name, lastName) {
    return `Meu nome é ${name} ${lastName}`
}
export function composition(...fns) {
    return function (value) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, value)
    }
}

export function shoutOut(text) {
    return text.toUpperCase()
}

export function toEmphasize(text) {
    return `${text}!!!!`
}

export function space(text) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text.split('').join(' '))
        }, 3000)
    })
}
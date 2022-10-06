// passar os parametros de forma parcial

export function textWithSize(min) {
    return function (max) {
        return function (err) {
            return function (text) {
                //lazy evaluation
                const size = (text || '').trim().length

                if (size < min || size > max) {
                    throw err
                }
            }
        }
    }
}

export function applyValidation(fn) {
    return function (value) {
        try {
            fn(value)
        } catch (err) {
            return { error: err }
        }
    }
}
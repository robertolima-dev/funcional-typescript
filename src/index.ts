import { sumClousure } from "./functions/clousure"
import { composition, shoutOut, space, toEmphasize } from "./functions/composition"
import { applyValidation, textWithSize } from "./functions/curring"
import { execute, multi, myName, sum2 } from "./functions/higherOrderFunction"
import { changePeople, order, sum, sumArray } from "./functions/imutability"
import { lazy } from "./functions/lazyEvaluation"
import { circleArea, circleAreaXX } from "./functions/pureFunction"
import { calc, subtract, sum3 } from "./functions/returnFunction"


console.log('**************** imutabilidade ****************')
const numbers = Object.freeze([3, 2, 9, 6, 5, 8, 7, 4,])
const people = Object.freeze({
    name: 'Roberto',
    height: 1.75,
    city: 'São Paulo'
})

const orderNumbers = order(numbers)
console.log('variavel original =>', numbers)
console.log('resultado =>', orderNumbers)

const total = numbers.reduce(sum)
console.log('variavel original =>', numbers)
console.log('resultado =>', total)

const newTotal = sumArray(numbers)
console.log('variavel original =>', numbers)
console.log('resultado =>', newTotal)

const newPeople = changePeople(people)
console.log('variavel original =>', people)
console.log('resultado =>', newPeople)


console.log('**************** pure function ****************')
console.log(circleAreaXX(10))
console.log(circleArea(10, 3.14))
console.log(circleArea(10, 3.14))


console.log('**************** clousure ****************')
// essa variavel nao sera vista, mas sim dentro do escopo onde a funcao foi criada
const x = 200

console.log(sumClousure())


console.log('**************** higher order function ****************')
const result1 = execute(sum2, 5, 2, 8, 5, 4)
const result2 = execute(multi, 7, 9)
const apresentacao = execute(myName, 'Roberto', 'Lima')

console.log(result1)
console.log(result2)
console.log(apresentacao)


console.log('**************** curring ****************')
const p1 = {
    name: 'Caderno capa dura',
    price: 21.32,
    discount: 0.25
}

const p2 = {
    name: 'Caneta',
    price: 12.32,
    discount: 0.25
}

const forceDefaultSize = textWithSize(12)(255)
const errorInvalideName = forceDefaultSize('Nome do produto inválido')
const validateProductName = applyValidation(errorInvalideName)
console.log(validateProductName(p1.name))
console.log(validateProductName(p2.name))


console.log('**************** return ****************')
const result3 = calc(5)(6)(sum3)
const result4 = calc(8)(6)(subtract)

console.log(result3)
console.log(result4)


console.log('**************** lazy ****************')
// sem lazy
// console.time('#1')
// console.log(lazy(3)(100))
// console.log(lazy(3)(200))
// console.log(lazy(3)(300))
// console.timeEnd('#1')

// com lazy
console.time('#2')
const lazy3 = lazy(3)
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')


console.log('**************** composition ****************')
const lessExaggerated = composition(
    shoutOut,
    toEmphasize,
)

const exaggerate = composition(
    shoutOut,
    toEmphasize,
    space,
)

lessExaggerated('cuidado, chão molhado')
    .then(console.log)
exaggerate('para')
    .then(console.log)
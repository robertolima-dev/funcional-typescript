export function order(array) {
    return [...array].sort()
}

export const sum = (a, b) => a + b

// recursividade
export function sumArray(array, total = 0) {
    if (array.length === 0) {
        return total
    }
    return sumArray(array.slice(1), total + array[0])
}

// passagem por referencia
export function changePeople(people) {
    const newPeople = { ...people }
    newPeople.name = 'Joao'
    newPeople.height = 1.73
    newPeople.city = 'São José'
    return newPeople
}
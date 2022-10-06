// funcao que executa "referenciando" seu escopo lexico, mesmo sendo executada fora do escopo lexico

const x = 3

export function sumClousure() {
    return x + 3
}
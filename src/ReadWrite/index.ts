import { readFileSync, writeFileSync, createReadStream } from "fs";

//
export const readFile = (level: number, number: number) => {
    const path = 'in/level'+ level + '/level' + level + '_' + number + '.in'
    console.log('📖️: Reading File "' + path + '"')
    return readFileSync('in/level'+ level + '/level' + level + '_' + number + '.in', 'utf-8')
}

export const writeFile = (level: number, number: number, data: string) => {
    const path = 'in/level'+ level + '/level' + level + '_' + number + '.in'
    console.log('✏️: Writing File "' + path + '"')
    writeFileSync(path, data)
}

export const applyLine = (data: string, fct: (input: string) => string) => {
    return fct.apply(data)
}
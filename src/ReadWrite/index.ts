import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";

// Return file data
export const readFile = (level: number, number: number): string => {
    const path = 'in/level'+ level + '/level' + level + '_' + number + '.in'
    console.log('📖️: Reading File "' + path + '"')
    return readFileSync(path, 'utf-8')
}

// Return file data seperated by '\n'
export const readFileLines = (level: number, number: number): string[] => {
    const path = 'in/level'+ level + '/level' + level + '_' + number + '.in'
    console.log('📖️: Reading File "' + path + '"')
    return readFileSync(path, 'utf-8').split('\n')
}

// Write file to out/ directory, if folder does not exist a new one will be created
export const writeFile = (level: number, number: number, data: string) => {
    const path = 'out/level'+ level + '/level' + level + '_' + number + '.out'
    if(!existsSync('out/level' + level)) mkdirSync('out/level' + level)
    console.log('✏️: Writing File "' + path + '"')
    writeFileSync(path, data)
}
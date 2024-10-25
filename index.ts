import { readFile, writeFile, readFileLines } from './src/ReadWrite'

writeFile(1, 2, readFile(0, 1))
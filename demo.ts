import { extname } from 'path'

const vaiable = 1

interface Module {
    name: string
}

interface EmptyInterface {
}

class NodeModule {
    constructor() {
        return
    }

    version() {
        return '0.0.0'
    }
}

const func: Function = () => {
    // EMPTY
}

const objOrder = {
    func,
    A: () => void 0,
    NodeModule: () => void 0,
}

const objOrder2: {
    b: number,
    a: number,
    c: number,
} = {
    a: 2,
    b: 1,
    c: 3,
}

const templateString = `${objOrder}`

const classTwoExp = class {}

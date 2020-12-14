export interface Node {
    id: string,
    name: string,
    description: string,
    children?: Node[]
}

export interface RawNode {
    _id: string,
    name: string,
    description: string,
    parent: string,
    __v?: number
}
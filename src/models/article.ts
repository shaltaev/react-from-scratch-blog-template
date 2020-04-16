interface BlockHeader {
    type: 'header'
    data: {
        text: string
        level: 1 | 2 | 3 | 4 | 5 | 6
    }
}

interface BlockParagraph {
    type: 'paragraph'
    data: {
        text: string
    }
}

interface BlockList {
    type: 'list'
    data: {
        style: string
        items: string
    }
}

type Block = BlockHeader | BlockParagraph | BlockList

export interface Article {
    time: number
    title: string
    blocks: Block[]
    version: string
}

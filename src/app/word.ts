export class Word {
    constructor(
        public book: number,
        public chapter: number,
        public verse: number,
        public content: string,
        public tag: string[]
    ) { }
}

export class Article {


    constructor(
        public title: string,
        public link: string,
        public votes: number = 0,
    ) {
    }

    upVote(): void {
        this.votes++;
    }

    downVote(): void {
        this.votes--;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (e) {
            return null;
        }
    }
}

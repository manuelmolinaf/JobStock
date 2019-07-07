

export class Post {
    public constructor(public category: string, public company: string,
                       public description: string, public location: string,
                       public position: string, public type: string,
                       public url: string, public id?: string ) {}
}

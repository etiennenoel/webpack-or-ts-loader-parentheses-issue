const test = (condition: any) => {
    return condition;
}

export class Greeter {
    @test((o: { allo: any; target: any; }) => (o.allo && o.target) || (o.allo) )
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hi, ${this.name}!`);
    }
}
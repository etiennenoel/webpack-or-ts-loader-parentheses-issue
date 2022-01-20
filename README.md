Issue with Webpack - Parentheses in a decorator get removed
------------------------------------------------------------

In file `src/greeter.ts`, I have the following class and a decorator that accepts an anonymous function:

```
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
```

If you run `npm run build` and look in the generated file `dist/main.bundle.js`, you can see that the parentheses in the condition are removed:

**Expecting to see the following parentheses**
```
...
(o.allo && o.target) || (o.allo)
...
```

**Actual result**
```
...
e.allo&&e.target||e.allo
...
```

I believe it's a bug in webpack or in ts-loader (I'm not sure how to test who's at fault here) since when I run `tsc`, I obtain the proper output:

```
...
(o.allo && o.target) || (o.allo);
...
```
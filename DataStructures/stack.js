class Cislo 
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }

    getValue()
    {
        return this.value;
    }
    getNext()
    {
        return this.next;
    }
}

class Stack
{
    constructor()
    {
        this.first = null;
        this.size = 0;
    }

    push(v)
    {
        let n = new Cislo(v)
        let currentFirst = this.first;
        this.first = n;
        n.next = currentFirst
        this.size++;
    }

    pop()
    {
        if(this.first == null)
        {
            throw new Error("Kundovina je prazdna");
        }
        let value = this.first.value;
        this.first = this.first.next;
        this.size--;
        return value;
    }
    top()
    {
        if(this.size == 0)
        {
            throw new Error("Kundovina je prazdna");
        }
        return this.first.value;
    }

    numberOfElements()
    {
        return this.size;
    }

    toString()
    {
        let string = "";
        let current = this.first;
        for(let i = 0 ; i < this.size ; i++ )
        {
            string = string + current.value + " , "
            current = current.next;
        }
        return string;
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.numberOfElements());
console.log(s.toString());

console.log(s.top());

s.pop();
console.log(s.top());
console.log(s.toString());
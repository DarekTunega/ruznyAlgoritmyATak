class BinaryHeap
{
    constructor(maxElements)
    {
      this.array = new Array(maxElements + 1);
      this.size = 0;
    }

    insert(i)
    {
        this.size++;
        let index = this.size;
        
        while (index != 0 && i < this.array[index / 2])
        {
            this.array[index] = this.array[index/2];
            index = index/2;
        }
        this.array[index] = i;
    }

    getTop()
    {
        if(this.size == 0)
        {
            throw new Error("HALDA JE PRAZDNA BRASKO");
        }
        return this.array[1];
    }

    repairTop(bottom, topIndex)
    {
        let helper = this.array[topIndex];
        let successor = topIndex * 2;

        if(this.array[successor] > this.array[successor + 1] && successor < bottom)
        {
            successor++;
        }
        while (helper > this.array[successor] && successor <= bottom)
        {
            this.array[topIndex] = this.array[successor];
            topIndex = successor;
            successor = successor * 2; 
            if (this.array[successor] > this.array[successor + 1] && successor < bottom)
            {
                successor++;   
            } 
            this.array[topIndex] = helper;
        }
    }

    returnTop()
    {
        if(this.size <= 0)
        {
            throw new Error("HALDA JE PRAZDNA BRASKO");
        }
        let helper = this.array[1];
        this.array[1] = this.array[this.size];
        this.size--;
        this.repairTop(this.size, 1);
        return helper;
    }

    heapify()
    {
        let i = this.array.length / 2;
        for ( i ; i > 0 ; i--)
        {
            this.repairTop(this.size, i)
        }
    }

    getArray()
    {
        return this.array;
    }

    getSize()
    {
        return this.size;
    }

    toString()
    {
        return this.array.join(", ");
    }
}

let b = new BinaryHeap(5);
b.insert(3);
b.insert(2);
b.insert(1);
b.insert(4);
b.insert(5);
b.heapify();

console.log(b.getArray());
console.log(b.getTop());
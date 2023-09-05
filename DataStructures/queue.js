//uzel
class Node
{
    constructor(value)
    {
      this.value = value;
      this.next = null;
    }
  
    getValue()
    {
      return this.value;
    }
  
    getNext()
    {
      return this.next;
    }
  
    setNext(next)
    {
      this.next = next;
    }
  }
  
  //fronta
  class Queue
  {
    constructor()
    {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    addLast(i)
    {
      let n = new Node(i);
      if (this.size == 0) {
        this.first = n;
        this.last = n;
      } else {
        this.last.next = n;
        this.last = n;
      }
      this.size++;
    }
  
    removeFirst()
    {
      if (this.size == 0) {
        throw new Error("Fronta je prazdna");
      }
  
      let value = this.first.value;
      this.first = this.first.next;
      this.size--;
      return value;
    }
  
    getFirst()
    {
      if (this.size == 0) {
        throw new Error("Fronta je prazdna");
      }
      return this.first.value;
    }
  
    isEmpty()
    {
      return this.size == 0;
    }
  
    numberOfElements()
    {
      return this.size;
    }
  
    toString()
    {
      let string = "";
      let current = this.first;
      for (let i = 0; i < this.size; i++)
      {
        string = string + current.value + ", ";
        current = current.next;
      }
      return string;
    }
  }
  
  let q = new Queue();
  q.addLast(10);
  q.addLast(20);
  q.addLast(30);
  console.log(q.numberOfElements());
  console.log(q.toString());
  
  console.log(q.getFirst());
  
  q.removeFirst();
  console.log(q.getFirst());
  console.log(q.toString());
  
  console.log(q.isEmpty());
  q.removeFirst();
  q.removeFirst();
  console.log(q.isEmpty())
  
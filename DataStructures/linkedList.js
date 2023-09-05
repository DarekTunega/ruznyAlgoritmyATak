
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

  class LinkedList
  {
    constructor()
    {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    add(i)
    {
      let n = new Node(i);
      if (this.size == 0)
      {
        this.first = n;
        this.last = n;
      } else
      {
        this.last.next = n;
        this.last = n;
      }
      this.size++;
    }
  
    get(i) {
      if (i >= this.size)
      {
          throw new Error("Index vetsi nez pocet prvku v seznamu!");
      }
      if (i < 0)
      {
          throw new Error("Index mensi nez 0!");
      } 
          
      let current = this.first;
      for (let j = 0; j < i; j++)
      {
        current = current.next;
      }
      return current.value;
    }
  
    remove(i)
    {
      if (i >= this.size)
      {
          throw new Error("Index vetsi nez pocet prvku v seznamu!");
      }
      if (i < 0)
      {
        throw new Error("Index mensi nez 0!");
      }
  
      let element;
      if (i == 0)
      {
        element = this.first;
        this.first = this.first.next;
      } else
      {
        let current = this.first;
        for (let j = 0; j < i - 1; j++)
        {
          current = current.next;
        }
  
        element = current.next;
        current.next = current.next.next; 
        if (i == this.size - 1)
        {
          element = this.last;
          this.last = current;
        }
      }
      this.size--;
      return element;
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
  
  let ll = new LinkedList();
  ll.add(10);
  ll.add(20);
  ll.add(30);
  console.log(ll.numberOfElements());
  console.log(ll.toString());
  
  console.log(ll.get(1));
  
  let el = ll.remove(1);
  console.log(el.getValue());
  
  console.log(ll.get(1));
  console.log(ll.toString())

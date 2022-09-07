---
id: queue
title: Queue
sidebar_label: Queue
---

Queue is a special type of collection that stores the elements in FIFO style (First In First Out), exactly opposite of the Stack collection. It contains the elements in the order they were added. Tuval Framework includes generic Queue in Typescript and non-generic Queue in javascript.

## Queue Characteristics

* Queue is FIFO (First In First Out) collection.
* Queue can contain elements of the specified type. It provides compile-time type checking in Typescript and doesn't perform type checking in runtime.
* Elements can be added using the Enqueue() method. Cannot use array-initializer syntax.
* Elements can be retrieved using the Dequeue() and the Peek() methods. It does not support an indexer Get and Set methods

The following figure illustrates the Queue collection:
![Queue Image](../../../../static/img/queue.png "")

## Creating a Queue
You can create an object of the Queue by specifying a type parameter for the type of elements it can store. The following example creates and adds elements in the Queue< T > using the Enqueue() method. A Queue collection allows null (for reference types) and duplicate values.

```tsx
//Typescript
const callerIds: Queue<int> = new Queue<int>();
callerIds.Enqueue(1);
callerIds.Enqueue(2);
callerIds.Enqueue(3);
callerIds.Enqueue(4);

foreach(callerIds,(id)=>{
    Console.Write(id); //prints 1234
});
```

Queue Properties and Methods

| Property | Description                                       |
|----------|---------------------------------------------------|
| Count    | Returns the total count of elements in the Queue. |

| Method      | Description                                                                    |
|-------------|--------------------------------------------------------------------------------|
| Enqueue(T)  | Adds an item into the queue.                                                   |
| Dequeue     | Returns an item from the beginning of the queue and removes it from the queue. |
| Peek(T)     | Returns an first item from the queue without removing it.                      |
| Contains(T) | Checks whether an item is in the queue or not                                  |
| Clear()     | Removes all the items from the queue.                                          |

## Retrieve Elements from a Queue

The Dequeue() and the Peek() method is used to retrieve the first element in a queue collection. The Dequeue() removes and returns the first element from a queue because the queue stores elements in FIFO order. Calling the Dequeue() method on an empty queue will throw the InvalidOperation exception. So, always check that the total count of a queue is greater than zero before calling it.

```tsx
//Typescript
const strQ: Queue<string> = new Queue<string>();
strQ.Enqueue("H");
strQ.Enqueue("e");
strQ.Enqueue("l");
strQ.Enqueue("l");
strQ.Enqueue("o");

Console.WriteLine("Total elements: {0}", strQ.Count); //prints 5

while (strQ.Count > 0){
    Console.WriteLine(strQ.Dequeue()); //prints Hello
}

Console.WriteLine("Total elements: {0}", strQ.Count); //prints 0
```

The Peek() method always returns the first item from a queue collection without removing it from the queue. Calling the Peek() method on an empty queue will throw a run-time exception InvalidOperationException.

```tsx
const strQ:Queue<string> = new Queue<string>();
strQ.Enqueue("H");
strQ.Enqueue("e");
strQ.Enqueue("l");
strQ.Enqueue("l");
strQ.Enqueue("o");

Console.WriteLine("Total elements: {0}", strQ.Count); //prints 5

if(strQ.Count > 0){
    Console.WriteLine(strQ.Peek()); //prints H
    Console.WriteLine(strQ.Peek()); //prints H
}

Console.WriteLine("Total elements: {0}", strQ.Count); //prints 0
```

### Contains()

The Contains() method checks whether an item exists in a queue or not. It returns true if the specified item exists, otherwise returns false.

Contains() Signature:  Contains(obj: T):boolean;

```tsx
//Typescript
const callerIds: Queue<int> = new Queue<int>();
callerIds.Enqueue(1);
callerIds.Enqueue(2);
callerIds.Enqueue(3);
callerIds.Enqueue(4);

callerIds.Contains(2); //true
callerIds.Contains(10); //false
```
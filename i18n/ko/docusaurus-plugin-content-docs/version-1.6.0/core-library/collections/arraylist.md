---
id: arraylist
title: ArrayList
sidebar_label: ArrayList
---

[Constructors](#Constructors) | [Properties](#Properties) | [Methods](#Methods)

In Tuval Framework, the ArrayList is a non-generic type of List class.
An ArrayList can be used to add unknown data where you don't know the types and the size of the data.
## Create an ArrayList
The ArrayList class included in the Tuval Framework Collections. Create an object of the ArrayList using the new keyword.
###### Typescript
```tsx
const arlist:ArrayList = new ArrayList();
```
## Adding Elements in ArrayList
Use the Add() method or object initializer syntax to add elements in an ArrayList.

An ArrayList can contain multiple null, undefined and duplicate values.

```tsx
// adding elements using ArrayList.Add() method
const arlist1:ArrayList = new ArrayList();
arlist1.Add(1);
arlist1.Add("Bill");
arlist1.Add(" ");
arlist1.Add(true);
arlist1.Add(4.5);
arlist1.Add(null);

// adding elements using array initializer syntax
const arlist2:ArrayList = new ArrayList([2, "Steve", " ", true, 4.5, null]);
```
Use the AddRange(c:ICollection) method to add an entire Array, HashTable, SortedList, ArrayList, BitArray, Queue, and Stack in the ArrayList.

```tsx
const arlist1:ArrayList = new ArrayList();

const arlist2:ArrayList = new ArrayList([1, "Bill", " ", true, 4.5, null]);

const arr:int[] = [100, 200, 300, 400];

const myQ:Queue = new Queue();
myQ.Enqueue("Hello");
myQ.Enqueue("World!");

arlist1.AddRange(arlist2); //adding arraylist in arraylist
arlist1.AddRange(arr); //adding array in arraylist
arlist1.AddRange(myQ); //adding Queue in arraylist
```

## Accessing an ArrayList

The ArrayList class implements the IList interface. So, elements can be accessed using Get and Set methods. Index starts from zero and increases by one for each subsequent element.

In typescript, you can  explicit casting to the appropriate types, or use the any variable.

```tsx
const arlist:ArrayList = new ArrayList([1,"Bill",300,4.5]);

//Access individual item using indexer
const firstElement:int = arlist.Get(0); //returns 1 implicit type convertion in Typescript
const secondElement:string =  arlist.Get(1); //returns "Bill"

//update elements
arlist.Set(0, "Steve");
arlist.Set(1, 100);
```

## Iterate an ArrayList

The ArrayList implements the ICollection interface that supports iteration of the collection types. So, use the foreach methon in Tuval Framework and the for loop to iterate an ArrayList. The Count property of an ArrayList returns the total number of elements in an ArrayList.

```tsx
const arlist:ArrayList = new ArrayList([1,"Bill",300,4.5]);

foreach (arlist, (item: any)=>{
  Console.Write(item + ", "); //output: 1, Bill, 300, 4.5,
});

for(int i = 0 ; i < arlist.Count; i++){
    Console.Write(arlist.Get(i) + ", "); //output: 1, Bill, 300, 4.5
}
```

## Insert Elements in ArrayList

Use the Insert() method to insert an element at the specified index into an ArrayList.

Signature:  Insert( index:int, value: any):void in Typescript

```tsx
const arlist:ArrayList = new ArrayList([ 1,"Bill",300,4.5]);
arlist.Insert(1, "Second Item");

foreach (arlist,(val: any)=>{
    Console.WriteLine(val);
});
```

Use the InsertRange() method to insert a collection in an ArrayList at the specfied index.

Signature:  InsertRange( index:int,  c:ICollection): void

```tsx
const arlist1:ArrayList = new ArrayList([ 100, 200, 600]);

const arlist2:ArrayList = new ArrayList([ 300, 400, 500 ]);
arlist1.InsertRange(2, arlist2);

foreach(arlist1, (item: any)=>{
    Console.Write(item + ", "); //output: 100, 200, 300, 400, 500, 600,
});
```

## Remove Elements from ArrayList

Use the Remove(), RemoveAt(), or RemoveRange methods to remove elements from an ArrayList.

```tsx
const arList:ArrayList = new ArrayList([1,null,"Bill",300," ",4.5,300,]);

arList.Remove(null); //Removes first occurance of null
arList.RemoveAt(4); //Removes element at index 4
arList.RemoveRange(0, 2);//Removes two elements starting from 1st item (0 index)
```

## Check Element in ArrayList

Use the Contains() method to determine whether the specified element exists in the ArrayList or not. It returns true if exists otherwise returns false.

```tsx
import {ArrayList, Console} from '@tuval/core'

const arList:ArrayList = new ArrayList([ 1,"Bill",300,4.5,300]);

Console.WriteLine(arList.Contains(300)); // true
Console.WriteLine(arList.Contains("Bill")); // true
Console.WriteLine(arList.Contains(10)); // false
Console.WriteLine(arList.Contains("Steve")); // false
```

## Constructors<a name="Constructors"></a>
| Method                                          | Description                                                                                                                                                                            |
|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ArrayList()](#ArrayListContructor1)            | Initializes a new instance of the ArrayList class that is empty and has the default initial capacity.                                                                                  |
| [ArrayList(ICollection)](#ArrayListContructor2) | Initializes a new instance of the ArrayList class that contains elements copied from the specified collection and that has the same initial capacity as the number of elements copied. |
| [ArrayList(Int32)](#ArrayListContructor3)       | Initializes a new instance of the ArrayList class that is empty and has the specified initial capacity.                                                                                |

## Properties<a name="Properties"></a>
| Property                    | Description                                                         |
|-----------------------------|---------------------------------------------------------------------|
| [Capacity](#Capacity)       | Gets or sets the number of elements that the ArrayList can contain. |
| [Count](#Count)             | Gets the number of elements actually contained in the ArrayList.    |
| [IsFixedSize](#IsFixedSize) | Gets a value indicating whether the ArrayList has a fixed size.     |
| [IsReadOnly](#IsReadOnly)   | Gets a value indicating whether the ArrayList is read-only.         |

## Methods<a name="Methods"></a>
| Method                                                    | Description                                                                                                                                                                                                                |
|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Add(Any)](#Add)                                          | Adds an object to the end of the ArrayList.                                                                                                                                                                                |
| [AddRange(ICollection)](#AddRange)                        | Adds the elements of an ICollection to the end of the ArrayList.                                                                                                                                                           |
| [BinarySearch(Int32,Int32,Any,IComparer)](#BinarySearch1) | Searches a range of elements in the sorted ArrayList for an element using the specified comparer and returns the zero-based index of the element.                                                                          |
| [BinarySearch(Any)](#BinarySearch2)                       | Searches the entire sorted ArrayList for an element using the default comparer and returns the zero-based index of the element.                                                                                            |
| [BinarySearch(Any,IComparer)](#BinarySearch3)             | Searches the entire sorted ArrayList for an element using the specified comparer and returns the zero-based index of the element.                                                                                          |
| [Clear()](#Clear)                                         | Removes all elements from the ArrayList.                                                                                                                                                                                   |
| [Clone()](#Clone)                                         | Creates a shallow copy of the ArrayList.                                                                                                                                                                                   |
| [Contains(Any)](#Contains)                                | Determines whether an element is in the ArrayList.                                                                                                                                                                         |
| [CopyTo(Array)](#CopyTo1)                                 | Copies the entire ArrayList to a compatible one-dimensional Array, starting at the beginning of the target array.                                                                                                          |
| [CopyTo(Array,Int32)](#CopyTo2)                           | Copies the entire ArrayList to a compatible one-dimensional Array, starting at the specified index of the target array.                                                                                                    |
| [CopyTo(Int32,Array,Int32,Int32)](#CopyTo3)               | Copies a range of elements from the ArrayList to a compatible one-dimensional Array, starting at the specified index of the target array.                                                                                  |
| [Equals(Any)](#Equals)                                    | Determines whether the specified object is equal to the current object. (Inherited from TObject)                                                                                                                           |
| [FixedSize(ArrayList)](#FixedSize1)                       | Returns an ArrayList wrapper with a fixed size.                                                                                                                                                                            |
| [FixedSize(IList)](#FixedSize2)                           | Returns an IList wrapper with a fixed size.                                                                                                                                                                                |
| [GetEnumerator()](#GetEnumerator1)                        | Returns an enumerator for the entire ArrayList.                                                                                                                                                                            |
| [GetEnumerator(Int32,Int32)](#GetEnumerator2)             | Returns an enumerator for a range of elements in the ArrayList.                                                                                                                                                            |
| [GetHashCode()](#GetHashCode)                             | Serves as the default hash function. (Inherited from TObject)                                                                                                                                                              |
| [GetRange(Int32,Int32)](#GetRange)                        | Returns an ArrayList which represents a subset of the elements in the source ArrayList.                                                                                                                                    |
| [GetEnumerator(Int32,Int32)](#GetEnumerator2)             | Returns an enumerator for a range of elements in the ArrayList.                                                                                                                                                            |
| [GetType()](#GetType)                                     | Gets the Type of the current instance. (Inherited from TObject)                                                                                                                                                            |
| [IndexOf(Any)](#IndexOf1)                                 | Searches for the specified object and returns the zero-based index of the first occurrence within the entire ArrayList.                                                                                                    |
| [IndexOf(Any, Int32)](#IndexOf2)                          | Searches for the specified object and returns the zero-based index of the first occurrence within the range of elements in the ArrayList that extends from the specified index to the last element.                        |
| [IndexOf(Any, Int32, Int32)](#IndexOf3)                   | Searches for the specified Object and returns the zero-based index of the first occurrence within the range of elements in the ArrayList that starts at the specified index and contains the specified number of elements. |
| [Insert(Int32, Any)](#Insert)                             | Inserts an element into the ArrayList at the specified index.                                                                                                                                                              |
| [InsertRange(Int32, ICollection)](#Insert)                | Inserts the elements of a collection into the ArrayList at the specified index.                                                                                                                                            |
| [LastIndexOf(Any)](#LastIndexOf1)                         | Searches for the specified Object and returns the zero-based index of the last occurrence within the entire ArrayList.                                                                                                     |
| [LastIndexOf(Any, Int32)](#LastIndexOf2)                  | Searches for the specified Object and returns the zero-based index of the last occurrence within the range of elements in the ArrayList that extends from the first element to the specified index.                        |
| [LastIndexOf(Any, Int32, Int32)](#LastIndexOf3)           | Searches for the specified Object and returns the zero-based index of the last occurrence within the range of elements in the ArrayList that contains the specified number of elements and ends at the specified index.    |
| [MemberwiseClone()](#MemberwiseClone)                     | Creates a shallow copy of the current Object. (Inherited from TObject                                                                                                                                                      |
| [ReadOnly(ArrayList)](#ReadOnly1)                         | Returns a read-only ArrayList wrapper.                                                                                                                                                                                     |
| [ReadOnly(IList)](#ReadOnly2)                             | Returns a read-only IList wrapper.                                                                                                                                                                                         |

{% iframe https://unpkg.com/@tuval/core/samples/ArrayList.html %}
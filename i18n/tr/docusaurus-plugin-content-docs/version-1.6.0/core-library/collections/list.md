---
id: list
title: List
sidebar_label: List
---

The **List< T >** is a collection of strongly typed objects that can be accessed by index and having methods for sorting, searching, and modifying list. It is the generic version of the ArrayList that comes under System.Collection.Generic namespace.

## List Characteristics

* List equivalent of the ArrayList, which implements IList.
* List can contain elements of the specified type. It provides compile-time type checking in Typescript.
* Elements can be added using the Add(), AddRange() methods or array-initializer syntax.
* Elements can be accessed by passing an indexer method Get and Set e.g. myList.Get(0) . Indexes start from zero.

## Creating a List

The List is a generic collection, so you need to specify a type parameter for the type of data it can store. The following example shows how to create list and add elements.

```tsx
const primeNumbers:List<int> = new List<int>();
primeNumbers.Add(1); // adding elements using add() method
primeNumbers.Add(3);
primeNumbers.Add(5);
primeNumbers.Add(7);

const cities = new List<string>();
cities.Add("New York");
cities.Add("London");
cities.Add("Mumbai");
cities.Add("Chicago");
cities.Add(null);// nulls are allowed for reference type list

//adding elements using collection-initializer syntax
const bigCities: List<string> = new List<string>(["New York","London","Mumbai","Chicago"   ]);

```

{% iframe https://unpkg.com/@tuval/core/samples/List.html %}

In the above example, const primeNumbers:List = new List(); creates a list of int type. In the same way, cities and bigCities are string type list. You can then add elements in a list using the Add() method or the array-initializer syntax.

You can also add elements of the custom classes using the array-initializer syntax. The following adds objects of the Student class in the List.

```tsx
const students: List<Student> = new List<Student>([
            new Student( 1,"Bill"),
            new Student(2,"Steve"),
            new Student(3,"Ram"),
            new Student(4,"Abdul")
]);
```

## Adding an Array in a List

Use the AddRange() method to add all the elements from an array or another collection to List.

AddRange() signature: __void AddRange( collection:IEnumerable)__

```tsx
const cities:string[] = ["İstanbul", "London", "New York"];

const popularCities:List<string> = new List<string>();

// adding an array in a List
popularCities.AddRange(cities);

const favouriteCities = new List<string>();

// adding a List
favouriteCities.AddRange(popularCities);
```

## Accessing a List

A list can be accessed by an indexer methods Get and Set, a for/foreach loop. Indexer methods of a list start from zero. You Use a foreach method or for loop to iterate a List collection.

```tsx
const numbers:List<int> = new List<int>([ 1, 2, 5, 7, 8, 10]);
Console.WriteLine(numbers[0]); // prints 1
Console.WriteLine(numbers[1]); // prints 2
Console.WriteLine(numbers[2]); // prints 5
Console.WriteLine(numbers[3]); // prints 7

// using foreach LINQ method
numbers.ForEach(num => Console.WriteLine(num + ", "));//prints 1, 2, 5, 7, 8, 10,

// using for loop
for(int i = 0; i < numbers.Count; i++)
    Console.WriteLine(numbers[i]);
```

## Insert Elements in List

Use the __Insert()__ method inserts an element into the List collection at the specified index.

Insert() signature: **__Insert( index:int,  item:T):void__** in Typescript;

```tsx
var numbers = new List<int>([ 10, 20, 30, 40 ]);

numbers.Insert(1, 11);// inserts 11 at 1st index: after 10.

foreach (numbers, (num:int)=>{
    Console.Write(num);
});
```

## Remove Elements from List
Use the Remove() method to remove the first occurrence of the specified element in the List< T > collection. Use the RemoveAt() method to remove an element from the specified index. If no element at the specified index, then the ArgumentOutOfRangeException will be thrown.

Remove() signature:  **__Remove( item:T):boolean__** in Typescript.

RemoveAt() signature:  **__RemoveAt(int index):void__** in Typescript.

```tsx
const numbers: List<int> = new List<int>([ 10, 20, 30, 40, 10 ]);

numbers.Remove(10); // removes the first 10 from a list

numbers.RemoveAt(2); //removes the 3rd element (index starts from 0)

//numbers.RemoveAt(10); //throws ArgumentOutOfRangeException

foreach (intList, (elem)=>{
    Console.Write(el); //prints 20 30
});
```

## Check Elements in List
Use the Contains() method to determine whether an element is in the List or not.

```tsx
const numbers:List<int> = new List<int>([ 10, 20, 30, 40 ]);
numbers.Contains(10); // returns true
numbers.Contains(11); // returns false
numbers.Contains(20); // returns true
```
| Property                                 | Description                                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Item | Gets or sets the element at the specified index |
| Count | Returns the total number of elements exists in the List< T > |

| Method                                 | Description                                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Add | Adds an element at the end of a List< T >. |
| AddRange | Adds elements of the specified collection at the end of a List< T >. |
| BinarySearch | Search the element and returns an index of the element. |
| Clear | Removes all the elements from a List< T >. |
| Contains | Checks whether the specified element exists or not in a List< T >. |
| Find | Finds the first element based on the specified predicate function. |
| Foreach | Iterates through a List< T >. |
| Insert | Inserts an element at the specified index in a List< T >. |
| InsertRange | Inserts elements of another collection at the specified index. |
| Remove | Removes the first occurrence of the specified element. |
| RemoveAt | Removes the element at the specified index. |
| RemoveRange | Removes all the elements that match the supplied predicate function. |
| Sort | Sorts all the elements. |
| TrimExcess | Sets the capacity to the actual number of elements. |
| TrueForAll | Determines whether every element in the List< T > matches the conditions defined by the specified predicate. |

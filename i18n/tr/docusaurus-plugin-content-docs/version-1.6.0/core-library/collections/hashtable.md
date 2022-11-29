---
id: hashtable
title: Hashtable
sidebar_label: Hashtable
---

The Hashtable is a non-generic collection that stores key-value pairs, similar to generic Dictionary<TKey, TValue> collection. It optimizes lookups by computing the hash code of each key and stores it in a different bucket internally and then matches the hash code of the specified key at the time of accessing values.

## Hashtable Characteristics

* Hashtable stores key-value pairs.
* Implements IDictionary interface in Typescript.
* Keys must be unique and cannot be null or undefined.
* Values can be null, undefined or duplicate.
* Values can be accessed by passing associated key in the indexer functions Get and Set e.g. myHashtable.Get(key)
* Elements are stored as DictionaryEntry objects.

## Creating a Hashtable

The following example demonstrates creating a Hashtable and adding elements.

```tsx
import {int, Hashtable, DictionaryEntry, foreach, Console} from '@tuval/core'

const numberNames:Hashtable<int, string> = new Hashtable(); //creating Hashtable
numberNames.Add(1,"One"); //adding a key/value using the Add() method
numberNames.Add(2,"Two");
numberNames.Add(3,"Three");

foreach(numberNames, (de:DictionaryEntry)=>{
    Console.WriteLine("Key: {0}, Value: {1}", de.Key, de.Value);
});

```

#### Javascript

```js
const numberNames = new Hashtable(); //creating Hashtable
numberNames.Add(1,"One"); //adding a key/value using the Add() method
numberNames.Add(2,"Two");
numberNames.Add(3,"Three");

foreach(numberNames, (de)=>{
    Console.WriteLine("Key: {0}, Value: {1}", de.Key, de.Value);
});
```

{% iframe https://unpkg.com/@tuval/core/samples/Hashtable.html %}

The Hashtable collection can include all the elements of Dictionary, as shown below.

#### Typescript

```tsx
Dictionary<int, string> dict = new Dictionary();
dict.Add(1, "one");
dict.Add(2, "two");
dict.Add(3, "three");

const ht:Hashtable = new Hashtable(dict);

```

#### Javascript

```js
var dict = new Dictionary();
dict.Add(1, "one");
dict.Add(2, "two");
dict.Add(3, "three");

var ht = new Hashtable(dict);
```

## Update Hashtable

You can retrieve the value of an existing key from the Hashtable by passing a key in indexer. The Hashtable is a non-generic collection, so you must type cast values while retrieving it.

#### Typescript

```tsx
//creating a Hashtable using array-initializer syntax
const cities:Hashtable = new Hashtable([
    ["UK", "London, Manchester, Birmingham"],
    ["USA", "Chicago, New York, Washington"],
    ["India", "Mumbai, New Delhi, Pune"]
    ]);

const citiesOfUK: string = cities.Get("UK");
const citiesOfUSA = cities.Get("USA");

Console.WriteLine(citiesOfUK);
Console.WriteLine(citiesOfUSA);

cities.Set("UK", "Liverpool, Bristol"); // update value of UK key
cities.Set("USA", "Los Angeles, Boston"); // update value of USA key

if(!cities.ContainsKey("France")){
    cities.Set("France", "Paris");
}
```

## Remove Elements in Hashtable

The Remove() method removes the key-value that match with the specified in the Hashtable. It throws the KeyNotfoundException if the specified key not found in the Hashtable, so check for an existing key using the ContainsKey() method before removing.

Use the Clear() method to remove all the elements in one shot.

```tsx
const cities: Hashtable = new Hashtable([
	["UK", "London, Manchester, Birmingham"],
	["USA", "Chicago, New York, Washington"],
	["India", "Mumbai, New Delhi, Pune"]
]);

cities.Remove("UK"); // removes UK
//cities.Remove("France"); //throws run-time exception: KeyNotFoundException

if(cities.ContainsKey("France")){ // check key before removing it
    cities.Remove("France");
}
cities.Clear(); //removes all elements
```

## Methods
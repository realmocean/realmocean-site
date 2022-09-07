---
id: bitarray
title: BitArray
sidebar_label: BitArray
---

The BitArray class manages a compact array of bit values, which are represented as Booleans, where true indicates that the bit is on (1) and false indicates the bit is off (0).
It is used when you need to store the bits but do not know the number of bits in advance. You can access items from the BitArray collection by using an integer index, which starts from zero.

## Properties

| Name                                 | Description                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|Count|Gets the number of elements contained in the BitArray.|
|IsReadOnly|Gets a value indicating whether the BitArray is read-only.|

## Methods

| Name                                 | Description                                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|[And(BitArray)](#And)|Performs the bitwise AND operation on the elements in the current BitArray against the corresponding elements in the specified BitArray.|
|[Clone()](#Clone)|Creates a shallow copy of the BitArray.|
|Get(int)|Gets the value of the bit at a specific position in the BitArray.|
|Not()[This is the link text](#headin)|Inverts all the bit values in the current BitArray, so that elements set to true are changed to false, and elements set to false are changed to true.|
|Or(BitArray)|Performs the bitwise OR operation on the elements in the current BitArray against the corresponding elements in the specified BitArray.|
|Set(int,boolean)|Sets all bits in the BitArray to the specified value.|
|SetAll(boolean)|Sets the bit at a specific position in the BitArray to the specified value.|
|Xor(BitArray)|Performs the bitwise eXclusive OR operation on the elements in the current BitArray against the corresponding elements in the specified BitArray.|


```tsx
 //creating two  bit arrays of size 8
         const ba1:BitArray = new BitArray(8);
         const ba2:BitArray = new BitArray(8);

         const a:ByteArray = New.ByteArray([60]);
        const b:ByteArray = New.ByteArray([13]);;

         //storing the values 60, and 13 into the bit arrays
         ba1 = new BitArray(a);
         ba2 = new BitArray(b);

         //content of ba1
         Console.WriteLine("Bit array ba1: 60");

         for (let i:int = 0; i < ba1.Count; i++) {
            Console.Write("{0, -6} ", ba1[i]);
         }
         Console.WriteLine();

         //content of ba2
         Console.WriteLine("Bit array ba2: 13");

         for (let i:int = 0; i < ba2.Count; i++) {
            Console.Write("{0, -6} ", ba2[i]);
         }
         Console.WriteLine();
         const ba3:BitArray = new BitArray(8);
         ba3 = ba1.And(ba2);

         //content of ba3
         Console.WriteLine("Bit array ba3 after AND operation: 12");

         for (let i:int = 0; i < ba3.Count; i++) {
            Console.Write("{0, -6} ", ba3[i]);
         }
         Console.WriteLine();
         ba3 = ba1.Or(ba2);

         //content of ba3
         Console.WriteLine("Bit array ba3 after OR operation: 61");

         for (let i:int = 0; i < ba3.Count; i++) {
            Console.Write("{0, -6} ", ba3[i]);
         }
         Console.WriteLine();
```

## Methods

#### <i>BitArray.And(BitArray)</i><a name="And"></a>

```tsx
//Typescrpt
public And(value: BitArray): BitArray;
```

Performs the bitwise AND operation between the elements of the current BitArray object and the corresponding elements in the specified array. The current BitArray object will be modified to store the result of the bitwise AND operation.

#### <i>BitArray.Clone()</i><a name="Clone"></a>

```tsx
//Typescrpt
public Clone(): BitArray;
```

A shallow copy of the BitArray.
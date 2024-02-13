// Algorithm dot_product(v1, v2)
//     ps = 0
//     For i from 0 to size(v1) 
//         ps ←=ps + v1[i] * v2[i]
//     End For
//     Return ps


// Algorithm orthogonal_vectors(vectors)
//     For each pair of vectors (v1, v2) in vectors do
//         ps ← dot_product(v1, v2)
//         If ps = 0 then
//             Print "Vectors v1 and v2 are orthogonal."
//         Else
//             Print "Vectors v1 and v2 are not orthogonal."
//         End If
//     End For
// End Algorithm

// Algorithm insertion_sort(array)
//     For i from 1 to size(array) - 1 do
//         temp ← array[i]
//         j ← i - 1
//         While j > 0 and array[j] < temp do 
//             array[j + 1] ← array[j]
//             j ← j - 1
//         End While
//         array[j + 1] ← temp
//     End For

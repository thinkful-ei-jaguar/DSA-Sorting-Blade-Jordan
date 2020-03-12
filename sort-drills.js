//Drill #1 
// a) After 3 recursive calls: merge([21], [1], arr) -> [1, 21]



21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
//length = 16
//middle = 8

//left array = 21, 1, 26, 45, 29, 28, 2, 9 
//right array = 16, 49, 39, 27, 43, 34, 46, 40


//First recursive call 
//  mergeSort(21, 1, 26, 45, 29, 28, 2, 9 )
// length = 8  middle = 4
// left array = 21, 1, 26, 45
// right array = 29, 28, 2, 9

//Second recursive 
//  mergreSort(21, 1, 26, 45)
// length = 4 middle = 2
// left array = 21, 1
// right array = 26, 45

//Third recursive 
// merge sort(21, 1)
// left = array = [21]
// right = array = [1]

// merge([21], [1], arr) -> [1, 21]
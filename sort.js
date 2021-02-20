function mergeSort (arr) {
    function merge (arr1, arr2) {
        var res = []
        for (var i = 0, j = 0; i < arr1.length || j < arr2.length;) {
            if (i >= arr1.length - 1) {
                res.push(arr2[j])
                j++
                continue
            }
            if (j >= arr2.length - 1) {
                res.push(arr1[i])
                i++
                continue
            }
            if (arr1[i] < arr2[j]) {
                res.push(arr1[i])
                i++
            } else {
                res.push(arr2[j])
                j++
            }
        }
        return res
    }
    
    while (arr.length > 1) {
        var snapArr = []
        for (var i = 0; i < arr.length; i += 2) {
            if (typeof arr[i] === 'number') {
                arr[i] = [arr[i]]
            }
            snapArr.push(merge(arr[i], arr[i + 1] || []))
        }
        arr = snapArr
    }

    return arr
}

var arr = [5,9,6,3,7,8,4,1,2,10]
console.log(mergeSort(arr))

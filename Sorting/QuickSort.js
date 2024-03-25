function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0]; 
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]); 
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; 
}


const arr = [34, 67, 23, 56, 12, 89, 3];
console.log("Original Array:", arr);
console.log("Sorted Array:", quickSort(arr.slice())); 
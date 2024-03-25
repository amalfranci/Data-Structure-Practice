function CountAB(arr) {
    var stack = [];
    var countA = 0;
    var countB = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'A') {
            stack.push(arr[i]);
            countA++;
        } else if (arr[i] === 'B') {
           
            if (stack.length > 0) {
                countB++;
                stack.pop();
                
            }
             console.log(stack.length)
        }
    }
    console.log(countA, countB);
    return countA === countB;
}

const arr = ['A', 'B', 'A', 'B', 'X', 'F', 'B'];
console.log(CountAB(arr));

let array = [56, 22, -3, 5, 32];
let n = parseInt(prompt('Enter the nth Element:'));
function smallNum(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        console.log(array[i]);
    }
    console.log(array);
    let result = array[n - 1];
    return result;
}
console.log(smallNum(array, n));
const data = [...Array(1e8)].map((_, i) => i);
// const data = [...Array(1e2)].map((_, i) => i);

// function sort(arr) {
//     const newArr = [];
//     arr.forEach(element => {
//         if (element % 4 === 0) {
//             newArr.unshift(element);
//         } else {
//             newArr.push(element);
//         }
//     });
//     return newArr;
// }

// function sort(arr) {
//     return arr.sort((a, b) => a % 4 === 0 ? -1 : 1);
// }

// function sort(arr) {
//     const arr1 = [];
//     const arr2 = [];
//     arr.forEach(element => {
//         if (element % 4 === 0) {
//             arr1.push(element);
//         } else {
//             arr2.push(element);
//         }
//     });
//     return [...arr1, ...arr2];
// }

function sort(arr) {
    let index = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0) {
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            index++;
        }
    }
    return arr;
}

const t0 = Date.now();

const sortedData = sort(data);

const t1 = Date.now();

console.log(t1 - t0, sortedData.length);

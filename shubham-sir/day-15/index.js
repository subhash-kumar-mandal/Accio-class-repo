

function find(arr, n) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] < arr[j] && arr[j] < arr[k] && (arr[j] ** 2 == arr[i] * arr[k])) {
                    console.log(arr[i], arr[j], arr[k])
                }
            }
        }
    }
}

let arra = [1, 2, 6, 10, 18, 54];
find(arra);


let call = (gain) => {
    let max = -Infinity;
    let sum = 0;
    for (let item of gain) {
        sum += item;
        max = Math.max(sum, max)
    }
    return max
}

let arra1 = [-5, 1, 5, 0, -7];
console.log(call(arra1))



function printMultiplication(matrix1, matrix2, n) {

    for (i = 0; i < matrix1.length; i++) {

        let str = "";
        for (let j = 0; j < matrix1.length; j++) {
            let temp = 0;
            for (let k = 0; k < matrix1.length; k++) {
                temp += matrix1[i][k] * matrix2[k][j]
            }
            str += temp + " "
        }
        console.log(str)
    }

}

let mat = [
    [1, 1],
    [1, 1]
]
let mat1 =[
    [2,2],
    [2,2]
]

printMultiplication(mat,mat1)
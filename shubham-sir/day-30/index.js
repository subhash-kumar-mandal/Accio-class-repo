//  bubble sort ;


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const a =[2,35,4,6,5,6,7,0,-1,-100];



// Selection Sort (Ascending Order)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // Find the index of the smallest element in the remaining array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap arr[i] with arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}




function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];     // jis element ko insert karna hai
        let j = i - 1;

        // left side ke sorted part me sahi jagah dhundho
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];   // elements ko right shift karo
            j--;
        }

        arr[j + 1] = key;     // key ko uski correct position me daal do
    }

    return arr;
}
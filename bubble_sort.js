const arr = [6, 5, 3, 1, 8, 7, 2, 4];

const bubbleSort = (arr) => {

    for (let i = 0 ; i < arr.length ; i++ ){
        for (let j = 0 ; j < arr.length -1 ; j++ ){
            if (arr[j] > arr[j + 1]) {
                let small = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = small;
            }
        } 

        console.log('iteration' + arr);
    }
};


bubbleSort(arr);
console.log(arr);
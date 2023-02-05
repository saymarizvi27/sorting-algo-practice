const arr = [6, 5, 3, 1, 8, 7, 2, 4];

const selectionSort = (arr) => {

    for (let i = 0 ; i < arr.length ; i++ ){
        let minIndex = i;
        for (let j = i + 1 ; j < arr.length; j++ ){
            if (arr[j] < arr[minIndex]){
                minIndex = j; 
            }
        } 
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
};


selectionSort(arr);
console.log(arr);
/*Write a program to perform Selection Sort. */
function selectionsort(arr){
    for(let i=0; i<arr.length-1;i++){
        let min=1;
        for(let j=0;i<arr.length; j++){
            if(arr[j]<arr[min])min=j;

        }
          [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
    

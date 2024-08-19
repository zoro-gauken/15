let vopros = +prompt("введите число")
const maks = +vopros
function fibonachi(vopros) {
    if (maks >= 0) {
        let a = 0, b = 1
        let result;
        for (let next = a; next <= maks; ) {
            result += next + ' ';
            [a, b] = [b, a + b]
            next = a
        }
        console.log(result);
    } else {
        alert('введите число')
    }
}

    

fibonachi()


function bubbleSort(arr) {
    let swaip;
    
    do {
        swaip = false

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swaip = true
            }
        }
    } while (swaip)

    return arr
}

const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Неотсортированный массив ', array);

const sortedArray = bubbleSort(array);
console.log('Отсортированный массив:', sortedArray)
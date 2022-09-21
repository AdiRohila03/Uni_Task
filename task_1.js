import PromptSync from 'prompt-sync'; 
const prompt = PromptSync();
let size = prompt('Enter the size of array: ');
let arr = new Array(100);
let unique = new Array(100);
for (var i = 0; i < size; i++) {
    arr[i] = prompt('Enter Element '+ (i + 1)+":" );
}
let c, m = 0;
for (let i = 0; i < size; i++) {
    c = 0;
    for (let j = i + 1; j < size; j++) {
        if (arr[i] == arr[j]) {
            c++;
        }
    }
    if (c == 0) {
        unique[m] = arr[i];
        m++;
    }
}
console.log("Number of Distinct Words: " + m);
let count = new Array(100);
for (var i = 0; i < m; i++) {
    count[i] = 0;
    for (var j = 0; j < size; j++) {
        if (unique[i] == arr[j]) {
            count[i] = count[i] + 1;
        }
    }
}
let temp1, temp2;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
        if (count[j] < count[j + 1]) {
            temp1 = count[j + 1];
            count[j + 1] = count[j];
            count[j] = temp1;
            temp2 = unique[j + 1];
            unique[j + 1] = unique[j];
            unique[j] = temp2;
        }
    }
}
console.log("Words in Desending Order:")
for (let i = 0; i < m; i++) {
    console.log(unique[i] + "  " + count[i]);
}
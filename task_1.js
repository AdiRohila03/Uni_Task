import ps from 'prompt-sync'; 
const prompt = ps();
let n = prompt('Enter the number of words you want to input: ');   
let arr = new Array(100);               
let diff = new Array(100);
for (var i = 0; i < n; i++) {                        //to take n words in arr array
    arr[i] = prompt('Enter Element '+ (i + 1)+":" );
}
let a, m = 0;
for (let i = 0; i < n; i++) {                  // to store Distinct words in diff array
   a = 0;
    for (let j = i + 1; j < n; j++) {         
        if (arr[i] == arr[j]) {
            a++;
        }
    }
    if (a == 0) {                            
        diff[m] = arr[i];
        m++;
    }
}
console.log("Number of Distinct Words: " + m);
let count = new Array(100);                    //array of count, to find occurence of each distinct word
for (var i = 0; i < m; i++) {
    count[i] = 0;
    for (var j = 0; j < n; j++) {            //finds frequency of distinct words
        if (diff[i] == arr[j]) {
            count[i] = count[i] + 1;
        }
    }
}
let t1, t2;
for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {        //sorting and arranging words & resp count in decreasing order of their repetation
        if (count[j] < count[j + 1]) {
            t1 = count[j + 1];
            count[j + 1] = count[j];
            count[j] = t1;
            t2 = diff[j + 1];
            diff[j + 1] = diff[j];
            diff[j] = t2;
        }
    }
}
console.log("Words in Desending Order:")
for (let i = 0; i < m; i++) {
    console.log(diff[i] + "  " + count[i]);
}
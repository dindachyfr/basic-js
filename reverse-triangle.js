function reverseTriangle(n){
    let string = "";
    if (typeof(n) != 'number'){
        console.log('Data harus number')
    }
    else{
    for (let i = 0; i < n; i++) {
      for (let k = 1; k <= n - i; k++) {
        string += k;
      }
      string += "\n";
    }
    return string
    }
    }
console.log(reverseTriangle(7));
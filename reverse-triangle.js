function reverseTriangle(triangleLength){
    let string = "";
    if (typeof(triangleLength) != 'number'){
        console.log('Data harus number')
    }
    else{
    for (let i = 0; i < triangleLength; i++) {
      for (let k = 1; k <= triangleLength - i; k++) {
        string += k;
      }
      string += "\n";
    }
    return string
    }
    }
console.log(reverseTriangle(7));
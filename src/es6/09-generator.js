function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Eddy", "David", "Oscar","Ulises","Ana", "Oscar"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* idMaker() {
    var index = 0;
    var indox = 9
    while (true) yield `${index++}${indox--}`;
  }
  
  var gen = idMaker(); // "Generator { }"
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  // ...
  


function* getId() {
    let letter = "A";
    let number = 0;

    while(true) {
        yield letter + number;
        number ++;
        if (number > 9) {
            number = 0;
            letter = String.fromCharCode(letter.charCodeAt(0)+1);
            if (letter > "Z") {
                letter = A;
            }
        }
    }
}

const id = getId();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);


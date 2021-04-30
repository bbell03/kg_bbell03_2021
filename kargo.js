

var numbers = process.argv.slice(2)
console.log(numbers)

function numberToWord(num) {
  num_strings = ["Zero", "One", "Two", "Three", "Four",
                "Five", "Six", "Seven", "Eight", "Nine"]
  digs = []
  output = ''

  while (num > 9) {
    dig = num % 10
    digs.unshift(dig)
    num = Math.round(num/10)
  }

  digs.unshift(num)

  if (digs.length > 1) {
    for (var i = 0; i < digs.length; i++) {
      output = output + num_strings[digs[i]]
    }
    console.log(output)
  }
  else{
    output = num_strings[digs]
    console.log(num_strings[digs])
  }

  return output
}

finalString = ''

for (var i = 0; i < numbers.length; i++) {
  word = numberToWord(numbers[i])
  if (i < (numbers.length - 1)) {
    finalString = finalString +  word + ', '
  }
  else{
    finalString = finalString + word
  }
}

console.log(finalString)

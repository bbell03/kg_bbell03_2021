

var numbers = process.argv.slice(2)
console.log(numbers)


function numberToWord(num) {
  numToLetter = ["Zero", "One", "Two", "Three", "Four",
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
      output = output + numToLetter[digs[i]]
    }
    console.log(output)
  }
  else{
    console.log(numToLetter[digs])
  }

  return
}


numbers.forEach(numberToWord)

//Brandon Bell
//Kargo Internship Summer 2021 Pre Assessment
//4.30.21
// The following program converts a list of numbers taken from standard input
// and returns their representations as digit strings to standard output.

//Accept Command Line Parameters
var numbers = process.argv.slice(2)

//Function to Convert a number entry to its equivalent string form
//as specified
function numberToWord(num) {
  //possible return data
  num_strings = ["Zero", "One", "Two", "Three", "Four",
                "Five", "Six", "Seven", "Eight", "Nine"]
  //init working and return variables
  digs = []
  output = ''
  //case for multi-digit inputs READ DATA
  while (num > 9) {
    dig = num % 10
    digs.unshift(dig)
    //always round down to get digits as entered
    num = Math.round(num/10 - .5)
  }
  //case for sigle-digit input or final-digit READ DATA
  digs.unshift(num)
  //case for multi-digit conversion
  if (digs.length > 1) {
    for (var i = 0; i < digs.length; i++) {
      output = output + num_strings[digs[i]]
    }
  }
  //case for single-digit conversion
  else{
    output = output + num_strings[digs]
  }
  //return
  return output
}

//init output string
finalString = ''

//call function on each number in input list
for (var i = 0; i < numbers.length; i++) {
  word = numberToWord(numbers[i])

  //output preceding elements with comma
  if (i < (numbers.length - 1)) {
    finalString = finalString +  word + ','
  }
  //output final elements with no comma
  else{
    finalString = finalString + word
  }
}

//output solution
console.log(finalString)

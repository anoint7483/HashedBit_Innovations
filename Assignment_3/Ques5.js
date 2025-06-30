// Replace wrong word with correct word

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("He is goood boy", "goood", "good"));

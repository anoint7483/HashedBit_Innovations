// Count vowels and consonants

function countVowelsAndConsonants(str) {
  const vowels = "aeiouAEIOU";
  let v = 0, c = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      if (vowels.includes(char)) v++;
      else c++;
    }
  }

  return { vowels: v, consonants: c };
}

console.log(countVowelsAndConsonants("JavaScript is Powerful Language"));

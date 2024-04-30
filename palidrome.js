function palidrome(my_word) {
  let is_palidrome = true;

  for (let i = 0; i < my_word.length; i++) {
    if (my_word[i] !== my_word[my_word.length - i - 1]) {
      is_palidrome = false;
      return "not palidrome";
    }
  }
  return "palidrome";
}

// console.log(palidrome("raiuir"));

function palidrome_two(my_word) {
  if (my_word !== my_word.split("").reverse().join("")) {
    return "not a palidrome";
  } else {
    return "palidrome";
  }
}

console.log(palidrome_two("racecr"));

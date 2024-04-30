// method 1 to reverse a string by looping through the characters
function reverse_string_one(my_string) {
  let reversed_string = "";
  for (let i = 0; i < my_string.length; i++) {
    reversed_string += my_string[my_string.length - i - 1];
  }
  // for(let char of my_string){
  //   reversed_string  = char + reversed_string
  // }
  return reversed_string;
}

// console.log(reverse_string_one("apple"));

// method 2 convert into an array use the reverse method and convert back to a string
function reverse_string_two(my_string) {
  // const my_arr = Array.from(my_string);
  const my_arr = my_string.split("");
  my_arr.reverse();
  const reversed_string = my_arr.join("");
  return reversed_string;
}

console.log(reverse_string_two("apple"));

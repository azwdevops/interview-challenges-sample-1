// find maximum character in a string and how many times it appears

function max_character(my_string) {
  const str_arr = my_string.split("");
  let max = str_arr[0];
  let num_times = 0;
  for (let item of str_arr) {
    if (item > max) {
      max = item;
      num_times = 1;
    } else if (item === max) {
      num_times += 1;
    }
  }

  console.log("max", max);
  console.log("num_times", num_times);
}

max_character("heLLoo$$3p");

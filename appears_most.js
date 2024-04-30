function appears_most(my_string) {
  let obj = {};
  for (let char of my_string) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  let maxNum = 0;
  let maxChar = "";
  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maxChar = char;
    }
  }

  console.log("char", maxChar);
  console.log("num_times", maxNum);
}

appears_most("heLLLoo$$3p");

function appears_most_one(my_string) {
  const sorted_arr = my_string.split("").sort();
  let num_times = 0;
  let char = sorted_arr[0];
  for (let i = 0; i < sorted_arr.length; i++) {
    let current_num_times = 0;
    for (let j = i; j < sorted_arr.length; j++) {
      if (sorted_arr[j] === sorted_arr[i]) {
        current_num_times += 1;
      }
    }
    if (current_num_times > num_times) {
      num_times = current_num_times;
      char = sorted_arr[i];
    }
  }
  console.log("char", char);
  console.log("num_times", num_times);
}

appears_most_one("heLLLoo$$3p");

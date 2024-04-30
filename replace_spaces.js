function replace_spaces_one(str) {
  const my_arr = str.trim().split("");
  const new_arr = [];
  for (item of my_arr) {
    if (item === " ") {
      new_arr.push("%20");
    } else {
      new_arr.push(item);
    }
  }
  const new_str = new_arr.join("");

  console.log(new_str);
}

function replace_spaces_two(str) {
  // we use / to allow indicating what is to be replaced in this case space, and /g to ensure it is global since plain replace only replaces the first occurrence
  const new_str = str.trim().replace(/ /g, "%20");
  console.log(new_str);
}

replace_spaces_one("hhd adf dfs sfgs ");
replace_spaces_two("hhd adf dfs sfgs ");
replace_spaces_two("Mr John Smith      ");

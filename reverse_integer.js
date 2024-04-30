function reverse_integer_one(my_int) {
  const my_arr = `${my_int}`.split("");
  let int_arr = [];
  let sign_arr = "";

  if (my_arr[0] === "-") {
    sign_arr = my_arr[0];
    int_arr = my_arr.slice(1);
  } else {
    int_arr = my_arr;
  }

  int_arr.reverse();
  const reversed_int = [sign_arr, ...int_arr].join("");
  console.log(parseInt(reversed_int));
}

// reverse_integer_one(-900);

function reverse_integer_two(my_int) {
  if (my_int < 0) {
    return console.log(
      -1 * parseInt(my_int.toString().split("").reverse().join(""))
    );
  }
  console.log(parseInt(my_int.toString().split("").reverse().join("")));
}

reverse_integer_two(-900);

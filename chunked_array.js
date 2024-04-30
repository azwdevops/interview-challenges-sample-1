function chunked_array_one(arr, n) {
  let remaining_arr = arr;
  const my_chunks = [];
  while (true) {
    my_chunks.push(remaining_arr.slice(0, n));
    remaining_arr = remaining_arr.slice(n, arr.length);
    if (remaining_arr.length === 0) {
      break;
    } else if (remaining_arr.length > n) {
      remaining_arr = remaining_arr;
    } else if (remaining_arr.length > 0) {
      my_chunks.push(remaining_arr);
      break;
    }
  }
  console.log(my_chunks);
}

chunked_array_one([1, 4, 12, 3, 2, 6, -9, 0], 3);
// chunked_array_one([1, 4, 12, 3, 2, 6, -9, 0], 4);
// chunked_array_one([1, 4, 12, 3, 2, 6, -9, 0], 8);

const chunked_array_two = (arr, n) => {
  const chunked = [];

  for (let item of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  console.log(chunked);
};

// chunked_array_two([1, 4, 12, 3, 2, 6, -9, 0], 3);
// chunked_array_two([1, 4, 12, 3, 2, 6, -9, 0], 4);
// chunked_array_two([1, 4, 12, 3, 2, 6, -9, 0], 8);

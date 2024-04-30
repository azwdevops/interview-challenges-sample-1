function unique_chars_in_string_one(my_string) {
  let obj = {};
  for (let char of my_string) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      console.log("String doe not have all unique characters");
      return;
    }
  }
  console.log("string has unique characters");
}

// unique_chars_in_string_one("abcdlk");

const unique_chars_in_string_two = (my_string) => {
  const obj = {};
  for (let i of my_string) {
    !obj[i] ? (obj[i] = 1) : (obj[i] += 1);
  }

  for (let j in obj) {
    if (obj[j] > 1) {
      return console.log("String doe not have all unique characters");
    }
  }
  console.log("string has unique characters");
};

unique_chars_in_string_two("sds2sf5s3");

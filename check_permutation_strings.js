function check_permutation_strings_one(str1, str2) {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    console.log("String 1 is a permutation of string 2");
  } else {
    console.log("String 1 is not a permutation of string 2");
  }
}

// check_permutation_strings_one(
//   "sdffxkdfgfsahfdjgskfhslvkxcgjhgjdbvgxcvx",
//   "hjjhdvsdffdhgkgkfcascsgfvxvkblgsxgxffdjx"
// );

check_permutation_strings_one("kunle", "eunlk");

const check_permutation_strings_two = (str1, str2) => {
  // check if they are the same exact string
  if (str1 === str2) {
    return console.log("String 1 is a permutation of string 2");
  } else {
    // check the lengths of both strings
    if (str1.length !== str2.length) {
      return console.log("String 1 is not a permutation of string 2");
    } else {
      // create objects of each one
      const obj1 = isObject(str1);
      const obj2 = isObject(str2);
      // check if the objects character count are equal
      for (let i in obj1) {
        // note accessing using i below is using key not indexes thus even if order of obj1 and obj2 are not the same, accessing using the object keys
        // gets the exact value of the specified key
        if (obj1[i] !== obj2[i]) {
          return console.log("String 1 is not a permutation of string 2");
        }
      }
    }
  }
  return console.log("String 1 is a permutation of string 2");
};

const isObject = (str) => {
  let obj = {};
  for (let i of str) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i] += 1;
    }
  }
  return obj;
};

// check_permutation_strings_two(
//   "sdffxkdfgfsahfdjgskfhslvkxcgjhgjdbvgxcvx",
//   "hjjhdvsdffdhgkgkfcascsgfvxvkblgsxgxffdjx"
// );

check_permutation_strings_two("kunle", "eunlk");

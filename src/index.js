module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  let arr_brackets = [];

  for (let arr of bracketsConfig) {
      brackets[arr[1]] = arr[0];
      if (arr[0] == arr[1]) brackets[arr] = 0;
  }

  for (let i of str) {
    if (brackets[i] == i) {
        let arr = [i, i];
        if (brackets[arr] == 0) {
            arr_brackets.push(i);
            brackets[arr] += 1;
            continue;
        }
    }

    if (i in brackets) {
        if (brackets[i] == i) {
            let arr = [i, i]
            brackets[arr] -= 1;
        }
        if ((arr_brackets.length == 0) || (brackets[i] != arr_brackets.pop())) return false;
    } else {
        arr_brackets.push(i);
    }
  }

  if (arr_brackets.length != 0) return false;
  return true;
}
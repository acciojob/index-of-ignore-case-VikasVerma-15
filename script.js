function indexOfIgnoreCase(subStr, str) {
  // write your code here
	if (subStr === "") return 0;
  if (str === "" || subStr.length > str.length) return -1;

  const main = str.toLowerCase();
  const sub = subStr.toLowerCase();

  return main.indexOf(sub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

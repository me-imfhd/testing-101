function isAnagram(str1, str2) {
  let table = new Array(256).fill(0);

  for (let i = 0; i < str1.length; i++) {
    let index = str1.toLowerCase().charCodeAt(i);
    table[index]++;
  }

  for (let i = 0; i < str2.length; i++) {
    let index = str2.toLowerCase().charCodeAt(i);
    table[index]--;
  }
  for (let i = 0; i < 256; i++) {
    if (table[i] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;

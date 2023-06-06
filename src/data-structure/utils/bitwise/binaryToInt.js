export function binaryToInt(binaryString) {
  if (typeof binaryString == "number") binaryString = String(binaryString);
  let output = 0,
    power = 0;
  for (let i = binaryString.length - 1; i >= 0; i--) {
    var bit = Number(binaryString[i]);
    bit && (output += Math.pow(2, power));
    power++;
  }
  return output;
}

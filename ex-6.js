let height = undefined;
let result;

function isUndefined(height) {
  return height ?? "Height is not defined";
}
console.log(isUndefined(result)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

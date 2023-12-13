function checkHeight(height) {
 
  return height ?? "Height is not defined";
}

let height = undefined;

const result = checkHeight(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

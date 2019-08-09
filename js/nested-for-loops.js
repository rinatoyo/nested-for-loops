/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";

  // Write code here
  for (let x = 0; x < depth; x++) {
    for (let y = 0; y < width; y++) {
      result += "{x:" + y + ", " + "y:" + x + "}";
      if (y < width - 1) {
        result += ", ";
      }
    }
    result += "\n";
  }
  return result;
}

// To see your console output outside the tests add function calls here.

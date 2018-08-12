// function loop(x) {
//     if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//         return;
//     // do stuff
//     loop(x + 1); // the recursive call
// }
// loop(10);
// console.log(loop(10));

function walkTree(node) {
    if (node == null) // 
      return;
    // do something with node
    for (var i = 0; i < node.childNodes.length; i++) {
      walkTree(node.childNodes[i]);
    }
  }
walkTree(3);
console.log(walkTree(3));
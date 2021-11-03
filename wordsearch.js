const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
  
    const flipped = helper(letters);
    const flippedJoin = flipped.map(ls => ls.join(''));
    // console.log(flippedJoin);
    for (l of flippedJoin) {
        if (l.includes(word)) return true;
    }
    return false;
  
  }
  
  module.exports = wordSearch
  
  const helper = function(matrix) {
    let newArray = [];
    
    //this will create the required rows for our empty array.
    for (let i = 0; i < matrix[0].length; i++) {
        newArray.push([]);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newArray[j].push(matrix[i][j]);
        }
    }
    return newArray;
  };
  
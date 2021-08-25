module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0) {
      return result;}
    let ml = matrix.length;
    let flag = true;
    for (let mi = 0, mii = 0; mi < ml; mi++) 
        {   
            if (flag){
                for (mii = 0; mii < matrix[mi].length; mii++)
                {result.push(matrix[mi][mii]);
                flag = false;}
            }
            else {
              for (mii = matrix[mi].length - 1; mii >= 0; mii--)
                {result.push(matrix[mi][mii]);
                  flag = true;}
            }
        }
      return result;
    }    
  
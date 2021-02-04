/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let newArr = []; 
    if(arr)
    {   
        for(let str of arr){
            if(!newArr.includes(str)){
                newArr.push(str);
            }
        }
    }
    return newArr;  
}

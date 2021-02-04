/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(string === '' || size === 0)
        return '';
    if(!size)
        return string;
        
    let arr = Array.from(string); 
    let curInARow =1;
    let newStr = '';

    newStr += arr[0];
    for(let i =1; i<arr.length; i++)
    {
        if(arr[i] === arr[i-1]){
            curInARow++;
        }
        else
            curInARow = 1;
            
        if(curInARow <= size ){
            newStr +=arr[i];
        }
    }
    return newStr;     
}

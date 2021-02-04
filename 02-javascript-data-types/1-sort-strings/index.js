/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	let k=1;
    if(param == 'desc')
        k=-1;

    return arr.slice().sort((a, b) => +k*a.localeCompare(b, undefined, {caseFirst: 'upper'} ));      
}

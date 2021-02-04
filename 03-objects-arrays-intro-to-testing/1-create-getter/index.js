/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    let str = path.split('.');
    let a;
  
    return function getter(obj){      
      for(let key in obj){
          if(str.includes(key)){
              if(typeof (obj[key]) === 'object'){
                  getter(obj[key]);
              }
              else{ 
                  a = obj[key];
              }
          }
      }
      return a;
    }
}

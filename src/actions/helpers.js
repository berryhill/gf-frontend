export function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

export function encodeQueryData(data) {
   let ret = [];
   for (let d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}

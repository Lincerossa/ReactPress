export default (wpContent, specialChar = '*') => {

  const arr = wpContent.split("")

  return arr
  
    .reduce((acc, val, index) => {

      if(val !== specialChar){ 
        acc[acc.length - 1].push(val)
        return acc
      }

      // qui ho incontrato il valore 
      // controllo se il valore prima era anch'esso speciale
      if(arr[index - 1] === specialChar) {
        acc.push([])
        return acc
      }

      // se non era speciale quello prima controllo quello dopo
      // controllo se il valore prima era anch'esso speciale
      if(arr[index + 1] === specialChar) {
        //non faccio nulla
        return acc
      }

      return acc

    }, [[]])
    .map(str => str.join(''))
    .map(str => {
      if(str.indexOf("Component") === -1) {
        return {
          Component: 'RichText',
          props: {
            text: str
          }
        }
      }

      return JSON.parse(`{${str}}`)
    })




}
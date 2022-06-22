export function titleCase(str) {
  if(!str){
    return;
  }
    return str.toLowerCase().split('-').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  export function crumbTitle(str) {
    if(!str){
      return;
    }
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join('-');
  }
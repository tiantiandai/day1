function obfuscate(ns){
  var len = ns.length;
  var i;

  for(i = 0; i < len; i++){
    if(ns[i] === 'a'){
      ns = ns.replace("a", "4");
    }
    if(ns[i] === 'e'){
      ns = ns.replace("e", "3");
    }
    if(ns[i] === 'o'){
      ns = ns.replace("o", "0");
    }
    if(ns[i] === 'l'){
      ns = ns.replace("l", "1");
    }
  }

  return ns;
}
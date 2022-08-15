function shout(string) {
  return string.toUpperCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function whisper(string){
  return string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string){
  if(string===string.toLowerCase()){
    return `I can't hear you!`
  }
  else if(string===string.toUpperCase()){
    return 'YES INDEED!'
  }  
  else (string===`Let's have dinner together`)
    return 'I would love to!'
}

console.log(shout('hello'));
console.log(whisper('HELLO'));
console.log(sayHiToHeadphonedRoommate('hi'));
logShout('string');
logWhisper('STRING');
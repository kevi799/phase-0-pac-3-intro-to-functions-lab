function shout(string) {
    return string.toUpperCase();
}
console.log(shout('kevin'));  

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper('KEVIN'));  

function logShout(string) {
    return console.log(string.toUpperCase());
    
}
console.log('kevin')

function logWhisper(string) {
    console.log(string.toLowerCase()); 
}

logWhisper("HELLO WORLD");


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else {
        return "Please follow the procedure";
    }
}

console.log(sayHiToHeadphonedRoommate("hello")); 
console.log(sayHiToHeadphonedRoommate("HELLO")); 
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); 


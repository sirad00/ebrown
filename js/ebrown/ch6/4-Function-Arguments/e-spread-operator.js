function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }

    return prefixedWords;
    
}

var rez = addPrefix("con", "1", "2", "3", "4");
console.log(rez);




















// console.log(addPrefix("con", "verse", "vex"));
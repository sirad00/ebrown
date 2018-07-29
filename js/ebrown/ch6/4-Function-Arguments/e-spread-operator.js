function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    console.log(addPrefix("con", "verse", "vex"));
    return prefixedWords;
}
addPrefix(prefix, ...words);
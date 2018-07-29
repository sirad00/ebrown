function getSentence([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}
const arr = ["I", "JavaScript", "me", "love",];
getSentence(arr);
console.log(getSentence(arr));
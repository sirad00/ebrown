function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "love",
    object: "you",
};
getSentence(o);
console.log(getSentence(o) + "!");
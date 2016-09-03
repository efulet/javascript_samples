/**
 * Take a string parameter and replace every letter of the string with the letter 
 * following it in the alphabet (a becomes b, z becomes a, etc). Then, capitalize 
 * every vowel in the new string (a, e, i, o, u).
 * 
 * @author Exequiel Fuentes
 */

let letterChange = (phrase) => {
    return phrase.replace(/[a-z]/gi, (c) => {
        c = String.fromCharCode(c.charCodeAt(0)+1);
        if(c === '{' || c ==='[') c = 'a';
        if(/[aeiuo]/.test(c)) c = c.toUpperCase();
        return c;
    });
};

console.log(letterChange("exequiel fuentes"));


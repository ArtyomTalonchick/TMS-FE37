/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // const map = {};
    // const arr = s.split("");
    // arr.forEach((char) => {
    //     if (map[char]) {
    //         map[char]++;
    //     } else {
    //         map[char] = 1;
    //     }
    // });

    // return arr.findIndex((char) => map[char] === 1);


    let result = -1;
    s.split("").find((char, index, arr) => {
        const finish = arr.indexOf(char) === arr.lastIndexOf(char);
        if (finish) {
            result = index;
        }
        return finish;
    });

    return result;

    // return s.split("").filter((char, index, arr) => index === arr.indexOf(char))[0];

    // return [...new Set(s.split(""))][0];


};

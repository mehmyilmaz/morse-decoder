const MORSE_TABLE = {
    ' ':      ' ',
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decoded = {
    '11': '-',
    '10': '.',
    '**': ' ',
    '0': ''
  };

function decode(expr) {
    let divide = '';
    let result = '';
    let strLeng = expr.split('');
    strLeng.map((el, idx) => {
      if (idx % 10 === 0 && idx !== 0) {
        divide += ',';
      }
      divide += el;
    });
    let resArr = divide.replace(/11/g, '-').replace(/10/g, '.').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').replace(/0/g, '').split(',');
    for (i = 0; i < resArr.length; i++) {
      for (let key in MORSE_TABLE) {
        if (resArr[i] === key) {
          result += MORSE_TABLE[key];
        }
      }
    }
    return result;
};



module.exports = {
    decode
}
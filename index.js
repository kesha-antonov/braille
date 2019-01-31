/**
 * braille
 * https://github.com/Nonemoticoner/braille
 *
 * Copyright (c) 2015-2018 Nonemoticoner
 * Licensed under the MIT license.
 */

var BRAILLE = {
        ' ': '⠀',   // space bar to dot-0
        '_': '⠸',
        '-': '⠤',
        ',': '⠠',
        ';': '⠰',
        ':': '⠱',
        '!': '⠮',
        '?': '⠹',
        '.': '⠨',
        '(': '⠷',
        '[': '⠪',
        '@': '⠈',
        '*': '⠡',
        '/': '⠌',
        '\'': '⠄',
        '\"': '⠐',
        '\\': '⠳',
        '&': '⠯',
        '%': '⠩',
        '^': '⠘',
        '+': '⠬',
        '<': '⠣',
        '>': '⠜',
        '$': '⠫',
        '0': '⠴',
        '1': '⠂',
        '2': '⠆',
        '3': '⠒',
        '4': '⠲',
        '5': '⠢',
        '6': '⠖',
        '7': '⠶',
        '8': '⠦',
        '9': '⠔',
        'А': '⠁',
        'Б': '⠃',
        'В': '⠺',
        'Г': '⠛',
        'Д': '⠙',
        'Е': '⠑',
        'Ё': '⠡',
        'Ж': '⠚',
        'З': '⠵',
        'И': '⠊',
        'Й': '⠯',
        'К': '⠅',
        'Л': '⠇',
        'М': '⠍',
        'Н': '⠝',
        'О': '⠕',
        'П': '⠏',
        'Р': '⠗',
        'С': '⠎',
        'Т': '⠞',
        'У': '⠥',
        'Ф': '⠋',
        'Х': '⠓',
        'Ц': '⠉',
        'Ч': '⠟',
        'Ш': '⠱',
        'Щ': '⠭',
        'Ъ': '⠷',
        'Ы': '⠮',
        'Ь': '⠾',
        'Э': '⠪',
        'Ю': '⠳',
        'Я': '⠫',
        ']': '⠻',
        '#': '⠼',
        ')': '⠾',
        '=': '⠿'
    },

    ASCII = {
        ' ': ' ',   // space bar to space bar
        '⠀': ' ',   // dot-0 to space bar
        '⠸': '_',
        '⠤': '-',
        '⠠': ',',
        '⠰': ';',
        '⠱': ':',
        '⠮': '!',
        '⠹': '?',
        '⠨': '.',
        '⠷': '(',
        '⠪': '[',
        '⠈': '@',
        '⠡': '*',
        '⠌': '/',
        '⠄': '\'',
        '⠐': '\"',
        '⠳': '\\',
        '⠯': '&',
        '⠩': '%',
        '⠘': '^',
        '⠬': '+',
        '⠣': '<',
        '⠜': '>',
        '⠫': '$',
        '⠴': '0',
        '⠂': '1',
        '⠆': '2',
        '⠒': '3',
        '⠲': '4',
        '⠢': '5',
        '⠖': '6',
        '⠶': '7',
        '⠦': '8',
        '⠔': '9',
        '⠁': 'А',
        '⠃': 'Б',
        '⠺': 'В',
        '⠛': 'Г',
        '⠙': 'Д',
        '⠑': 'Е',
        '⠡': 'Ё',
        '⠚': 'Ж',
        '⠵': 'З',
        '⠊': 'И',
        '⠯': 'Й',
        '⠅': 'К',
        '⠇': 'Л',
        '⠍': 'М',
        '⠝': 'Н',
        '⠕': 'О',
        '⠏': 'П',
        '⠗': 'Р',
        '⠎': 'С',
        '⠞': 'Т',
        '⠥': 'У',
        '⠋': 'Ф',
        '⠓': 'Х',
        '⠉': 'Ц',
        '⠟': 'Ч',
        '⠱': 'Ш',
        '⠭': 'Щ',
        '⠷': 'Ъ',
        '⠮': 'Ы',
        '⠾': 'Ь',
        '⠪': 'Э',
        '⠳': 'Ю',
        '⠫': 'Я',
        '⠻': ']',
        '⠼': '#',
        '⠽': 'Y',
        '⠾': ')',
        '⠿': '=',
    };

module.exports = {
    convert: function (character) {
        return !!BRAILLE[character] ? BRAILLE[character] : '?';
    },

    read: function (symbol) {
        return !!ASCII[symbol] ? ASCII[symbol] : '?';
    },

    toBraille: function (text) {
        var upperText, upperTextLength, brailleText, i;

        upperText = text.toUpperCase();
        upperTextLength = upperText.length;
        brailleText = '';

        for (i = 0; i < upperTextLength; i++) {
            brailleText += this.convert(upperText[i]);
        }

        return brailleText;
    },

    toText: function (code) {
        var codeLength, asciiText, i;

        codeLength = code.length;
        asciiText = '';

        for (i = 0; i < codeLength; i++) {
            asciiText += this.read(code[i]);
        }

        return asciiText;
    }
};

function removeLetters() {
    let text = document.getElementById('text_input').value;

    let splitArray = str.split(/[ \.\?,;:!]/);
    let wordsCount = getWordsCount(splitArray);

    let lettersMap = getLettersMap(text);
    
    let letterRepeatMap = calculateLettersRepeatCount(splitArray, lettersMap);

    let newText = "";
    for(let i = 0; i < text.length; i++) {
        if(wordsCount > 0 && letterRepeatMap.get(text[i]) === wordsCount) {
            continue;
        }
        newText += text[i];
    }

    document.getElementById('text_output').value = newText;
}

function getWordsCount(splitString) {
    let count = 0;
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i].length > 0) {
            count++;
        }
    }

    return count;
}

function getLettersMap(str) {
    let stringLetters = new Set(str);
    let lettersMap = new Map();

    for(let letter of stringLetters) {
        lettersMap.set(letter, 0);
    }

    return lettersMap;
}

function calculateLettersRepeatCount(splitString, lettersMap) {
    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i].length == 0) {
            continue;
        }

        let wordSet = new Set(splitString[i]);

        for (let letter of wordSet) {
            lettersMap.set(letter, lettersMap.get(letter) + 1);
        }
    }

    return lettersMap;
}
function removeLetters() {
    let text = document.getElementById('text_input').value;
    let splitArray = splitString(text);

    let temp = removeDuplicates(splitArray.join(''));
    
    for (let i = 0; i < splitArray.length; i++) {
        splitArray[i] = removeDuplicates(splitArray[i]);
    }

    document.getElementById('text_output').value = splitArray.join('');
}

function splitString(str) {
    return str.split(/[ \.\?,;:!]/);
}

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
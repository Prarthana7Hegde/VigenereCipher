function encrypt() {
    let text = document.getElementById("inputText").value;
    let key = document.getElementById("keyText").value;

    if (!key) {
        alert("Key is required!");
        return;
    }

    document.getElementById("outputText").value = vigenereEncrypt(text, key);
}

function decrypt() {
    let text = document.getElementById("inputText").value;
    let key = document.getElementById("keyText").value;

    if (!key) {
        alert("Key is required!");
        return;
    }

    document.getElementById("outputText").value = vigenereDecrypt(text, key);
}

function vigenereEncrypt(plaintext, key) {
    let ciphertext = "";
    let keyIndex = 0;

    for (let char of plaintext) {
        if (/[a-zA-Z]/.test(char)) {
            let offset = (char === char.toUpperCase()) ? 65 : 97;
            ciphertext += String.fromCharCode(
                (char.charCodeAt(0) + key[keyIndex].toLowerCase().charCodeAt(0) - 2 * offset) % 26 + offset
            );
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            ciphertext += char;
        }
    }
    return ciphertext;
}

function vigenereDecrypt(ciphertext, key) {
    let plaintext = "";
    let keyIndex = 0;

    for (let char of ciphertext) {
        if (/[a-zA-Z]/.test(char)) {
            let offset = (char === char.toUpperCase()) ? 65 : 97;
            plaintext += String.fromCharCode(
                (char.charCodeAt(0) - key[keyIndex].toLowerCase().charCodeAt(0) + 26) % 26 + offset
            );
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            plaintext += char;
        }
    }
    return plaintext;
}

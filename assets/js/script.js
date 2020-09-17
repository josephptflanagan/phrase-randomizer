let remixedPhraseEl = document.querySelector("#remixed-phrase");


function randomIndex(arrayLength) {
    return Math.floor(Math.random() * Math.floor(arrayLength))
}

function remix(letterArray) {

    let remixedWord = '';
    let remixed = false;

    if(letterArray.length == 1){
        return letterArray[0];
    }
    else if(letterArray.length == 2){
        return letterArray[1] + letterArray[0];
    }
    else{

        while(!remixed){

            let letter = letterArray.splice(randomIndex(letterArray.length),1);
            remixedWord += letter;

            if (letterArray.length == 1){
                remixedWord += letterArray[0];
                remixed = true;
            }

        }
    }

    return remixedWord;

}

function controller(event) {
    event.preventDefault();

    let userPhrase = document.querySelector('#user-phrase').value.trim();

    if (userPhrase) {

        let wordArray = userPhrase.toLowerCase().split(' ');
        let remixedWordArray = [];

        for (let i = 0; i < wordArray.length; i++) {

            remixedWord = '';
            let word = wordArray[i].split('');
            remixedWordArray.push(remix(word));
        }

        let remixedPhrase = remixedWordArray.join(' ');


        remixedPhraseEl.textContent = remixedPhrase;
    }

}

document.querySelector('#remix-button').addEventListener('click', controller)
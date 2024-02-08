let button = document.querySelector('button');
document.querySelector('button').onclick = write;

function formatText(text) {
    let noPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let capitalized = noPunctuation.charAt(0).toUpperCase() + noPunctuation.slice(1).toLowerCase();
    return capitalized;
}


function write() {
    let fromtext = document.querySelector('.wordInsert').value;
    const targetLanguages = ['be', 'uk', 'pl', 'cs','hr', 'bs', 'sk', 'sl', 'sr', 'bg', 'mk'];
    targetLanguages.forEach(targetLanguage => {
        let apiURL = `https://api.mymemory.translated.net/get?q=${fromtext}!&langpair=ru|${targetLanguage}`;
        fetch(apiURL).then(res => res.json()).then(data => {
            let translate = data.responseData.translatedText;
			translate = formatText(translate);
            console.log (translate);
            document.querySelector(`.${targetLanguage}`).innerHTML = translate;
        });
    });
    if (document.getElementById('result').style.display != 'inline-flex') {
        document.getElementById('result').style.display = 'inline-flex';
    }
    return true;
}

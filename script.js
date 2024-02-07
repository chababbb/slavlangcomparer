//const fromText = document.querySelectorAll('.wordInsert'),
//translate = document.querySelector('button');

let button = document.querySelector('button');
//let fromtext = document.querySelector('.wordInsert').value;
document.querySelector('button').onclick = write;
//fromtext.addEventListener ('input', write());

//if(document.querySelector(".wordInsert").value==="") { 
    //button.disabled = true; 
//} else { 
   // button.disabled = false;
//}

function write() {
    let fromtext = document.querySelector('.wordInsert').value;
    document.querySelector('.late').innerHTML = fromtext;
    const targetLanguages = ['be', 'bs', 'bg', 'cs', 'hr', 'mk', 'pl', 'sk', 'sl', 'sr', 'uk'];

    let totext = document.querySelector('.late').value;

    targetLanguages.forEach(targetLanguage => {
        let apiURL = `https://api.mymemory.translated.net/get?q=${fromtext}!&langpair=ru|${targetLanguage}`;
        fetch(apiURL).then(res => res.json()).then(data => {
            const translate = data.responseData.translatedText + targetLanguage;
            console.log (translate);
            document.querySelector('.late').innerHTML = translate;
        });
    });

    // function showDiv (){}
    if (document.getElementById('result').style.display != 'inline-flex') {
        document.getElementById('result').style.display = 'inline-flex';
    }
    return true;
}

const string = "Привет! Как дела?";
const vovels = ["А", "Е", "Ё", "И", "О", "У", "Э","Ю", "Я", "а", "е", "ё", "и", "о", "у", "э","ю", "я"];
const getVowels = filter =>{
    let extract = "";
    for(let i = 0; i < filter.length; i++) {
        const curentLetter = filter[i];
        if(vovels.includes(curentLetter)){
            extract += curentLetter;
        }
    }
    return extract;
}
console.log(getVowels(string));
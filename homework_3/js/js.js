function statistics(str) {
    var quantityLatter = 0;
    var quantityNumeral = 0;
    var quantityOther = 0;
    for (var i = 0; i <= str.length; i++) {
        if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) ||
            (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) ||
            (1040 <= str.charCodeAt(i) && str.charCodeAt(i) <= 1105)) {
            quantityLatter++;
        } else if (48 <= str.charCodeAt(i) && str.charCodeAt(i) <= 57) {
            quantityNumeral++;
        } else {
            if (str.charCodeAt(i) != 32) {
                quantityOther++;
            }
        }
    }
    return "Letter = " + quantityLatter + "; " + "Number = " + quantityNumeral + "; " + "Other = " + quantityOther;
}

alert(statistics("Строка состоит из 66 букв. Develop program 152@5, & count quantity in string!"));

function changeNameStyle(nameStyle) {
    if (nameStyle.includes("-")) {
        var nameStyleSubstr1 = nameStyle.substring(0, nameStyle.indexOf("-"));
        var nameStyleSubstr2 = nameStyle.substr(nameStyle.indexOf("-") + 1);
        var upperLatter = nameStyleSubstr2.substring(0, 1).toUpperCase();
        nameStyleSubstr2 = upperLatter.concat(nameStyleSubstr2.substr(1));
        return nameStyleSubstr1.concat(nameStyleSubstr2);
    }
}

alert(changeNameStyle("text-align"));

function abbreviation(phrase) {
    var stringArray = phrase.split(" ");
    var abbreviation = "";
    for (var str in stringArray) {
        var letter = stringArray[str].substring(0, 1).toUpperCase();
        abbreviation = abbreviation.concat(letter);
    }
    return abbreviation;
}

alert(abbreviation("cascading style sheets"));

function concatonation(...args) {
    var resultString = "";
    for (var arg in args) {
        resultString = resultString.concat(args[arg]);
    }
    return resultString;
}

alert(concatonation("Пивет", "как дела", "меня зовут", "Борис","qwerty","Grodno Belarus"));

function arraySubstr(str, separator) {
    var arraySubstring = str.split(separator);
    return arraySubstring;
}

alert(arraySubstr("10/08/2018", "/"));
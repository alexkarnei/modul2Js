function statistics(str) {
    var quantityLatter = 0;
    var quantityNumeral = 0;
    var quantityOther = 0;
    for (var i = 0; i <= str.length; i++) {
        if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) ||
            (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 122) ||
            (192 <= str.charCodeAt(i) && str.charCodeAt(i) <= 255)) {
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

alert(statistics("String char 15. Develop program 152@5, & count quantity in string!"));

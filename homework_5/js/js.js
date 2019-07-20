class ExtendedDate extends Date {

    constructor(date) {
        super(date);
    }

    static dateText(date) {
        var number = ["", "Первое", "Второе", "Третье", "Четвертое", "Пятое", "Шестое",
            "Седьмое", "Восьмое", "Девятое", "Десятое", "Одиннадцатое", "Двенадцатое",
            "Тринадцатое", "Четырнадцатое", "Пятнадцатое", "Шестнадцатое", "Скмнадцатое", "Восемнадцатое",
            "Девятнадцатое", "Двадцатое", "Двадцать Первое", "Двадцать второе", "Двадцать третье", "Двадцать четвертое",
            "Двадцать пятое", "Двадцать шестое", "Двадцать седьмое", "Двадцать восьмое", "Двадцать девятое", "Тридцатое",
            "Тридцать первое"];
        var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        var result = number[date.getDate()] + " " + months[date.getMonth()] + " " + date.getFullYear();
        return result;
    }

    static dateCheck(date) {
        var currentDate = new Date();
        return date >= currentDate ? true : false;
    }

    static checkYear(date) {
        if ((date.getFullYear() % 400 === 0) || (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0)) {
            return "Високосный!";
        } else {
            return "Не високосный!";
        }
    }

    static returnNextDate(date) {
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        if (month === 0 || month === 2 || month === 4 || month === 6
            || month === 7 || month === 9) {
            if (day === 31) {
                day = 1;
                month = month + 1;
            } else {
                day = day + 1;
            }
        } else if (month === 11) {
            if (day === 31) {
                day = 1;
                month = 0;
                year = year + 1;
            } else {
                day = day + 1;
            }

        } else if (month === 3 || month === 5 || month === 8 || month === 10) {
            if (day === 30) {
                day = 1;
                month = month + 1;
            } else {
                day = day + 1;
            }
        } else if (month === 1) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                if (day === 29) {
                    day = 1;
                    month = month + 1;
                } else {
                    day = day + 1;
                }
            } else {
                if (day === 28) {
                    day = 1;
                    month = month + 1;
                } else {
                    day = day +1 ;
                }
            }
        }
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        return ExtendedDate.dateText(date);
    }
}

var date = new ExtendedDate("12/31/2020");
document.write("Дата текстом (число и месяц) - " + ExtendedDate.dateText(date) + ";" + "<br>");
document.write("Прошедшая дата или будущая (прошедшая-false, будущая-true) - " + ExtendedDate.dateCheck(date) + ";" + "<br>");
document.write("Високосный год или нет - " + ExtendedDate.checkYear(date) + ";" + "<br>");
document.write("Следующая дата - " + ExtendedDate.returnNextDate(date) + ";");
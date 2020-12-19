let userEnteredMonth;

do {
    userEnteredMonth = prompt("Введите месяц", '');
  } while (!userEnteredMonth);

if (Number.isInteger(+userEnteredMonth) !== false) {
    whatsNumber(userEnteredMonth);
}   else whatsString(userEnteredMonth);
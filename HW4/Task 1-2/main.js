//// TASK 1 ////

console.log(`console.log(2 + "2" == "2" + 2); -- true, 22 == 22. конкатенация строк`);
console.log(`console.log(2 + "3" == "3" + 2); -- false, 23 != 32. конкатенация строк`);
console.log(`console.log("3" + "2" == 3 + 2); -- false 32 != 5. конкатенация`);
console.log(`console.log("3" + "2" == "3" + 2); -- true. 32 = 32. конкатенация`);
console.log(`console.log("3" + "2" == 2 + "3"); -- false. 32 != 23. конкатенация`);
console.log(`console.log(2 + Number ("3") == Number("3") + 2); -- true. 5 == 5`);

console.log(`console.log(12 / "6"); -- Ответ: 2. Бдует преобразование строки "6" в число`);
console.log(`console.log("number" + 15 + 3); -- "number153". конкатенация`);
console.log(`console.log(15 + 3 + "number"); -- "18number". конкатенация`);
console.log(`console.log([1] > null); -- true. Number([1]) > Number(null) => 1 > 0`);
console.log(`console.log("foo" + + "bar"); -- "fooNaN", "foo" + (Number("bar")) => "foo" + NaN`);
console.log(`console.log('true' == true); -- false, Nubmer('true') == Number(true) => NaN == 1`);
console.log(`console.log(false == 'false'); -- false, Number(false) == Number('false') => 0 == NaN`);
console.log(`console.log(null == ''); -- false. toNumber => null == 0. Возможен true только при null >= 0`);
console.log(`console.log(!!"false" == !!"true"); -- true. !!Bolean("false") == !!Bolean("true") => !!true == !!true`);
console.log('console.log([`x`] == `x`); -- true. String([`x`]) == String(`x`) => "x" == "x"');


//// TASK 2 ////

const enemy = {
    name: "Bob"
};
const friend = {
    name: "Alex"
};
const me = friend;

me.name = "Bob";

console.log(`
условия задачи:
const enemy = {
    name: "Bob"
};
const friend = {
    name: "Alex"
};
const me = friend;

me.name = "Bob";

`);

console.log(`console.log(friend.name)
"Bob". 46 строка. me & friend имеют общую ссылку на объект, потому
48 строка. изменения идут на выделенную память под этот объект
и меняется me.name на "Bob", а также friend.name меняется на "Bob"`);
console.log(`
console.log(me === friend); 
true. У них храниться ссылка на один и тот же объект в памяти.`);
console.log(`
console.log(me === enemy); 
false. Хоть свойства одинаковые, но ссылка на память у них разная.`);
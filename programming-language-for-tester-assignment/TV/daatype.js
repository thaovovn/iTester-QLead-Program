//string
let name = 'Thao Vo'
console.log(name);
console.log(typeof name);

//number
let num = 0
console.log(num);
console.log(typeof num);

let weight = 65.0
console.log(typeof weight);

//boolean
let b = false
console.log(typeof b);

//undefined
let a
console.log(typeof a);

//Null
let c = ''
console.log(typeof c);

c = null;
console.log(typeof c);

//object
let browser = {
    "name": "chrome",
    "version": 80,
    "vendor": "Google",
    fun: () => {
        console.log('I eat RAM');
    }
}
console.log(typeof browser);
console.log(browser);
browser.fun();
console.log(browser.name);

//
let browsers = [
    {
        "name": "chrome",
        "version": 90
    },
    {
        "name": "firefox",
        "version": 75
    }
]
console.log(browsers);
console.log(browsers[0].name);
console.log(browsers[0].version);
console.log(browsers[1].version); //failed
console.table(browsers);
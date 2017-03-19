/**
 * Created by Administrator on 2017/3/18.
 */
import  Layer from './layer'
const App = function () {
    const NUM = 1;
    // alert(NUM);
    var app = document.getElementById("app");
    var layer = new Layer();
    app.innerHTML = layer.tpl;
    // console.log(layer);
    let name = 'zach';
    while (true){
        let name = 'obama';
        console.log(name);
        break;
    }
    console.log(name);
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[6](); // 6
    class Animal {
        constructor() {
            this.type = 'animal';
        }

        says(say) {
            setTimeout(
                (hello = 'hualy') => {
                    console.log(this.type + ' says ' + say + hello)
                }, 10000)
        }
    }
    let animal = new Animal();
    animal.says("hua");
    class Cat extends Animal{
        constructor(){
            super();
            this.type = 'cat'
        }
    }
    let cat = new Cat();
    cat.says("hello");
    let obj = {
        count:2
    }
    document.getElementById("template").innerHTML = `There ar <b>${obj.count}</b> items`;
    let dog = {type: 'animal', many: 2}
    let { type, many} = dog
    console.log(type, many);
    function hello(...types) {
        console.log(types);
    }
    hello('a','b','c');




}
new App();
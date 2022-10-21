//alert("HOLA WORLD");

var table = "Normal Table";
let chair = "One chair";
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testString = 'text';
console.log(testString);

let testNumber = 7;
console.log(testNumber);

//Object Boolean
let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

//Object String
let testStringObject = new String('texto por parametro');
console.log(testStringObject);

//Object Number
let testNumberObject = new Number(7);
console.log(testNumberObject);

//Concatenacion variables JS
let tName = "John";
let tSurname = "Doe";
let question = "How are you "+tName+" "+tSurname+"?";
console.log(question);

//Concatenacion pt.2 string.concat(string)
let concatName = "John";
let concatSurname = "Doe";
let concatQuestion = "How are you ".concat(concatName)+" ".concat(concatSurname)+"? -concat-";
console.log(concatQuestion);

//Backticks para interpolar strings
let bName = "John";
let bSurname = "Doe";
let bAge = 23;
let bQuestion = `How old is ${bName} ${bSurname}?`
let bAnswer = "He is "+bAge+" years old"
console.log(bQuestion);
console.log(bAnswer);


//Aritmetica
// suma, resta, multiplicacion, division
let operadorA = 12;
let operadorB = 6;
let suma = operadorA + operadorB;
let resta = operadorA - operadorB;
let multiplicacion = operadorA * operadorB;
let division = operadorA / operadorB;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

// exponenciacion; incremento o decremento
let operadorC = 3
let operadorD = 3
let expo = operadorC ** operadorD;
let incr = ++operadorC;
let decr = --operadorD;
console.log(expo)
console.log(incr)
console.log(decr)

// operadores de asignacion
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);


//typeof, null y undefined
//typeof
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

//null
let testNull = null;
console.log(typeof(testNull));

//undefined
let testUndefined;
console.log(testUndefined);

//ARRAY
//Definir Array
var primerArray = [];
var segundoArray = new Array(3);
var tercerArray = new Array(3,5);
var cuartoArray = new Array(3,5,"Sevilla",true,tercerArray);
console.log(primerArray)
console.log(segundoArray)
console.log(tercerArray)
console.log(cuartoArray)

//Array access
console.log(tercerArray[1])
console.log(cuartoArray[4][0]);

//Array push
console.log(cuartoArray.push("Spain"))
console.log(cuartoArray)

//Array unshift
cuartoArray.unshift(1);
console.log(cuartoArray);

//For, For Each
for(var i = 0; i<cuartoArray.length; i++){
    console.log("Entramos en la iteracion de "+cuartoArray[i]);
}


//if else elseif
let aux = 3;
if(aux > 0){
    console.log("Positivo");
} else if (aux < 0) {
    console.log("number negative")
}

//Eventos
function myFirstFunction(){
    console.log("Thank you for your click");
}
function mySecondFunction(){
    console.log("Thank you for your interest.");
}


//Funciones
function $(selector){
    return document.querySelectorAll(selector);
} 
console.log($("#my_third_div"))

//Function types
var numbers = [1,2,3,4];
var n_elevator_2 = numbers.map(function(n){ return n+n; })
console.log(n_elevator_2);

//Create DOM Nodes I
$("#eButton").addEventListener("click",function(){var input=document.createElement("input");
console.log(input)})

//DOM III
function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i = elements.length-1;i>=0;i--){
        let el = elements[i];
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none";
        })
    }
}

function myAlert(msg){
    console.log($("body").children[1]);
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    var close = document.createElement("span");
    close.style.float = "right";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}

//Split
var Stringeazo = "A,b,c,d,e,f,2,3,44,43";
var testArray = testString.split(",");
console.log(Stringeazo);

//Join
var testJoin = testArray.join(".");
console.log(testJoin);

//Filter
var testArray4 = [10,2,3,5,9];
var pairNumber = testArray.filter((num))=>{
    return num%2==0;
}
console.log(pairNumber);


//Callbacks
setTimeout(function(){
    console.log("Hello World!");
}, 2500);

//Closures
document.getElementById("btn").addEventListener("click",()=>{
    console.log("Click detected");
})

//JSON
var course = {
    title: "Course JS",
    section: 4,
    subsection: 6,
    teacher: "Yo",
    intro: function(){
        console.log("Welcome to "+this.title+" with "+this.section+" sections")
    },
    function2: function(){
        console.log("Segunda function");
    }
}
console.log(course["intro"]);

// Js -> browser (console)

// let name = 'Ahmad'      // data_type = srtingsdocu
// let age =   18         // d_t = int
// let city = 'Lahore'   // d_t = strings
// let marks = 90.5     // d_t = float
// let status = false  //  d_t = boolean

// // output
// console.log(name)
// console.log(age)

// operators: 
// arithmetic(+, -, *, /)
// assignment(=, +=, -=)
// comparison(>, < , ==, >=, <=) 
// logical(and, or, not)

//defining a function
// function greet(){
    // block of a function
    // console.log('Hello, Guest')
// }

// calling a function
// greet()

// function to add to numbers

// function addValues(a,b){
//     console.log(a + b)
// }
// addValues(5 , 10)
// addValues(2 , 4)

// JS HTML DOM
// document.getElementById('text').innerHTML = 'Text written by JS'
// document.querySelector('h1').innerText = 'Text written by JS'

// function get_text(){
//     document.getElementById('text').innerHTML = 'Text written by JS'
// }

// document.querySelector('#btn_text').addEventListener('click', get_text)



// function get_color(){
//     document.getElementById('text').style.color = 'red'
// }

// document.querySelector('#btn_color').addEventListener('click', get_color)


// let btn = document.getElementById('btn')
// let text = document.getElementById('text')


// btn.addEventListener('click', function(){
//     text.style.color = 'yellow'
//     text.style.backgroundColor = 'black'
//     text.style.textDecoration = 'underline'
// }
// )



// function greet(name){
//     console.log('Hello , ' +name)
// }

// greet('Ahmed')






// arrow function (anonymous, inline function)

// let greet = (name) => console.log('Hello , ' +name)
// greet('Ahmed')


// btn.addEventListener('click' , () =>{
//     text.style.fontWeight = 'lighter'
// })


// array

// city = 'Lahore'

// cities = ['Lahore', 'Karachi', 'Multan', 'Pindi', 'Shampi'] // array of strings //no. of characters

// console.log(cities)

// accessing specfic values in an array
// indexing

// console.log(cities[1])
// let x = cities[0]
// console.log(x)

// assigning a new value

// cities[2] = 'Sialkot'
// console.log(cities)


// properties and methods  , a function that perform some operation on changes in array 

// console.log(cities.length) // property  
// cities.push('Gujranwala') // method
// let y = cities.pop()
// console.log(cities)
// console.log(y)





// loop





// Calculator using html , tailwind and js

function calculator(operator){
    let n1 = parseFloat(document.getElementById('num1').value)
    let n2 = parseFloat(document.getElementById('num2').value)
    let result = 0

    if(operator === '+') result = n1 + n2
    else if(operator === '-') result = n1 - n2
    else if(operator === 'X') result = n1 * n2
    else if(operator === '/') result = n1 / n2
    else result = 'Error: Operator not valid'

    document.getElementById('result').innerText = result

    // document.querySelector('#clear').addEventListener('click' , () =>{
    //     document.getElementById('num1').value = 0
    //     document.getElementById('num2').value = 0
    // })
}

function clearvals(){
      document.getElementById('num1').value = ""
      document.getElementById('num2').value = ""
      document.getElementById('result').innerText = ""
       
}


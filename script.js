let name = 'Alex'
let money = 10000
let account = 7777
let user = prompt("Как вас зовут?")



if(user === name){
    alert('Welcome')
    if (prompt('Номер счета?') === account){
    alert('Identified')} else{
        alert('Пользователь не найден, досвидули')
    }
    if(prompt('Сколько обналичить?')<= money){
        alert('Все отлично')
    } else(
        alert('Недостаточно средств')
    )
} else{
    alert('Пользователь не найден, досвидули')
}




let userName = prompt('What is your name').trim()
let age = prompt('How old are you?')



if(userName[0]=== 'A' || userName[0]=== 'a'){
    alert('Welcome')
} else {
    alert('You are not invited')
}
if(age >= 18 && age <=40){
    alert('That is great!')
} else{
    alert('Sorry :(')
}
if(prompt('Do you have 100$?') === true){
    alert('Completely pleased to have you here!')
} else{
    alert('Sorry, go home')
}
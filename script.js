let name = 'Alex'
let money = 10000
let account = 7777
let user = prompt("Как вас зовут?")
let bill = prompt('Номер счета?')
let ask = prompt('Сколько обналичить?')

if (user === name) {
   
    if (+bill === account) {
        
        if (ask <= money) {
        alert('Все отлично')
        console.log(`Осталось на счету: ${money - ask}`);
        console.log(`Снято: ${ask}`);
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Пользователь не найден')
    }
} else {
    alert('Пользователь не найден')
}




let userName = prompt('What is your name').trim()
let age = prompt('How old are you?')



if (userName[0] === 'A' || userName[0] === 'a') {
    
    if (age >= 18 && age <= 40) {
    
        if (prompt('How much $ can you invest?') >= 100) {
            alert('Welcome')
        } else {
            alert('Sorry')
            }
    } else {
        alert('Sorry')
    }
} else {
    alert('Sorry')
}
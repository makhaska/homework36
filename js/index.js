
let obj1 = {
    name: "alex".toLocaleLowerCase(),
    account: 1111,
    money: 1000,
}
console.log(obj1);// ПЕРВЫЙ ЮЗЕР

let obj2 = {
    name: "maxa".toLocaleLowerCase(),
    account: 2222,
    money: 2000,
}
console.log(obj2); // ВТОРОЙ ЮЗЕР

let obj3 = {
    name: "tima".toLocaleLowerCase(),
    account: 3333,
    money: 3000,        
}
console.log(obj3);//ТРЕТИЙ ЮЗЕР



let ask = prompt("введите имя").toLocaleLowerCase()  // ОБЩИЙ ПРОМТ  ИМЯ

if (ask == obj1.name) {    //ВХОД ДЛЯ ПЕРВОГО ЮЗЕРА
    let acc = +prompt("введите пароль")
    if (acc == obj1.account) {
        let summa = +prompt("введите сумму")
        if (obj1.money >= summa) {

            let procent50 = obj1.money / 100 * 50 // 50%
            let procent80 = obj1.money / 100 * 80 // 80%
            let nalog5 = summa / 100 * 5     // ЭТО НАЛОГ 5%
            let nalog3 = summa / 100 * 3      // ЭТО НАЛОГ 3%

            if (procent80<=summa) {   // если сумма выше 80% то налог 0
                alert(`Вы сняли  ${summa} без налога`)
            }
            else if (procent50 >= summa) {   // если сумма меньше 50% то налог5%
                alert(`Вы сняли  ${summa + nalog5} с учётом 5% налогов`)
            }
            else if (procent50<= summa ) {   // если сумма больше 50% налог3%
                alert(`Вы сняли  ${summa + nalog3} с учётом 3% налогов`)
            }
            
             else {
                alert("Не удачная попытка")
            }

        }
        else {
            alert("не достаточно средств!")
        }
    }
    else {
        alert("не верный пароль!")
    }

    
}


if (ask == obj2.name) {    //ВХОД ДЛЯ ВТОРОГО ЮЗЕРА
    let acc = +prompt("введите пароль")
    if (acc == obj2.account) {
        let summa = +prompt("введите сумму")
        if (obj2.money >= summa) {

            let procent50 = obj2.money / 100 * 50 // 50%
            let procent80 = obj2.money / 100 * 80 // 80%
            let nalog5 = summa / 100 * 5     // ЭТО НАЛОГ 5%
            let nalog3 = summa / 100 * 3      // ЭТО НАЛОГ 3%

            if (procent80<=summa) {   // если сумма выше 80% то налог 0
                alert(`Вы сняли  ${summa} без налога`)
            }
            else if (procent50 >= summa) {   // если сумма меньше 50% то налог5%
                alert(`Вы сняли  ${summa + nalog5} с учётом 5% налогов`)
            }
            else if (procent50<= summa ) {   // если сумма больше 50% налог3%
                alert(`Вы сняли  ${summa + nalog3} с учётом 3% налогов`)
            }
            
             else {
                alert("Не удачная попытка")
            }

        }
        else {
            alert("не достаточно средств!")
        }
    }
    else {
        alert("не верный пароль!")
    }
}



if (ask == obj3.name) {    //ВХОД ДЛЯ ТРЕТЬЕГО ЮЗЕРА
    let acc = +prompt("введите пароль")
    if (acc == obj3.account) {
        let summa = +prompt("введите сумму")
        if (obj3.money >= summa) {

            let procent50 = obj3.money / 100 * 50 // 50%             
            let procent80 = obj3.money / 100 * 80 // 80%
            let nalog5 = summa / 100 * 5     // ЭТО НАЛОГ 5%
            let nalog3 = summa / 100 * 3      // ЭТО НАЛОГ 3%

             if (procent80<=summa) {   // если сумма выше 80% то налог 0
                alert(`Вы сняли  ${summa} без налога`)
            }
            else if (procent50 >= summa) {   // если сумма меньше 50% то налог5%
                alert(`Вы сняли  ${summa + nalog5} с учётом 5% налогов`)
            }
            else if (procent50<= summa ) {   // если сумма больше 50% налог3%
                alert(`Вы сняли  ${summa + nalog3} с учётом 3% налогов`)
            }
            
             else {
                alert("Не удачная попытка")
            }

        }
        else {
            alert("не достаточно средств!")
        }
    }
    else {
        alert("не верный пароль!")
    }
    
}
else {
    alert("не верное имя пользователя!")    // ВХОД ТОЛЬКО ДЛЯ 3 ЮЗЕРОВ
}



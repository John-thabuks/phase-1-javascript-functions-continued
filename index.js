// code your solution here
function saturdayFun(defaultString = "roller-skate"){
    return `This Saturday, I want to ${defaultString}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function saturdayFun(defaultString = 'roller-skate'){
    return `This Saturday, I want to ${defaultString}!`;
}

function mondayWork(defaultString = 'go to the office'){
    return `This Monday, I will ${defaultString}.`;
}

function wrapAdjective(dafaultString = "*"){
    return function (defaultSpecial = "special"){
        return `You are ${dafaultString}${defaultSpecial}${dafaultString}!` 
    }
}

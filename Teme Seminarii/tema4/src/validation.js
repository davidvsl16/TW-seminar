//Example Function

const orderCoffee = (type) => {
    const types = {
        SPECIAL : 'SPECIAL',
        REGULAR : 'REGULAR'
    }

    if(Object.values(types).indexOf(type) === -1){
        throw new Error('coffee error')
    }else{
        console.log(`preparing ${type} coffee`)
    }
}

try{
    orderCoffee('REGULAR');
    orderCoffee('SWEET_COFFE_NO_SUGAR_NO_CAFFEINE')
}catch (err){
    console.warn(err);
}

//Function increaseSalary

const increaseSalary =( salaries, percentage) => {
    
    //Validate parameters
    if(!Array.isArray(salaries)){
        throw new Error('First parameter is not an array !');
    }

    if(typeof percentage != 'number'){
        throw new Error('Second parameter is not a number!');
    }

    return salaries.map(salary => {
        if(typeof salary !== 'number'){
           throw new Error('All elements in the array must be numbers');  
        }

        return salary + (salary * percentage/100);
    })
}

//Example

try{
    const result = increaseSalary([100, 200, 300], 10);
    console.log('Increased salaries: ', result);
}catch (err){
    console.warn(err.message);
}

try{
    const result = increaseSalary("nothing", 10);
    console.log('Increased salaries: ', result);
}catch (err){
    console.warn(err.message);
}

function convertFahrToCelsius(Fahr) {


    if (Fahr == null) {
        console.log('please Enter an input value of farenheit for conversion')
        return('please Enter an input value of farenheit for conversion')
    }
    else {
        let regex = /[a-zA-Z]/
        regexResult = regex.test(Fahr)
        if (regexResult === true && typeof Fahr !== 'object' && Fahr !== null) {
            console.log('"${Fahr}"', 'is not a valid number but a/an ${typeof Fahr}' )
            return('"${Fahr}"', 'is not a valid number but a/an ${typeof Fahr}' )


        }
        else if (Array.isArray(Fahr) === true) {
            console.log(Fahr, 'is not a valid number but a/an array')
            return(Fahr, 'is not a valid number but a/an array')
        }
        else if (typeof Fahr === 'object' && typeof Fahr !== null && !Array.isArray(Fahr)) {
            console.log(Fahr, 'is not a valid number but a/an object')
            return(Fahr, 'is not a valid number but a/an object')

        }
        else {
            let F = Number(Fahr)

            let C = ((F-32) * 100) / 180
            console.log(C.toFixed(4));
            return(C.toFixed(4));
            
        }
    }

}
convertFahrToCelsius('true')


checkYuGiOh = (n) => {

    if (n == null) {
        console.log('please Enter an input value for testing')
        return('please Enter an input value for testing')
    }
    else {
        let regex = /[a-zA-Z]/
        regexResult = regex.test(n)
        if (regexResult === true && typeof n !== 'object') {
            console.log('invalid parameter:', '${n}', 'is a/an ${typeof n}');
            return('invalid parameter:', '${n}', 'is a/an ${typeof n}');
        }
        else if (Array.isArray(n) === true) {
            console.log('invalid parameter:', n, 'is an array');
            return('invalid parameter:', n, 'is an array');
        }
        else if (typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
            console.log('invalid parameter:', n, 'is an object');
            return('invalid parameter:', n, 'is an object');
        }
        else {

            let num = Number(n)

            let result = []
            for (let i = 1; i <= num; i++) {
                if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
                    result.push('yu')
                }
                else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
                    result.push('gi')
                }
                else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
                    result.push('oh')
                }
                else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
                    result.push('gi-oh')
                }
                else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
                    result.push('yu-oh')
                }
                else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
                    result.push('yu-gi')
                }
                else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
                    result.push('yu-gi-oh')
                }
                else {
                    result.push(i)
                }

            }
            console.log(result);
            return(result);

        }

    }
}

checkYuGiOh(false);


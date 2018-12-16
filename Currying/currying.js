function sum(a, b, c) {
    return a+b+c
}
console.log(sum(1,2,3))

function sum1(a) {
    return function(b) {
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum1(1,2,3))
console.log ('curryng js5', sum1(1)(2)(3) )

const sum3 = a => b => c => a + b + c

console.log('curring es6', sum3(1,2,3))
console.log('curring es6', sum3(1)(2)(3))

// const multi = (a, b) => a * b
const multi = a => b => a * b
const double = multi(2)

console.log('test' ,multi(3))
console.log('Подвоюємо число', double(4))


// --------------------
const films = ['The Lion King', 'Toy Story', 'Monsters, Inc.']

function compareString(a, b) {
    return a > b
}

films.sort(compareString)

console.table(films)


// --------------------
const films2 = [
    {year: 1994, title: 'The Lion King'},
    {year: 1995, title: 'Toy Story'},
    {year: 2001, title: 'Monsters, Inc.'}
]
// function compareString2(a, b) {
//     return a.year < b.year
// }
function createSort(property) {
    return function compareString2(a, b) {
        return a[property] < b[property]
    }
}
const sortByTitle = createSort('title'),
      sortByYear = createSort('year')
// films2.sort(compareString2)
films2.sort(sortByYear)

console.table(films2)

// --------------------------------
const films3 = [
    {
        year: 1994, 
        title: 'The Lion King',
        data: {
            runningTime: 88
        }
    },
    {
        year: 1995, 
        title: 'Toy Story',
        data: {
            runningTime: 81
        }
    },
    {
        year: 2001, 
        title: 'Monsters, Inc.',
        data: {
            runningTime: 92
        }
    }
]

function createSort3(handle) {
    return function compareString3(a, b) {
        return handle(a) > handle(b)
    }
}

function getProperty(property) {
    return function(object) {
        return object[property]
    }
}

function compose(...funcs) {
    return function(firstValue) {
        return funcs.reduce(
            (value, func) => func(value),
            firstValue
        )
    }
}

const getTitle = getProperty('title'),
      getYear = getProperty('year'),
      getData = getProperty('data'),
      getRunningTime = getProperty('runningTime'),
      getDataRunningTime = compose(getData, getRunningTime),
      sortByTitle3 = createSort3(getTitle),
      sortByYear3 = createSort3(getYear),
      sortByRunningTime = createSort3(getDataRunningTime)

films3.sort(sortByRunningTime)

console.table(films3)



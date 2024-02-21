import { callData } from "./fetch.js"
callData()


let m = 3
let nums = []

for (let i = 0 + 1; i < m + 1; i++) {
    if (m % i == 0) {
        nums.push(i)
    }
}

if (nums.length > 2) {
    console.log("not prime")
}

console.log(nums)







let injectHere = document.getElementById('injectHere')
let pageNumber = document.getElementById('pageNumber')

let IdFirst = document.getElementById('IdFirst')
let IdLast = document.getElementById('IdLast')
let IdEmail = document.getElementById('IdEmail')
let IdAge = document.getElementById('IdAge')
let IdHeight = document.getElementById('IdHeight')
let IdId = document.getElementById('IdId')

let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')
let option5 = document.getElementById('option5')

let nextBtn = document.getElementById('nextBtn')
let prevBtn = document.getElementById('prevBtn')

let add = 10;
let start = 0
let addToMe = 10
let pageCount = 1;
let maxPageCount = Math.ceil(100 / add)

let globalArray = [];






nextBtn.addEventListener('click', async function () {
    if (pageCount < maxPageCount) {
        start += add
        addToMe += add
        pageCount++
        createRows()
        pageNumber.textContent = pageCount;
    }

})

prevBtn.addEventListener('click', function () {

    if (pageCount > 1) {
        pageCount--
        start -= add
        addToMe -= add
        createRows()
        pageNumber.textContent = pageCount;
    }

})


option1.addEventListener('click', function () {
    pageCount = 1
    start = 0
    add = 10
    addToMe = 10
    maxPageCount = Math.ceil(100 / add)
    pageNumber.textContent = pageCount;
    createRows()
})
option2.addEventListener('click', function () {
    pageCount = 1
    start = 0
    add = 20
    addToMe = 20
    maxPageCount = Math.ceil(100 / add)
    pageNumber.textContent = pageCount;
    createRows()
})
option3.addEventListener('click', function () {
    pageCount = 1
    start = 0
    add = 30
    addToMe = 30
    maxPageCount = Math.ceil(100 / add)
    pageNumber.textContent = pageCount;
    createRows()
})
option4.addEventListener('click', function () {
    pageCount = 1
    start = 0
    add = 40
    addToMe = 40
    maxPageCount = Math.ceil(100 / add)
    pageNumber.textContent = pageCount;
    createRows()
})
option5.addEventListener('click', function () {
    pageCount = 1
    start = 0
    add = 50
    addToMe = 50
    maxPageCount = Math.ceil(100 / add)
    pageNumber.textContent = pageCount;
    createRows()
})









IdFirst.addEventListener('click', async function () {

    SortFirstName()

})
IdLast.addEventListener('click', async function () {

    SortLastName()

})
IdEmail.addEventListener('click', async function () {

    SortEmail()

})
IdAge.addEventListener('click', async function () {

    SortAge()

})
IdHeight.addEventListener('click', async function () {

    SortHeight()

})
IdId.addEventListener('click', async function () {

    Load()

})


const Load = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Id;
        let nameB = b.Id;

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()


}

const SortFirstName = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.FirstName.toLowerCase();
        let nameB = b.FirstName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}
const SortLastName = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.LastName.toLowerCase();
        let nameB = b.LastName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}

const SortEmail = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Email.toLowerCase();
        let nameB = b.Email.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}

const SortAge = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Age
        let nameB = b.Age

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}

const SortHeight = async () => {



    globalArray.sort((a, b) => {
        let nameA = a.Height
        let nameB = b.Height

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })
    createRows()



}









async function createRows() {
    injectHere.innerText = ""





    globalArray.slice(start, addToMe).map(person => {

        console.log(globalArray.slice(start, addToMe).length)

        let row = document.createElement('row')
        row.className = "row rowEdit"
        let div1 = document.createElement('div')
        div1.className = 'col-1'
        div1.textContent = person.Id
        let div2 = document.createElement('div')
        div2.className = 'col-2'
        div2.textContent = person.FirstName

        let div3 = document.createElement('div')
        div3.className = 'col-2'
        div3.textContent = person.LastName

        let div4 = document.createElement('div')
        div4.className = 'col-3'
        div4.textContent = person.Email

        let div5 = document.createElement('div')
        div5.className = 'col-2'
        div5.textContent = person.Age

        let div6 = document.createElement('div')
        div6.className = 'col-2'
        div6.textContent = person.Height

        row.appendChild(div1)
        row.appendChild(div2)
        row.appendChild(div3)
        row.appendChild(div4)
        row.appendChild(div5)
        row.appendChild(div6)
        injectHere.appendChild(row)
    })

}

// console.log(globalArray)
// if (globalArray == []) {
//     await SortFirstName()
//     console.log(SortFirstName())
//     console.log("SDfsd")
// }

window.onload = async () => {
    globalArray = await callData()
    createRows(globalArray)
}




// SortFirstName()
// SortLastName()
// SortEmail()
// SortAge()
// SortHeight()
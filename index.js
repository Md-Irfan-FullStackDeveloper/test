
let cardData;
function getData () {
    fetch('http://localhost:3000/data')
        .then((res) => res.json())
        .then((data) => {
            cardData = data
            displayData(cardData)
        })
        .catch((err) => console.log(err))
}

getData()

function displayData (data) {
    console.log(data);
    const container = document.querySelector('.container')
    data?.forEach((el) => {

        const card = document.createElement('div')
        card.className = 'card'

        const img = document.createElement('img')
        img.src = 'https://github.com/metapercept/CodeExcercise/blob/master/Excercise-1/relatedfiles/Images/API-Documentation.jpg?raw=true'

        const tittle = document.createElement('h3')
        tittle.textContent = el.Name

        const details = document.createElement('p')
        details.textContent = el.ShortDesc

        const button = document.createElement('button')
        button.textContent = 'View'

        card.append(img, tittle, details, button)
        container.append(card)
    })
}
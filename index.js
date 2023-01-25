// getting the div conatiner

var containerDiv = document.getElementsByClassName('container')
containerDiv[0].style.backgroundColor = 'red'
/* Created with https://www.css-gradient.com */
containerDiv[0].style.width = '100vw'
containerDiv[0].style.height = '100%'
containerDiv[0].style.display = 'flex'
containerDiv[0].style.alignItems = 'center'
// containerDiv[0].style.justifyContent = 'space-around'
containerDiv[0].style.flexDirection = 'column'
containerDiv[0].style.backgroundColor = '#2f2f2f'


// creating firstdive for keyName

var keyName = document.createElement('div')
keyName.style.backgroundColor = '#fe6f27'
keyName.style.height = '20vh'
keyName.style.width = '50vw'
keyName.style.padding = '2rem'
keyName.style.borderRadius = '10px'
keyName.style.display = 'flex'
keyName.style.alignItems = 'center'
keyName.style.justifyContent = 'center'
keyName.style.fontSize = '3rem'
keyName.style.textAlign = 'center'
keyName.style.margin = ' 1rem 0'
keyName.style.color = ' white'



// creating secondDiv for keyCode

var keyCode = document.createElement('div')
keyCode.style.backgroundColor = 'white'
keyCode.style.height = '20vh'
keyCode.style.width = '50vw'
keyCode.style.padding = '2rem'
keyCode.style.borderRadius = '10px'
keyCode.style.display = 'flex'
keyCode.style.alignItems = 'center'
keyCode.style.justifyContent = 'center'
keyCode.style.fontSize = '3rem'
keyCode.style.textAlign = 'center'


// appending the created divs to the container div

containerDiv[0].appendChild(keyName)
keyName.textContent = 'Press any key to start'

// main function

const bodyelement = document.querySelector('body')
bodyelement.addEventListener('keydown', e => {
    containerDiv[0].appendChild(keyCode)
    console.log(e.key, e.keyCode)
    if (e.keyCode == 32)
        keyName.textContent = `You pressed: Space`
    else
        keyName.textContent = `You pressed: ${e.key}`
    keyCode.textContent = `Keycode is: ${e.keyCode}`

console.log(navigator.userAgent)
})

if(navigator.userAgent.match(/Mobile|Android/i)) {
    // change keyName and keyCode elements to input elements
   alert('Pleae open this page in your computer!')
}



//saves the title position
const header = document.querySelector('h1')
//get the app div
const app = document.getElementById('app')
//top menu buttons container
let ddMenu = ''
//save all svgs
const sandwitch = document.querySelectorAll('svg')
//save the document
const html = document.documentElement
//toggle theme
const toggleTheme = () => html.classList.toggle('dark')
//set title
const setView = (v) => {
    header.innerText = v
    toggleMenu(true)

    if (v === 'Calculator') {
        renderCalculator()
    } else if (v === 'About') {
        renderAbout()
    } else if (v === 'Contact') {
        renderContact()
    }
}
//toggle the menu
const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    } else {
        ddMenu.classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')
    }
}
//add row to calculator
const addRow = (container, content) => {
    const row = `<div class='grid grid-cols-5 gap-2'>${content}</div>`
    container.insertAdjacentHTML('beforeend', row)
}
//add text field where the result is rendered
const addMonitor = (container, text) => {
    const t = text ?? ''
    const monitor = `<div id='monitor' class="bg-white border-4 border-blue-400 h-20 flex items-center col-span-5 text-blue-800 p-2 rounded-lg mb-2 font-bold text-4xl">${t}</div>`
    container.insertAdjacentHTML('beforeend', monitor)
}
//create buttons for calculator
const button = (text) => {
    const c = text === 'calculate' ? 'col-span-4' : ''
    return `<div class='dark:bg-black bg-blue-400 hover:bg-blue-600 text-white ${c} py-1 rounded-md text-center text-lg font-bold cursor-pointer d-btn'>${text}</div>`
}
//add buttons and rows to calculator
const addButtons = (container, nums) => {
    const btnHTML = nums.map((n) => button(n)).join('')
    addRow(container, btnHTML)
}
//add click event to buttons, paste digit or return a calculation/clear result from monitor
const click = (event) => {
    const monitor = document.getElementById('monitor')
    const bac = monitor.innerText.trim()
    const a = event.target.innerText
    console.log(a)
    if (a === 'clear') {
        monitor.innerText = ''
    } else if (a === 'calculate') {
        monitor.innerText = bac + '=' + eval(bac)
    } else {
        monitor.innerText += a
    }
}
//render calculator
const renderCalculator = () => {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear']
    app.innerHTML = ''
    addMonitor(app)
    addButtons(app, labels)
    const buttons = document.querySelectorAll('.d-btn')
    buttons.forEach((el) => el.addEventListener('click', click))
}
//render the about title
const renderAbout = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for About</div>'
}
//render the contact title
const renderContact = () => {
    app.innerHTML = '<div class="p-4 h-[200px] flex items-center justify-center">Temp for Contact</div>'
}
//render the menu
const renderMenu = () => {
    const toggleMenuBButton = `<button class="block sm:hidden" onclick="toggleMenu()">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="#ffffff"
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                    <svg
                        class="hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 384 512"
                    >
                        <path
                            fill="#ffffff"
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                        />
                    </svg>
                </button>
    `
    const hiddenMenu = ` <div
                    class="absolute top-[56px] left-0 bg-blue-300 p-3 hidden w-full"
                    id="ddMenu"
                >
                    <button
                        class="block py-1 px-2"
                        onclick="setView('Calculator')"
                    >
                        Calculator
                    </button>
                    <button
                        class="block py-1 px-2"
                        onclick="setView('About')"
                    >
                        About
                    </button>
                    <button
                        class="block py-1 px-2"
                        onclick="setView('Contact')"
                    >
                        Contact
                    </button>
                </div>
    `
    const topBarButtons = `<div class="justify-start gap-4 hidden sm:flex">
                    <button onclick="setView('Calculator')">Calculator</button>
                    <button onclick="setView('About')">About</button>
                    <button onclick="setView('Contact')">Contact</button>
                </div>
    `
    document.getElementById('topMenu').innerHTML = `
                ${toggleMenuBButton}
                ${hiddenMenu}
                ${topBarButtons}
                <div id='themeContainer'>
                   
                </div>`
    ddMenu = document.querySelector('#ddMenu')
}
//render theme buttons togglers
const renderThemeToggle = () => {
    const themeContainer = document.getElementById('themeContainer')
    const btns = [document.createElement('button'), document.createElement('button')]
    btns.forEach((btn, index) => {
        btn.classList.add(...(index === 0 ? ['dark:hidden', 'block'] : ['hidden', 'dark:block']))
        btn.textContent = index === 0 ? 'Dark' : 'Light'
        btn.addEventListener('click', toggleTheme)
        themeContainer.appendChild(btn)
    })
}
//call the functions to render everything
renderMenu()
renderThemeToggle()
renderCalculator()

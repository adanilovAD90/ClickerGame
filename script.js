const heroFox = document.querySelector('#heroFox');
const scoreFox = document.querySelector('#scoreFox');
const heroDuck = document.querySelector('#heroDuck');
const scoreDuck = document.querySelector('#scoreDuck');
const button = document.querySelector('#button');
const fieldOne = document.querySelector('.fieldOne');
const fieldTwo = document.querySelector('.fieldTwo');
const heroes = document.querySelector('.heroes');
const menuButton = document.querySelectorAll('.menuButton');

const start = () => {
    setScoreFox(getScoreFox());
    setScoreDuck(getScoreDuck());
    setImageFox();
    setImageDuck();
}

const setScoreFox = (score) => {
    localStorage.setItem('scoreFox', score);
    scoreFox.textContent = score;
    if (document.getElementsByName('hero')[0].checked) {
        console.log('test')
    }
}

const getScoreFox = () => {
    return Number(localStorage.getItem('scoreFox')) ?? 0;
}

const addNumberFox = () => {
    setScoreFox(getScoreFox() + 1);
    setImageFox();
}

const setImageFox = () => {
    if (getScoreFox() >= 25) {
        heroFox.setAttribute('src', './assets/fox_heavy_armor.jpg')
    } else if 
    (getScoreFox() >= 10) {
        heroFox.setAttribute('src', './assets/fox_lether_armor.jpg')
    }
}

const setScoreDuck = (score) => {
    localStorage.setItem('scoreDuck', score);
    scoreDuck.textContent = score;
}

const getScoreDuck = () => {
    return Number(localStorage.getItem('scoreDuck')) ?? 0;
}

const addNumberDuck = () => {
    setScoreDuck(getScoreDuck() + 3);
    setImageDuck();
}

const setImageDuck = () => {
    if (getScoreDuck() >= 50) {
        heroDuck.setAttribute('src', './assets/duck_heavy_armor.jpg')
    } else if (getScoreDuck() >= 25) {
        heroDuck.setAttribute('src', './assets/duck_lether_armor.jpg')
    }
}

button.addEventListener('click', () => {
    let ele = document.getElementsByName('hero');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == 'fox') {
                fieldOne.style.setProperty("display", "flex");
                heroes.style.setProperty("display", "none");
            } else {
                fieldTwo.style.setProperty("display", "flex");
                heroes.style.setProperty("display", "none");
            }
        }
    }
})

menuButton.forEach(e => e.addEventListener('click', () => {
    fieldOne.style.setProperty("display", "none");
    fieldTwo.style.setProperty("display", "none");
    heroes.style.setProperty("display", "flex");
}))

heroFox.addEventListener('click', (e) => {
    heroFox.style.setProperty("transform", "scale(1.5)");

    setTimeout(() => {
        heroFox.style.setProperty("transform", "scale(1)");
    }, 100)

    
    const plusNumber = document.createElement('div');
    plusNumber.classList.add('plusNumber');
    plusNumber.textContent = '+1';
    const crd = heroFox.getBoundingClientRect();
    plusNumber.style.left = `${e.clientX - 100 - crd.left}px`
    plusNumber.style.top = `${e.clientY - 100 - crd.top}px`

    heroFox.parentElement.appendChild(plusNumber);

    addNumberFox();

    setTimeout(() => {
        plusNumber.remove();
    }, 1000)
})

heroDuck.addEventListener('click', (e) => {
    heroDuck.style.setProperty("transform", "scale(1.5)");

    setTimeout(() => {
        heroDuck.style.setProperty("transform", "scale(1)");
    }, 100)

    
    const plusNumber = document.createElement('div');
    plusNumber.classList.add('plusNumber');
    plusNumber.textContent = '+3';
    const crd = heroDuck.getBoundingClientRect();
    plusNumber.style.left = `${e.clientX - 100 - crd.left}px`
    plusNumber.style.top = `${e.clientY - 100 - crd.top}px`

    heroDuck.parentElement.appendChild(plusNumber);

    addNumberDuck();

    setTimeout(() => {
        plusNumber.remove();
    }, 1000)
})

start();
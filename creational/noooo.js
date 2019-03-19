let historic = [];
const goodFeedBack = 'Yes, that\'s a great beer.';
const badFeedBack = 'No, that must be a discusting beer.';
const beers = ['Guiness', 'Kro', 'Ipa', 'Leffe'];

const echo = function (msg) {
    historic.push('<div>' + msg + '</div>');   // Ou `<div>${msg}</div>`

    const historicLength = historic.length;
    const start = Math.max(historicLength - 6, 0);
    let out = '';

    for (let i = start; i < historicLength; i++) {
        out += historic[i];
    }

    document.getElementById('historic').innerHTML = out;
    document.getElementById('last-msg').innerHTML = msg;
};

const giveFeedBack = function () {
    const msg = Math.random() > 0.5 ? goodFeedBack : badFeedBack;
    echo('Computer: ' + msg);
};

const askForABeer = function () {
    const msg = beers[Math.floor(Math.random() * beers.length)];
    echo('Computer: ' + msg);
};

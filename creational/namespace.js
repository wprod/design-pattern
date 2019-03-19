const com = {};
com.witters = com.witters || {};
com.witters.packt = com.witters.packt || {};
// Si `com` n'existe pas "encore" on l'initailiase à un objet vide ect...

com.witters.packt.beerApp = {
    historic: [],
    goodFeedBack: "Yes, that's a great beer.",
    badFeedBack: 'No, that must be a discusting beer.',
    beers: ['Guiness', 'Kro', 'Ipa', 'Leffe'],

    echo: function(msg) {
        this.historic.push('<div>' + msg + '</div>');  // Ou `<div>${msg}</div>`

        const historicLength = this.historic.length;
        const start = Math.max(historicLength - 6, 0);
        let out = '';

        for (let i = start; i < historicLength; i++) {
            out += this.historic[i];
        }

        document.getElementById('historic').innerHTML = out;
        document.getElementById('last-msg').innerHTML = msg;
    },

    giveFeedBack: function() {
        const msg = Math.random() > 0.5 ? this.goodFeedBack : this.badFeedBack;
        this.echo('Computer: ' + msg);
    },

    askForABeer: function() {
        const msg = this.beers[Math.floor(Math.random() * this.beers.length)];
        this.echo('Computer: ' + msg);
    },
};

com.witters.packt.beerApp.askForABeer();

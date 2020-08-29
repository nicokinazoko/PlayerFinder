import "./player-data.js";

class PlayerList extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM                  =   this.attachShadow({mode :   "open"})
    }

    set players(players)
    {
        this._players                   =   players;
        this.render();
    }

    render()
    {
        this.shadowDOM.innerHTML        =   ``;
        this._players.forEach(player => 
                                {
                                    const playerDataElement         =   document.createElement("player-data");
                                    playerDataElement.player        =   player;
                                    this.shadowDOM.appendChild(playerDataElement)
                                })
    }

    renderError(message)
    {
        this.shadowDOM.innerHTML        +=  `<h2 class="placeholder">${message}</h2>`
    }
}

customElements.define("player-list", PlayerList);
class PlayerData extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM                  =   this.attachShadow({mode : "open"});
    }

    set player(player)
    {
        this._player                    =   player;
        this.render()
    }

    render()
    {
        this.shadowDOM.innerHTML        =   
        `
        <div class="card">
        <img src="${this.strCutout}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${this.strPlayer}</h5>
          <p class="card-text">Teams        :  ${this.strTeam}</p>
          <p class="card-text">Nationality  :  ${this.strNationality}</p>
          <p class="card-text">Position     :  ${this.strPosition}</p>
        </div>

      </div>
        `
    }
}

customElements.define("player-data", PlayerData);
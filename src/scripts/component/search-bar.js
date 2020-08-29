class SearchBar extends HTMLElement
{
    constructor()
    {
        super();
        this.shadowDOM                  =   this.attachShadow({mode :   "open"});
    }

    connectedCallback()
    {
        this.render();
    }

    set clickEvent(event)
    {
        this._clickEvent                =   event;
        this.render();
    }

    getValue()
    {
        return this.shadowDOM.querySelector('#Search').value;
    }

    render()
    {
        this.shadowDOM.innerHTML        =   
        `
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Navbar</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="ButtonSearch">Search</button>
            </form>
        </nav>
        `;

        this.shadowDOM.querySelector('#ButtonSearch').addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
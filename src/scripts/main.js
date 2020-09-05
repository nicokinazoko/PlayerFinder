function main()
{
    const baseUrl               =   "https://www.thesportsdb.com";

    const getPlayer             =   () => 
                                    {
                                        const xhr                       =   new XMLHttpRequest();

                                        xhr.onload                      =   function()
                                                                            {
                                                                                const responseJson          =   JSON.parse(this.responseText);

                                                                                 renderAllPlayer(responseJson.player)
                                                                            }

                                        xhr.onerror                     =   function()
                                                                            {
                                                                                showResponseMessage();
                                                                            }      
                                                                    
                                        xhr.open("GET", `${baseUrl}/api/v1/json/1/searchplayers.php?p`);
                                        
                                        xhr.send();
                                    }

    const renderAllPlayer       =   (players) =>
                                    {
                                        const listPlayerElement         =   document.querySelector("#listPlayer");
                                        listPlayerElement.innerHTML     =   "";

                                        players.forEach(player =>
                                                        {
                                                            listPlayerElement.innerHTML   +=  
                                                            `
                                                            <div class="col mb-4">
                                                                <div class="card h-100">
                                                                    <img src="${player.strCutout}/preview" class="card-img-top" alt="...">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">${player.strPlayer}</h5>
                                                                        <p class="card-text">${player.strDescriptionEN}</p>
                                                                        <table class="table">
                                                                            <tr>
                                                                                <th>Name</th>
                                                                                <td>${player.strPlayer}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Date Of Birth</th>
                                                                                <td>${player.dateBorn}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Club Team</th>
                                                                                <td>${player.strTeam}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Nationality</th>
                                                                                <td>${player.strNationality}</td>
                                                                            </tr>

                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            `
                                                        })


                                    }                  
                                    
    const showResponseMessage   =   (message    =   "Check your Internet Connection") =>
                                    {
                                        alert(message);
                                    }           
                                    
    document.addEventListener("DOMContentLoaded", () => 
                                                    {
                                                        getPlayer();
                                                    })                                    
}

export default main();
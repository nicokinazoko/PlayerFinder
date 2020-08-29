import DataSource from '../data/data-source';
import '../component/player-list';
import '../component/search-bar.js'

const main      =   ()  => 
                        {
                            const searchElement         =   document.querySelector("search-bar");
                            const playerListElement     =   document.querySelector("player-list");                        


                            const onButtonSearchClikced =   async () =>
                                                            {
                                                                try
                                                                {
                                                                    const results   =   await DataSource.searchPlayer(searchElement.value);
                                                                    renderResult(results);
                                                                }
                                                                catch(message)
                                                                {
                                                                    fallbackResult(message);
                                                                }
                                                            }
                                                            
                            const renderResult          =   results =>
                                                            {
                                                                playerListElement.players       =   results;
                                                            }                                                            
                            
                            const fallbackResult        =   message =>
                                                            {
                                                                playerListElement.renderError(message);
                                                            }
                            
                            searchElement.clickEvent    =   onButtonSearchClikced;                                
                        }

export default main;
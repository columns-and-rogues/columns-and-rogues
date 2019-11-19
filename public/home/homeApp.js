import Component from '../Component.js';
import Header from '../common/header.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    renderHTML() {

        
        return /*html*/`
            <div>
                
                <main>
                    <h2>
                    Welcome young adventure to the world of Columns and Rogues
                </h2>
                <ul>
                    <li>
                        When you start your game, you will be placed at the starting point of the grid, from there you will explore the dangerous and unexplored wilderness around you.
                    </li>
                    <li>
                    You can move your character buy pressing down the arrow keys.
                    </li>
                    <li> 
                        Once you explore a tile you will have a chance to either encounter a monster, treasure or nothing at all.
                    </li>
                    <li>
                        If you lose an encounter with a monster you will walk away from wounded losing one HP. Once you lose all of you HP you perish and find yourself in the Pits of Gehenna. 
                    </li>   
                    <li>
                        In order to win the game you need to find the randomly placed exit point.
                    </li>
                </ul>
                </main>
            </div>
        `;
        

    }
}
export default App;
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
                    You can move via the arrow keys
                    </li>
                    <li> 
                        Once you explore a tile you will have a chance to either encounter danger, treasure or nothing at all.
                    </li>
                    <li>
                        Your exit point is in a randomly generated location so explore away to find it.
                    </li>
                </ul>
                </main>
            </div>
        `;
        

    }
}
export default App;
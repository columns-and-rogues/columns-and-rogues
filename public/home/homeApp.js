import Component from '../Component.js';
import Header from '../common/header.js';
import Footer from '../common/Footer.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const footer = new Footer();
        document.body.appendChild(footer.renderDOM());
    }
    renderHTML() {

        
        return /*html*/`
            <div>
                
                <main class="background">
                <section class="rules">
                    <h2>
                    Welcome to the world of <br><span class="c-a-r">Columns and Rogues</span>
                </h2>
                <ul class="rules-list">
                    <li>
                        When you start your game, you will be placed at the starting point of the grid, from there you will explore the dangerous and unexplored wilderness around you.
                    </li>
                    <br >
                    <li>
                    You can move your character buy pressing the arrow keys.
                    </li>
                    <br >
                    <li> 
                        Once you explore a tile you will have a chance to either encounter a monster, treasure or nothing at all.
                    </li>
                    <br >
                    <li>
                        If you lose an encounter with a monster you will walk away from wounded losing one HP. Once you lose all of you HP you perish and find yourself in the Pits of Gehenna. 
                    </li>
                    <br >   
                    <li>
                        In order to win the game you need to find the randomly placed exit point.
                    </li>
                    <br >
                    <li>
                        Will you be victourious, or will you perish in the unhallowed halls of Jeonju Castle?
                    </li>
                </ul>
                </section>
                </main>
            </div>
        `;
        

    }
}
export default App;
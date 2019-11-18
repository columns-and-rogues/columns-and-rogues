import Component from '../Component.js'; 

class Header extends Component {
    renderHTML() {
        const title = 
        this.props.title || 'Columns and Rogues'; 

        return /*html*/`
        <header>
            <div class = 'logo'><img src="../assets/logo.gif">
            </div>
                <h1>${title}</h1>
                    <nav>
                        <a href="./">Login/out</a>
                        <a href="./game-index.html">Game</a>
                        <a href="../about-us/index.html">About Us</a>
                    </nav>
        </header>
    `;
    }
}

export default Header; 
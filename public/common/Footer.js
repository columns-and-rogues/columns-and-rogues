import Component from '../Component.js'; 

class Footer extends Component {
    renderHTML() {
        return /*html*/`
        <footer>
            <a href="http://www.wtfpl.net/">
                <img
                    src="http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png"
                    width="80" height="15" alt="WTFPL" />
            </a>
        </footer>
    `;
    }
}

export default Footer; 
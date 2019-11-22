import Component from '../Component.js'; 
import Header from '../common/Header.js';
import AboutUsList from './aboutUsList.js';
import profiles from './profiles.js';
import Footer from '../common/Footer.js';

class AboutApp extends Component {

    onRender(dom) {
        const header = new Header(); 
        dom.prepend(header.renderDOM());

        const team = dom.querySelector('.team-profiles');
        const aboutUsList = new AboutUsList({ profiles });
        team.appendChild(aboutUsList.renderDOM());

        const footer = new Footer();
        document.body.appendChild(footer.renderDOM());
    }


    renderHTML() {
        return /*html*/`
            <main>
                <section class ="team-profiles">
                    <br >
                    <br >
                    <br >
                    <br >
                    <br >
                    <br >
                    <br >
                    <br >
                </section>
            </main>
        `;
    }
}

export default AboutApp; 

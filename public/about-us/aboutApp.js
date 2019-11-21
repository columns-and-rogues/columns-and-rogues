import Component from '../Component.js'; 
import Header from '../common/Header.js';
import AboutUsList from './aboutUsList.js';
import profiles from './profiles.js';

class AboutApp extends Component {

    onRender(dom) {
        const header = new Header(); 
        dom.prepend(header.renderDOM());

        const team = dom.querySelector('.team-profiles');
        const aboutUsList = new AboutUsList({ profiles });
        team.appendChild(aboutUsList.renderDOM());
    }


    renderHTML() {
        return /*html*/`
            <main>
                <section class ="team-profiles">
                    Here are the Team Profiles
                </section>
            </main>
        `;
    }
}

export default AboutApp; 

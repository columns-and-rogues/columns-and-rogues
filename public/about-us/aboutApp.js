import Component from '../Component.js'; 
import Header from '../common/Header.js';

class AboutApp extends Component {

    onRender(dom) {
        const header = new Header(); 
        dom.prepend(header.renderDOM());
    }


    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class ="team-profiles">
                        Here are the Team Profiles
                    </section>
                </main>
            </div>
        `;
    }
}

export default AboutApp; 

import Component from '../Component.js'; 
import Header from '../common/Header.js';
// import Profiles from '../../data/profiles.js';

class AboutApp extends Component {

    onRender(dom) {
        const header = new Header(); 
        dom.prepend(header.renderDOM());
        
        //const profile = new Profiles;
        //profile.forEach(dom => dom.appendChild(dom));
    
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

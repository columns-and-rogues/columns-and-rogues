import Component from '../Component.js';
import AboutUsItem from './aboutUsItem.js';

class AboutUsList extends Component {
    onRender(dom) {
        const profiles = this.props.profiles;

        profiles.forEach(profile => {
            const props = { profile };

            const aboutUsItem = new AboutUsItem(props);
            dom.appendChild(aboutUsItem.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/`
            <ul id="about-list"></ul>
        `;
    }
}

export default AboutUsList;
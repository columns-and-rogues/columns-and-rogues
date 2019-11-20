import Component from '../Component.js';
import Profiles from '../../data/profiles.js';

class AboutUsItem extends Component {
    renderHTML() {
        return /*html*/`
            <div>
                <img src="${Profiles.image}">
                <p>Name:</p>
                <p>Description:</p>
            </div>
        `;
    }
} 
export default AboutUsItem;
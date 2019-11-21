import Component from '../Component.js';

class AboutUsItem extends Component {
    renderHTML() {
        const profile = this.props.profile;

        return /*html*/`
            <li class="about-one">
                <img class="about-img" src="${profile.image}">
                <p>${profile.name}</p>
                <a class="link" href="${profile.linkedIn}">LinkedIn</a>
                <a class="link" href="${profile.github}">Github</a>
                <p class="about-text">${profile.about}</p>
            </li>
        `;
    }
} 
export default AboutUsItem;
import Component from '../Component.js';


class UserSignUp extends Component {
    onRender(form) {
        const onSignUp = this.props.onSignUp;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const user = {
                shownName: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };
            onSignUp(user);
        });
    }

    renderHTML() {
        return /*html*/`
            <form>
                <div>
                    <label for="name"><label>
                    <input class="user-input" id="name" name="name" placeholder="Your Name" />
                </div>

                <div>
                    <label for="email"><label>
                    <input class="user-input" id="email" name="email" type="email" placeholder="Email"/>
                </div>

                <div>
                    <label for="password"><label>
                    <input class="user-input" id="password" name="password" type="password" placeholder="Password"/>
                </div>

                <button>Create an Account</button>
            </form>
        `;
    }
}

export default UserSignUp;
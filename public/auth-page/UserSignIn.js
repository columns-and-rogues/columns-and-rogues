import Component from '../Component.js';

class UserSignIn extends Component {
    
    onRender(form) {
        const onUserSignIn = this.props.onSignIn;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const credentials = {
                email: formData.get('email'),
                password: formData.get('password')
            };
            onUserSignIn(credentials);
        });
    }

    renderHTML() {
        return /*html*/`
            <form class="auth-form-sign-in">
                <p>
                    <label for="signin-email">Email</label>
                    <input id="signin-email" type="email" name="email" required placeholder="email@email.com">
                </p>
                <p>
                    <label for="signin-password">Password</label>
                    <input id="signin-password" type="password" name="password" required>
                </p>
                <p>
                    <button>Sign In</button>
                </p>
            </form>
        `;
    }
}
export default UserSignIn;
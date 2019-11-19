import Component from '../Component.js';
import UserSignIn from './UserSignIn.js';
import UserSignUp from './UserSignUp.js';
import Header from '../common/Header.js';
import { signIn, signUp } from '../services/auth-api.js';

const success = user => {
    localStorage.setItem('TOKEN', user.token);
    localStorage.setItem('USER', user.shownName);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './game-board.html';
};

class AuthPageApp extends Component {
    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const user = localStorage.getItem('USER');
        if (user){
            const logout = dom.querySelector('.logout');
            logout.addEventListener('click', () => {
                localStorage.removeItem('USER');
                localStorage.removeItem('TOKEN');
                this.update();
            });
            return;
        }
        const errors = dom.querySelector('.error');
        const signUpSpot = dom.querySelector('#sign-up-spot');
        const signInSpot = dom.querySelector('#sign-in-spot');

        const userSignUp = new UserSignUp({
            onSignUp: async newUser => {
                try {
                    const user = await signUp(newUser);
                    success(user);
                }
                catch (err) {
                    errors.textContent = err;
                    throw err;
                }
            }
        });
        signUpSpot.appendChild(userSignUp.renderDOM());

        const userSignIn = new UserSignIn({
            onSignIn: async newUser => {
                try {
                    const user = await signIn(newUser);
                    success(user);
                } catch (err) {
                    errors.textContent = err;
                    throw err;
                }
            }
        });
        signInSpot.appendChild(userSignIn.renderDOM());

        const toggleToSignUp = dom.querySelector('#sign-up-button');
        toggleToSignUp.addEventListener('click', () => {
            signInSpot.classList.remove('hidden');
            signUpSpot.classList.add('hidden');
        });

        const toggleToSignIn = dom.querySelector('#sign-in-button');
        toggleToSignIn.addEventListener('click', () => {
            signUpSpot.classList.remove('hidden');
            signInSpot.classList.add('hidden');
        });
    }

    renderHTML(){
        const user = localStorage.getItem('USER');

        if (user){
            return /*html*/`
            <div class="container">
                <main>
                    <section class="logout-section">
                        <p>Signed in as ${user}</p>
                        <button class="logout">Logout</button>
                    </section>
                </main>
            </div>
            `;
        }
        return /*html*/`
        <div class="container">
            <main>
                <div class="error"></div>
                <section class="hidden" id="sign-up-spot">
                    <div class="toggle">
                        <button id="sign-up-button">Already have an account?</button>
                    </div>
                </section>

                <section id="sign-in-spot">
                    <div class="toggle">
                        <button id="sign-in-button">Create an account</button>
                    </div>
                </section>
            </main>
        </div>
        `;
    }
}

export default AuthPageApp;
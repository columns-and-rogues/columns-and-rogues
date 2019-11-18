import Component from '../Component.js';
import UserSignIn from './UserSignIn.js';
import UserSignUp from './UserSignUp.js';
import Header from '../common/Header.js';

class AuthPageApp extends Component {
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
import Component from './domain/component';

export default class MainApp extends Component {
    constructor() {
        super();
    };

    get template() {
        return `
        <header>
            <h1><a href="/">SaltWalks</a></h1>
            <nav>
                <a href="/works">WORKS</a>
                <a href="/about">ABOUT</a>
                <a href="/contact">CONTACT</a>
            </nav>
        </header>
        <main id="page-view"></main>
        <footer>
            <div id="copyright-box">©SalWalks/Coworking 2022</div>
            <div id="contact-box">
                <h2>Contact</h2>
                <a id="github" href="https://github.com/saltwalks">GitHuub</a>
                <a id="email" onclick="clipboardCopy(this)">haeram.kim1@gmail.com</a>
            </div>
        </footer>
        `;
    }
}

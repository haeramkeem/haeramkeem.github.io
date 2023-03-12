import Component from './domain/component';

export default class MainApp extends Component {
    constructor() {
        super();
    };

    get template() {
        // return `
        // <header>
        //     <h1><a href="/">SaltWalks</a></h1>
        //     <nav>
        //         <go-to href="/works">WORKS</go-to>
        //         <go-to href="/about">ABOUT</go-to>
        //         <go-to href="/contact">CONTACT</go-to>
        //     </nav>
        // </header>
        // <main id="page-view"></main>
        // <footer>
        //     <music-player></music-player>
        //     <div id="copyright-box">©SaltWalks/Coworking2020-2022</div>
        //     <div id="contact-box">
        //         <h2>Contact</h2>
        //         <a id="github" href="https://github.com/saltwalks">GitHuub</a>
        //         <a id="email" onclick="clipboardCopy(this)">haeram.kim1@gmail.com</a>
        //     </div>
        // </footer>
        // `;

        return `
        <header>
            <h1><a href="/"></a></h1>
        </header>
        <main id="page-view"></main>
        `;
    }

    dispatch() {
        window.$store.dispatch('getWorks');
    }
}

import MainApp from "../App";
import AboutPage from "./About";
import ContactPage from "./Contact";
import HomePage from "./Home";
import WorksPage from "./Works";
import DetailPage from "./Detail";

export default function InstallPages() {
    customElements.define("main-app", MainApp);
    customElements.define("about-page", AboutPage);
    customElements.define("contact-page", ContactPage);
    customElements.define("home-page", HomePage);
    customElements.define("works-page", WorksPage);
    customElements.define("detail-page", DetailPage);
}

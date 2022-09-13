import Component from "../domain/component";
import Project from "../domain/project";

export default class HomePage extends Component {
    constructor() {
        super({
            subscribe: 'works',
        });
    }

    get template() {
        return `
        <div class="one-page">
            <div id="slide-list">
                <img src="main.jpg" alt="Main image">
            </div>
            <a href="/" class="center move-forward" id="logo"><h1>Salt Walks</h1></a>
        </div>
        <music-player></music-player>
        <h2>Ongoing Projects</h2>
        <div id="running-projects">
        </div>
        `;
    }

    render() {
        const runningProjects = this.querySelector("#running-projects") as HTMLElement;
        (window.$store.state['works'] as Project[]).forEach((prj, idx) => {
            if (prj.status.enum === "running") {
                runningProjects.innerHTML += `
                    <work-thumbnail index=${idx}></work-thumbnail>
                `;
            }
        });
    }
}

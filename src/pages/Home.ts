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
                <img src="Banner1.png" alt="Main image">
            </div>
        </div>
        <music-player></music-player>
        `;
    }

    dispatch() {
        window.$store.dispatch('getWorks');
    }

    render() {
        const slideList = this.querySelector("#slide-list") as HTMLElement;

        const runningProjects = (window.$store.state['works'] as Project[])
            .filter(prj => prj.status.enum === "running");

        runningProjects.forEach((prj, idx) => {
            slideList.innerHTML += `
                <work-thumbnail index=${idx} hovering="disable"></work-thumbnail>
            `;
        });

        const imageNum = runningProjects.length + 1;
        slideList.style.width = window.innerWidth * imageNum + "px";

        let cnt = 0;
        setInterval(() => {
            slideList.style.transition = "500ms";
            cnt = cnt < imageNum - 1 ? cnt + 1 : 0;
            slideList.style.transform = `translateX(-${window.innerWidth * cnt}px)`;
        }, 5000);
    }
}

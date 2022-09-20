import Component from "../domain/component";
import Project from "../domain/project";

export default class HomePage extends Component {
    intervalID: ReturnType<typeof setInterval>;
    numberOfSlides: number;

    constructor() {
        super({
            subscribe: 'works',
        });

        this.intervalID = setInterval(() => {});
        this.numberOfSlides = 0;
    }

    get template() {
        return `
        <div class="one-page">
            <div id="slide-list">
                <img src="Banner1.png" alt="Main image">
            </div>
        </div>
        `;
    }

    dispatch() {
        window.$store.dispatch('getWorks');
    }

    render() {
        /**
         * DISCLAIMER
         * This code must be moved to independent component `slide-list`
         * instead of integrated in page `Home`.
         */
        const slideList = this.select("#slide-list");

        const runningProjects = (window.$store.state['works'] as Project[])
            .filter(prj => prj.status.enum === "running");

        runningProjects.forEach((prj, idx) => {
            slideList.innerHTML += `
                <work-thumbnail index=${idx}></work-thumbnail>
            `;
        });

        this.numberOfSlides = runningProjects.length + 1;
        slideList.style.width = window.innerWidth * this.numberOfSlides + "px";

        let cnt = 0;
        this.intervalID = setInterval(() => {
            slideList.style.transition = "500ms";
            cnt = cnt < this.numberOfSlides - 1 ? cnt + 1 : 0;
            slideList.style.transform = `translateX(-${window.innerWidth * cnt}px)`;
        }, 5000);
    }

    get listeners() {
        /**
         * DISCLAIMER
         * This code must be moved to independent component `slide-list`
         * instead of integrated in page `Home`.
         */
        const eventListeners = [];

        eventListeners.push({
            query: "self",
            eventName: "resize",
            eventListener: (event: Event) => {
                // Clear slide interval
                clearInterval(this.intervalID);

                // Resize slide size
                const slideList = this.select("#slide-list");
                slideList.style.width = window.innerWidth * this.numberOfSlides + "px";

                // Set slide interval
                let cnt = 0;
                this.intervalID = setInterval(() => {
                    slideList.style.transition = "500ms";
                    cnt = cnt < this.numberOfSlides - 1 ? cnt + 1 : 0;
                    slideList.style.transform = `translateX(-${window.innerWidth * cnt}px)`;
                }, 5000);
            }
        });

        return eventListeners;
    }
}

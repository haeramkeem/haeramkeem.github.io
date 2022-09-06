import Component from "../domain/component";
import Project from "../domain/project";

export default class WorkThumbnail extends Component {
    project: Project;

    constructor() {
        super();
        const idx = parseInt(this.getAttribute("index") as string);
        this.project = (window.$store.state["works"] as Project[])[idx];
    }

    get template() {
        return `
            <img src="${this.project.spec.bannerImage}" alt=""></img>
            <div class="wt-hover">
                ${this.project.metadata.name}
            </div>
        `;
    }

    get listeners() {
        const hoverBox = this.querySelector(".wt-hover") as HTMLElement;

        return [
            {
                query: "self",
                eventName: "pointerenter",
                eventListener: (event: Event) => {
                    hoverBox.style.visibility = "visible";
                },
            },
            {
                query: "self",
                eventName: "pointerleave",
                eventListener: (event: Event) => {
                    hoverBox.style.visibility = "hidden";
                },
            }
        ];
    }
}

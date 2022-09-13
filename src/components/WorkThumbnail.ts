import Component from "../domain/component";
import Project from "../domain/project";

export default class WorkThumbnail extends Component {
    project: Project;
    hovering: boolean;

    constructor() {
        super();

        const idx = parseInt(this.getAttribute("index") as string);
        this.project = (window.$store.state["works"] as Project[])[idx];

        this.hovering = this.getAttribute("hovering") === "enable";
    }

    get template() {
        return `
            <img src="${this.project.spec.bannerImage}" alt=""></img>
            <div class="wt-hover">
                <h2>${this.project.metadata.name}</h2>
                <p>${this.project.spec.description.short}</p>
            </div>
        `;
    }

    get listeners() {
        const hoverBox = this.querySelector(".wt-hover") as HTMLElement;

        if (this.hovering) {
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
        } else {
            return [];
        }
    }
}

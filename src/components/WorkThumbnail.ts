import Component from "../domain/component";
import Project from "../domain/project";

export default class WorkThumbnail extends Component {
    project: Project;
    overlap: string;

    constructor() {
        super();

        const idx = parseInt(this.getAttribute("index") as string);
        this.project = (window.$store.state["works"] as Project[])[idx];

        // `disable`: (Default) Disable overlapping
        // `hover`: Enable overlapping when hovering event occured
        // `always`: Always overlap
        this.overlap = this.getAttribute("overlap") || "disable";
    }

    get template() {
        const visibility = this.overlap === "always" ? "visible" : "hidden";
        return `
        <div class="wt-bottom">
                <img src="${this.project.spec.images.banner}"></img>
            </div>
            <div class="wt-top" style="visibility:${visibility};">
                <h2>${this.project.metadata.name}</h2>
                <p>${this.project.spec.description.short}</p>
            </div>
        `;
    }

    get listeners() {
        const hoverBox = this.select(".wt-bottom");
        const events = [
            {
                query: "self",
                eventName: "click",
                eventListener: (event: Event) => {
                    event.preventDefault();
                    window.$router.push(`/works/${this.project.metadata.urlEscape}`);
                }
            }
        ];

        if (hoverBox && this.overlap === "hover") {
            events.push(
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
            );
        }

        return events;
    }
}

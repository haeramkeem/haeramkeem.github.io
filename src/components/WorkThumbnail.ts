import Component from "../domain/component";
import Project from "../domain/project";

export default class WorkThumbnail extends Component {
    constructor() {
        super();
    }

    get template() {
        const idx = parseInt(this.getAttribute("index") as string);
        const project = (window.$store.state["works"] as Project[])[idx];
        return `
        <h2 style="color:white;">${project.metadata.name}</h2>
        `;
    }
}

import Component from "../domain/component";
import Project from "../domain/project";

export default class DetailPage extends Component {
    project: Project

    constructor() {
        super();

        // Get current project
        const urlEscape = window.location.pathname.split("/").pop();
        this.project = (window.$store.state["works"] as Project[])
            .filter(prj => prj.metadata.urlEscape === urlEscape)[0];
    }

    get template() {
        const projectDescription = (this.project.spec.description.full)
            ? `<p>${this.project.spec.description.full}</p>`
            : "";

        const additionalImages = this.project.spec.images.additional
            .reduce((acc, url) => (acc + `<img src="${url}"></img>`), "");

        const additionalURLs = this.project.spec.urls.additional
            .reduce((acc, url) => (acc + this.genAnchor(url, "Additional Links")), "");

        return `
        <h2>${this.project.metadata.name}</h2>
        <h3>${this.project.spec.description.short}</h3>
        <img src="${this.project.spec.images.banner}"></img>
        ${additionalImages}
        <div class="dp-wrapper">
            <div class="dp-description">
                <h4>Description</h4>
                ${projectDescription}
            </div>
            <div class="dp-links">
                <h4>Links</h4>
                ${this.genAnchor(this.project.spec.urls.gitRepository, "Official Git Repository")}
                ${additionalURLs}
            </div>
        </div>
        `;
    }

    genAnchor(url: string, title: string): string {
        return `<a href="${url}" target="_blank">${title}</a>`;
    }
}

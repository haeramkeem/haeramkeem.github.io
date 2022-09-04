import Component from "../domain/component";
import Project from "../domain/project";

const musicPlayerEmbed = `
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123950713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/platform" title="Boiler Room" target="_blank" style="color: #cccccc; text-decoration: none;">Boiler Room</a> · <a href="https://soundcloud.com/platform/kaytranada-boiler-room" title="Kaytranada Boiler Room Montreal DJ Set" target="_blank" style="color: #cccccc; text-decoration: none;">Kaytranada Boiler Room Montreal DJ Set</a></div>
`;

export default class HomePage extends Component {
    constructor() {
        super({
            subscribe: 'works',
        });
    }

    render() {
        let running = "";
        (window.$store.state['works'] as Project[]).forEach((prj, idx) => {
            if (prj.status.enum === "running") {
                running += `
                    <work-thumbnail index=${idx}></work-thumbnail>
                `;
            }
        });

        this.innerHTML = `
        <div class="one-page">
            <div id="slide-list">
                <img src="main.jpg" alt="Main image">
            </div>
            <a href="/" class="center move-forward" id="logo"><h1>Salt Walks</h1></a>
        </div>
        ${musicPlayerEmbed}
        <div>
            ${running}
        </div>
        `;
    }
}

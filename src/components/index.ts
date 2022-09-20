import WorkThumbnail from "./WorkThumbnail";
import MusicPlayer from "./MusicPlayer";
import GoTo from "./GoTo";

export default function InstallComponents() {
    customElements.define("work-thumbnail", WorkThumbnail);
    customElements.define("music-player", MusicPlayer);
    customElements.define("go-to", GoTo);
}

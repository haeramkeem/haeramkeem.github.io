import WorkThumbnail from "./WorkThumbnail";
import MusicPlayer from "./MusicPlayer";

export default function InstallComponents() {
    customElements.define("work-thumbnail", WorkThumbnail);
    customElements.define("music-player", MusicPlayer);
}

import Component from "../domain/component";

export default class GoTo extends Component {
    href: string

    constructor() {
        super();
        this.href = this.getAttribute("href") || "";
    }

    get listeners() {
        return [
            {
                query: "self",
                eventName: "click",
                eventListener: (event: Event) => {
                    event.preventDefault();
                    window.$router.push(this.href);
                }
            }
        ];
   };
}

import {
    EventListenerInterface,
    ComponentInterface,
} from "state-types";

export default class Component extends HTMLElement implements ComponentInterface{
    constructor(option?: {
        subscribe: string
    }) {
        super();
        if(typeof option !== 'undefined') {
            window.$store.events.subscribe(option.subscribe, this);
        }
    }

    // Pre-defined methods
    connectedCallback() {
        const props = this.innerHTML;
        this.innerHTML = this.template;
        this.propsHandler(props);
        this.dispatch();
        this.listeners.forEach(listener => {
            const target = listener.query === "self"
                ? this
                : this.querySelector(listener.query) as HTMLElement;
            target.addEventListener(listener.eventName, listener.eventListener);
        });
    }

    // Child-define methods
    get template(): string { return ''; }
    get listeners(): EventListenerInterface[] { return []; }

    render() {}
    dispatch() {}
    propsHandler(props: string) {}
}

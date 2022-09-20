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
        this.innerHTML = this.template || this.innerHTML;

        this.dispatch();

        this.listeners.forEach(listener => {
            this.select(listener.query).addEventListener(listener.eventName, listener.eventListener);
        });

    }

    select(query: string): HTMLElement {
        return (query === "self" ? this : this.querySelector(query)) as HTMLElement;
    }

    // Child-define methods
    get template(): string { return ""; }
    get listeners(): EventListenerInterface[] { return []; }

    render() {}
    dispatch() {}
}

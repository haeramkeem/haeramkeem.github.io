import Component from "../domain/component";

export default class ContactPage extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<example-component props="example-props"></example-component>`;
    }

    dispatch() {
        window.$store.dispatch('getSomethingFromJSONPlaceholder', '');
    }
}

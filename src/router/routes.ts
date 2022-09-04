import { elementForm } from "state-types";

export default function routes(path: string): elementForm {
    switch(path) {
        /** 
         * STATIC ROUTES
         */
        case '/' :
        return {
            component: 'home-page',
            attributes: [],
        };
        case '/about' :
        return {
            component: 'about-page',
            attributes: [],
        };
        case '/contact' :
        return {
            component: 'contact-page',
            attributes: [],
        };
        case '/works' :
        return {
            component: 'works-page',
            attributes: [],
        };
        //default :
        /**
         * DYNAMIC ROUTES
         */
    }
    return {
        component: 'home-page',
        attributes: [],
    };
}

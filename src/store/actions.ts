import { actions } from "state-types";

const config = {
    baseUrl: 'https://raw.githubusercontent.com/saltwalks/saltwalks.github.io/gh-pages/api',
};

const actions: actions = {
    getWorks(context) {
        fetch(`${config.baseUrl}/works`)
        .then(res => {
            if(res.ok) {
                res.json()
                .then(json => {
                    context.commit("works", "overwrite", json);
                });
            }
        }).catch();
    },
};

export default actions;

import * as st from "state-types";

let mutations: st.mutations = {
    overwrite(data, payload) {
        data = payload;
        return data;
    },
}

export default mutations;

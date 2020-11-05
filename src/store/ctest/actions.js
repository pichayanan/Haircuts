import fb from "firebase/app";

export function getType({ commit, state }, model) {
    console.log(model);

    if (model != "") {
        if (model == "all") {
            commit("C_TEST_1_type");
            commit("TEST_2_type_ALL");
        } else {
            commit("C_TEST_1_type");

            state.face.forEach(element => {
                element.facetype.filter(title => {
                    if (title.includes(model) === true) {
                        let rec = {
                            facetype: element.facetype,
                            photos: element.photos,
                            id: element.id,
                        };
                        commit("TEST_1_type", rec);
                    }
                });
            });
        }
    }
}
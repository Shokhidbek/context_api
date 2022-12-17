import { Actions } from "./Actions"

export const Reducer = async (state, action) => {
    switch (action.type) {
        case Actions.CREATE_TODO:
            return await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {}
            })
        case Actions.TODO_LIST:
        //  return state.todos =  await fetch('').then(res = re.json())
         case Actions.UPDATE_TODO:
            return await fetch(`asdsadsad/${action.payload}` , {})
        default:
            break;
    }
}



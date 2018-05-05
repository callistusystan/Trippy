export default (state={},action) => {
    switch(action.type){
        case("setRank"):
            const {category,top3} = action
            return {...state,[category]:top3}
        default:
            return state
    }
}
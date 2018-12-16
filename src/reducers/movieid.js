const movieidnum = (state = 492261, action) => {
  console.log("insied");
  switch (action.type) {
    case 'MOVIE':
      return action.payload
    default:
      return state
  }
}
 
export default movieidnum

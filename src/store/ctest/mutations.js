export function clogin(state, login) {
    console.log(login)
    state.Cmail = login;
  this.$router.push({
    name: "registcustomer",
    params: {
      authEmail: login
    }
  });
}
export function cmain(state, main) {
  console.log(main)
  state.cid = main;
  this.$router.push({
  name: "findHaircut",
  
});
}

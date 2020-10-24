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
export function cfind(state, find) {
  console.log(find)
  state.id = find;
  this.$router.push({
  name: "DetailsCustomer",
  
});
}
export function cdetail(state, detail) {
  console.log(detail)
  state.bname = detail;
  this.$router.push({
  name: "ReserveCustomer",
  
});
}
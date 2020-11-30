export function clogin(state, login) {
  console.log(login);
  state.Cmail = login;
  this.$router.push({
    name: "registcustomer",
    params: {
      authEmail: login
    }
  });
}
export function cmain(state, main) {
  console.log(main);
  state.type = main.haircutname;
  state.cid = main.haircuttype;
  state.cname = main.Name;
  this.$router.push({
    name: "findHaircut"
  });
}
export function cfind(state, find) {
  console.log(find);
  state.id = find;
  this.$router.push({
    name: "DetailsCustomer"
  });
}
export function cdetail(state, detail) {
  console.log(detail);
  state.bname = detail.Fnameb;
  state.lname = detail.lnameb;
  state.price = detail.price;
  state.location = detail.location;
  state.telno = detail.telno;
  state.bpic = detail.propic;
  this.$router.push({
    name: "ReserveCustomer"
  });
}

export function creserve(state, reserve) {
  console.log(reserve);
  state.cselect = reserve;
  this.$router.push({
    name: "TimereserveCustomer"
  });
}
export function Timereserve(state, ctime) {
  console.log(ctime);
  state.index = ctime;
  // state.timeTable = time;
  
 
}
export function cTimereserve(state, time) {
  console.log(time);
  state.selectT = time;
  // state.timeTable = time;
  this.$router.push({
    name: "bill"
  });
 
}

export function ctype(state, type) {
  console.log(type);
}

export function C_TESTtype(state) {
  state.face = [];
  state.facetype = [];
}

export function TESTtype(state, type) {
  state.face.push(type);
  state.facetype.push(type);
}

export function C_TEST_1_type(state) {
  state.facetype = [];
}

export function TEST_1_type(state, obj) {
  state.facetype.push(obj);
}

export function TEST_2_type_ALL(state) {
  state.facetype = state.face;
}

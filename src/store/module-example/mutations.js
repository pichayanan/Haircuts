export function REGISTER (state, registdata) {
    console.log(registdata);
    state.telno = registdata.telno,
    state.firstname = registdata.firstname,
    state.lastname = registdata.lastname,
    state.profilepic = registdata.profilepic

}
export function MAIN (state, barber) {
    console.log(barber);
    state.id = barber;
    state.telno = barber.telno
    // state.firstname = barber.firstname
    
   

}
export function EDITBARBER (state, editbarber) {
   state.telnoA = editbarber;

   this.$router.push({
    name: "editbarber",
   });
    
   

}
export function EDITCUSTOMER (state, editcustomer) {
    state.emailA = editcustomer;
 
    this.$router.push({
     name: "editcustomer",
    });
     
    
 
 }

export function GETBARBER (state, barber) {
    console.log(barber);
    state.id = barber.id;
    state.telno = registdata.telno
   

}

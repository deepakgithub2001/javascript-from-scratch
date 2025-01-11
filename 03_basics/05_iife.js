// IIFE - Immediatelty Invoked Function Expression
// This is used to remove Global Scope Pollution and invoked(call) the function at that time.
function chai() {
    console.log("DB CONNECTED");

}
chai(); //NAMED IIFE. //DB CONNECTED

((name) => {
    console.log(`DB CONNECTED ${name}`);

})("TO Deepak DATABASE.") //UNNAMED IFFE. //DB CONNECTED TO Deepak DATABASE.
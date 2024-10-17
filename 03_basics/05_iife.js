// IIFE - Immediatelty Invoked Function Expression
// This is used to remove Global Scope Pollution and invoked the function at that time.
function chai(){ 
    console.log("DB CONNECTED");
    
} 
chai(); //NAMED IIFE.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )("TO Deepak DATABASE.") //UNNAMED IFFE.
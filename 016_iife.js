// Immedeately Invoked function Expression

(function chai()
{
    console.log(`DB CONNECTED`);  // semicolon is compulsory to show iife where to stop context. currently it is named iify
    
})();


//()()  // ----> 1st parethesis () to define scope of iife and second () to call iife 

((name) => {  //unnamed iify
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Prateek')
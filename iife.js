(function IFFE(){
    setTimeout(()=>{
        console.log("I am an IFFE");
    },1000)
})()

/*

 ==> It is a Js pattern that involves defining a function and immediately invoking it.
 ==> IIFEs are used to encapsulate and protect the scope of variables

 ===> UseCases

    ==> Avoiding Global variables : Variables declared inside an IIFE are not accessible outside of it, helping to prevent global namespace pollution.
    ==> Creating a Private Scope : Functions and variables within an IIFE can be used without affecting the surrounding code.

*/
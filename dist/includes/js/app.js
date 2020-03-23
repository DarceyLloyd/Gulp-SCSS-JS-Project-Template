// IE11 Friendly function class
let MyFunctionClass = function(){

    // Var defs / Argument processing
    let vars = {
        dom: {
            container: false
        }
    }

    let args = {
        b:false
    }
    argsToObject(arguments,args);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function constructor(){
        log("MyFunctionClass.constructor()");
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Constructor auto execution simulation
    constructor();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
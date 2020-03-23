// IE11 Friendly function class
let PageFunctionClass1 = function(){

    // Var defs / Argument processing
    let vars = {
        dom: {
            container: false
        }
    }

    let args = {
        a:false,
        b:false
    }
    argsToObject(arguments,args,false);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function constructor(){
        log("PageFunctionClass1.constructor()");
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Constructor auto execution simulation
    constructor();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

onReady(function(){
    new PageFunctionClass1();
})
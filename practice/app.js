"use strict";


(function()
{
    function Start()
    {
        let myVariable = 10;
        console.log("my number is " + myVariable)
    
        for (let index = 0; index < myVariable; index++) {
            console.log("my number is " + index)
            
        }
    }
    window.addEventListener("load", Start);
}
)();

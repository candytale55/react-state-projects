# NOTES about function syntax: 


   Note: if you ever need the old value of state
   to help you determine the new value of state,
   you should pass a callback function to your
   state setter function instead of using state 
   directly. This callback function will receive 
   the old value of state as its parameter, which 
   you can then use to determine your new 
   value of state.


 **Initial function**


    function add_1() {
        console.log("add")
        setCount( count + 1 )  
    }

 

   * There is another way to use the setter function using a callback function.
   * The callback function would take the old value of count, and you can use the temporary version oldValue 




    function add_2() {
        setCount(function (oldValue) {
        console.log("add")
        return oldValue + 1;
        })
    }

   * Use the common convention of prev (previous value) + state name Count. 

    function add_3() {
        setCount(function (prevCount) {
        console.log("add")
        return prevCount + 1;
        })
    }
 
   * Use arrow functions and simplify function 

  
    function add() {
        console.log("add")
        setCount( prevCount => prevCount + 1);
    }



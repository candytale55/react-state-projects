# NOTES about function syntax: 



   Note: if you ever need the old value of state
   to help you determine the new value of state,
   you should pass a callback function to your
   state setter function instead of using state 
   directly. This callback function will receive 
   the old value of state as its parameter, which 
   you can then use to determine your new 
   value of state.

    For more info: https://scrimba.com/learn-react-c0e/~02m5

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




## Quiz

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   1. Pass the new version of state that we want to use as the 
      replacement for the old version of state.
   2. Pass a callback function. Must return what we want the new
      value of state to be. Will receive the old version of state
      as a parameter so we can use it to help determine what we want 
      the new value of state to be.


2. When would you want to pass the first option (from answer
   above) to the state setter function?
   
   Whenever we don't really care about (or need) the old value,
   we simply want to set a new value.


3. When would you want to pass the second option (from answer
   above) to the state setter function?

   Whenever we do care about the previous value in state and need
   it to help us determine what the new value should be.

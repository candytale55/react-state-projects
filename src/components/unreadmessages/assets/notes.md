# Conditional Rendering

The code goes inside the div.container

## Two ways: 

### Conditional Rendering with && 
           
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p>You have no unread messages!</p>}

### Conditional Rendering with Nested Ternary (My choice)

    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

            
    {unreadMessages.length > 1 ? 
        <h1>You have {unreadMessages.length} unread messages!</h1> 
            : unreadMessages.length === 1 ? <h1>You have 1 unread message</h1> :
                <h1>You're all caught up!</h1>}


## Quiz

1. What is "conditional rendering"?
When we want to only sometimes display something on the page
based on some kind of condition.


2. When would you use &&?
When you want to either display something or NOT display something.


3. When would you use a ternary?
When you need to decide which of 2 things to display


4. What if you need to decide between > 2 options on
   what to display?
if...else if...else conditional or maybe a `switch` statement.
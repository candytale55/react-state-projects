# Diferent Ways to do the Conditional Rendering

The code goes inside the div.container

## Conditional Rendering with && 
           
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p>You have no unread messages!</p>}

## Conditional Rendering with Nested Ternary (My choice)

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


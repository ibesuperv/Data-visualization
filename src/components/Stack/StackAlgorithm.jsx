import './stack.css'

function StackAlgorithm() {
    return (
        <div className="s-algorithm" style={{cursor:'default'}}>
            <h1 className='s-algorithm-header'>
                ALGORITHM</h1>
            <div className="algo-holder">
                <div className="basic">

                    <p>Basic Operations On Stack</p>
                    <div>

                    <ul>
                        <li>push()</li>
                        <li>pop()</li>
                        <li>top()</li>
                        <li>isEmpty()</li>
                        <li>isFull()</li>
                    </ul>
                    </div>
                </div>
                <hr />
<div className="push  algo-card" style={{marginTop:'50px'}} >
<h2 className='h2-soperation' > Push Operation in Stack :</h2>
    <p>Adds an item to the stack.
         If the stack is full, then it is said to be an Overflow condition.</p>
<details>
<summary>
   <span id="open">read more</span> 
   <span id="close">close</span> 
 </summary>

         <h4>Algorithm for Push Operation:</h4>

         <ul>
            <li>Before pushing the element to the stack, we check if the stack is full .</li>
            <li>If the stack is full (top == capacity-1) ,
                 then Stack Overflows and we cannot insert the element to the stack.</li>
            <li>Otherwise, we increment the value of top by 1 (top = top + 1)
                 and the new value is inserted at top position .</li>
            <li>The elements can be pushed into the stack till we reach the capacity of the stack.</li>
         </ul>
</details>
</div>

<div className="pop algo-card" style={{marginTop:'20px'}} >
<h2 className='h2-soperation' > Pop Operation in Stack :</h2>
    <p>Removes an item from the stack. The items are popped in the reversed order in which they are pushed.
         If the stack is empty, then it is said to be an Underflow condition.</p>
<details>
<summary>
   <span id="open">read more</span> 
   <span id="close">close</span> 
 </summary>

         <h4>Algorithm for Pop Operation :</h4>
         <ul>
            <li>Before popping the element from the stack, we check if the stack is empty .</li>
            <li>If the stack is empty (top == -1), then Stack Underflows and we cannot remove any element from the stack.</li>
            <li>Otherwise, we store the value at top, decrement the value of top by 1 (top = top – 1) and return the stored top value.
            </li>
         </ul>
</details>
</div>
<div className="top algo-card" style={{marginTop:'20px'}} >
    <h2 className='h2-soperation' >Top or Peek Operation in Stack :</h2>

    <p>Returns the top element of the stack.</p>
<details>
<summary>
   <span id="open">read more</span> 
   <span id="close">close</span> 
 </summary>

    <h4>Algorithm for Top Operation</h4>

    <ul>
        <li>Before returning the top element from the stack, we check if the stack is empty.</li>
        <li>If the stack is empty (top == -1), we simply print “Stack is empty”.</li>
        <li>Otherwise, we return the element stored at index = top .
        </li>
    </ul>
</details>
</div>

<div className="isEmpty algo-card" style={{marginTop:'20px'}} >
    <h2 className='h2-soperation' >isEmpty Operation in Stack :</h2>
    <p>Returns true if the stack is empty, else false.</p>
    <details>
    <summary>
   <span id="open">read more</span> 
   <span id="close">close</span> 
 </summary>

    <h4>Alogorithm for isEmpty Operation:</h4>
    <ul>
        <li>Check for the value of top in stack.</li>
        <li>If (top == -1) , then the stack is empty so return true .</li>
        <li>Otherwise, the stack is not empty so return false .</li>
    </ul>
    </details>
</div>
<div className="isFull algo-card" style={{marginTop:'20px'}} >
    <h2 className='h2-soperation' >isFull Operation in Stack :</h2>
    <p>Returns true if the stack is full, else false.</p>
    <details>
    <summary>
   <span id="open">read more</span> 
   <span id="close">close</span> 
 </summary>

    <h4>Algorithm for isFull Operation :</h4>
    <ul>
        <li>Check for the value of top in stack.</li>
        <li>If (top == capacity-1), then the stack is full so return true.</li>
        <li>Otherwise, the stack is not full so return false.</li>
    </ul>
    </details>
</div>
            </div>
        </div>
    );
}

export default StackAlgorithm;

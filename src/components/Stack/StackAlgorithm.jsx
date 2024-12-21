import './stack.scss'
import React, { useState } from 'react';

function StackAlgorithm() {
  const [selectedOperation, setSelectedOperation] = useState(null);

  const toggleOperation = (operation) => {
    setSelectedOperation(selectedOperation === operation ? null : operation);
  };

  return (
    <div className="stack-container">
      <header className="header">
        <h1>Stack Data Structure</h1>
        <p>Master the core operations of a stack</p>
      </header>

      <div className="main-content">
        <div className="operations-list">
          <h2>Operations</h2>
          <ul>
            <li onClick={() => toggleOperation('push')}>Push()</li>
            <li onClick={() => toggleOperation('pop')}>Pop()</li>
            <li onClick={() => toggleOperation('top')}>Top()</li>
            <li onClick={() => toggleOperation('isEmpty')}>isEmpty()</li>
            <li onClick={() => toggleOperation('isFull')}>isFull()</li>
          </ul>
        </div>

        <div className="operation-details">
          {selectedOperation === 'push' && (
            <div className="detail-card">
              <h3 className="operation-title">Push Operation</h3>
              <p>Adds an item to the stack. If the stack is full, it results in an overflow.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the stack is full.</li>
                  <li>If full, the stack overflows and the element cannot be added.</li>
                  <li>If not full, increment the top and insert the element at that position.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'pop' && (
            <div className="detail-card">
              <h3 className="operation-title">Pop Operation</h3>
              <p>Removes an item from the stack. Items are popped in reverse order. If the stack is empty, it results in an underflow.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the stack is empty.</li>
                  <li>If empty, the stack underflows and no element can be removed.</li>
                  <li>If not empty, decrement the top and return the element stored at that position.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'top' && (
            <div className="detail-card">
              <h3 className="operation-title">Top Operation</h3>
              <p>Returns the top element of the stack without removing it.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the stack is empty.</li>
                  <li>If empty, return "Stack is empty".</li>
                  <li>If not empty, return the element at the top position.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'isEmpty' && (
            <div className="detail-card">
              <h3 className="operation-title">isEmpty Operation</h3>
              <p>Returns true if the stack is empty, otherwise false.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the top value is -1.</li>
                  <li>If top == -1, return true (stack is empty).</li>
                  <li>If top != -1, return false (stack is not empty).</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'isFull' && (
            <div className="detail-card">
              <h3 className="operation-title">isFull Operation</h3>
              <p>Returns true if the stack is full, otherwise false.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the top value equals capacity-1.</li>
                  <li>If top == capacity-1, return true (stack is full).</li>
                  <li>If top != capacity-1, return false (stack is not full).</li>
                </ul>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StackAlgorithm;











{/* <div className="algorithmm">
<StackAlgorithm />
</div>

<div className="ai-holder">
{/* <Ai header="Real world Applications of Stack" search={"List applications of stack in bullet points."} /> 
</div>

<Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" /> */}

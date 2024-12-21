import React, { useState } from 'react';
import './queue.scss'; // Make sure to link this CSS

function QueueAlgorithm() {
  const [selectedOperation, setSelectedOperation] = useState(null);

  const toggleOperation = (operation) => {
    setSelectedOperation(selectedOperation === operation ? null : operation);
  };

  return (
    <div className="queue-container">
      <header className="header">
        <h1>Queue Data Structure</h1>
        <p>Master the core operations of a queue</p>
      </header>

      <div className="main-content">
        <div className="operations-list">
          <h2>Operations</h2>
          <ul>
            <li onClick={() => toggleOperation('enqueue')}>Enqueue()</li>
            <li onClick={() => toggleOperation('dequeue')}>Dequeue()</li>
            <li onClick={() => toggleOperation('front')}>Front()</li>
            <li onClick={() => toggleOperation('isEmpty')}>isEmpty()</li>
            <li onClick={() => toggleOperation('isFull')}>isFull()</li>
          </ul>
        </div>

        <div className="operation-details">
          {selectedOperation === 'enqueue' && (
            <div className="detail-card">
              <h3 className="operation-title">Enqueue Operation</h3>
              <p>Adds an item to the queue. If the queue is full, it results in an overflow.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the queue is full (rear == capacity - 1).</li>
                  <li>If full, overflow occurs and no element can be added.</li>
                  <li>Otherwise, increment rear by 1 and insert the element at rear.</li>
                  <li>If the queue is empty, set front = 0.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'dequeue' && (
            <div className="detail-card">
              <h3 className="operation-title">Dequeue Operation</h3>
              <p>Removes an item from the queue. If the queue is empty, it results in an underflow.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the queue is empty (front == -1).</li>
                  <li>If empty, underflow occurs and no element can be removed.</li>
                  <li>Otherwise, retrieve the value at front and increment front by 1.</li>
                  <li>If front exceeds rear (front &gt; rear), reset front and rear to -1.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'front' && (
            <div className="detail-card">
              <h3 className="operation-title">Front Operation</h3>
              <p>Returns the front element of the queue without removing it.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if the queue is empty (front == -1).</li>
                  <li>If empty, return an error or print “Queue is empty”.</li>
                  <li>Otherwise, return the element at the front position.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'isEmpty' && (
            <div className="detail-card">
              <h3 className="operation-title">isEmpty Operation</h3>
              <p>Returns true if the queue is empty, otherwise false.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if front == -1.</li>
                  <li>If true, return true (queue is empty).</li>
                  <li>Otherwise, return false.</li>
                </ul>
              </details>
            </div>
          )}
          {selectedOperation === 'isFull' && (
            <div className="detail-card">
              <h3 className="operation-title">isFull Operation</h3>
              <p>Returns true if the queue is full, otherwise false.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Check if rear == capacity - 1.</li>
                  <li>If true, return true (queue is full).</li>
                  <li>Otherwise, return false.</li>
                </ul>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QueueAlgorithm;

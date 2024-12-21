import React, { useState } from 'react';

function LinearAlgorithm() {
  const [activeOperation, setActiveOperation] = useState(null);

  const handleOperationClick = (operation) => {
    setActiveOperation(activeOperation === operation ? null : operation);
  };

  return (
    <div className="linear-container">
      <header className="header">
        <h1>Linear Search Algorithm</h1>
        <p>Learn how the linear search algorithm works!</p>
      </header>

      <div className="content-container">
        <div className="operations">
          <div className="operation-card" onClick={() => handleOperationClick('intro')}>
            <h2>Introduction</h2>
          </div>
          <div className="operation-card" onClick={() => handleOperationClick('algorithm')}>
            <h2>Algorithm</h2>
          </div>
          <div className="operation-card" onClick={() => handleOperationClick('example')}>
            <h2>Example</h2>
          </div>
          <div className="operation-card" onClick={() => handleOperationClick('advantages')}>
            <h2>Advantages</h2>
          </div>
          <div className="operation-card" onClick={() => handleOperationClick('disadvantages')}>
            <h2>Disadvantages</h2>
          </div>
          <div className="operation-card" onClick={() => handleOperationClick('applications')}>
            <h2>Applications</h2>
          </div>
        </div>

        <div className="descriptions">
          {activeOperation === 'intro' && (
            <div className="description-card">
              <h2>Introduction to Linear Search</h2>
              <ul>
                <li>Linear Search is a basic search algorithm.</li>
                <li>It checks each element of an array sequentially.</li>
                <li>Stops when the target element is found or the array ends.</li>
                <li>Works for unsorted or sorted data structures.</li>
              </ul>
            </div>
          )}

          {activeOperation === 'algorithm' && (
            <div className="description-card">
              <h2>Linear Search Algorithm</h2>
              <p>Linear Search is a method to find an element in a list or array by examining each element sequentially.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Start from the first element in the array.</li>
                  <li>Compare the target element with the current element.</li>
                  <li>If the current element matches the target, return its index.</li>
                  <li>If the array ends without a match, return "Element not found".</li>
                </ul>
              </details>
            </div>
          )}

          {activeOperation === 'example' && (
            <div className="description-card">
              <h2>Example of Linear Search</h2>
              <p>Consider an array: <code>[10, 20, 30, 40, 50]</code>, and the target element: <code>30</code>.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ol>
                  <li>Check the first element: <code>10 != 30</code>.</li>
                  <li>Check the second element: <code>20 != 30</code>.</li>
                  <li>Check the third element: <code>30 == 30</code>.</li>
                  <li>Element found at index <code>2</code>.</li>
                </ol>
              </details>
            </div>
          )}

          {activeOperation === 'advantages' && (
            <div className="description-card">
              <h2>Advantages of Linear Search</h2>
              <ul>
                <li>Simple to implement.</li>
                <li>No need for data to be sorted.</li>
                <li>Works well for small arrays or lists.</li>
              </ul>
            </div>
          )}

          {activeOperation === 'disadvantages' && (
            <div className="description-card">
              <h2>Disadvantages of Linear Search</h2>
              <ul>
                <li>Time complexity is <code>O(n)</code> in the worst case.</li>
                <li>Inefficient for large datasets compared to other search algorithms (e.g., Binary Search).</li>
              </ul>
            </div>
          )}

          {activeOperation === 'applications' && (
            <div className="description-card">
              <h2>Applications of Linear Search</h2>
              <ul>
                <li>Searching in small or unsorted datasets.</li>
                <li>Useful when data size is unpredictable.</li>
                <li>Applicable in real-time systems where minimal processing is needed.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LinearAlgorithm;

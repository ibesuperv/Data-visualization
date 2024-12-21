import React, { useState } from 'react';

function BinaryAlgorithm() {
  const [activeOperation, setActiveOperation] = useState(null);

  const handleOperationClick = (operation) => {
    setActiveOperation(activeOperation === operation ? null : operation);
  };

  return (
    <div className="binary-container">
      <header className="header">
        <h1>Binary Search Algorithm</h1>
        <p>Learn how the binary search algorithm works!</p>
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
              <h2>Introduction to Binary Search</h2>
              <ul>
                <li>Binary Search is an efficient search algorithm.</li>
                <li>It works by repeatedly dividing the search interval in half.</li>
                <li>Starts by checking the middle element of the array.</li>
                <li>Works only on sorted arrays or lists.</li>
              </ul>
            </div>
          )}

          {activeOperation === 'algorithm' && (
            <div className="description-card">
              <h2>Binary Search Algorithm</h2>
              <p>Binary Search is a method to find an element in a sorted array by comparing it to the middle element of the array.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ul>
                  <li>Start by considering the whole sorted array as the search interval.</li>
                  <li>Compare the target element with the middle element of the array.</li>
                  <li>If the target is equal to the middle element, return the index.</li>
                  <li>If the target is smaller, narrow the search to the left half.</li>
                  <li>If the target is larger, narrow the search to the right half.</li>
                  <li>If the search interval becomes empty, return "Element not found".</li>
                </ul>
                <h4>Steps:</h4>
                <ol>
                  <li>Initialize `low = 0` and `high = length of array - 1`.</li>
                  <li>Repeat while `low &lt;= high`:</li>
                  <ul>
                    <li>Find the middle element: `mid = (low + high) / 2`.</li>
                    <li>If `array[mid] == target`, return the index `mid`.</li>
                    <li>If `array[mid] &gt; target`, set `high = mid - 1`.</li>
                    <li>If `array[mid] &lt; target`, set `low = mid + 1`.</li>
                  </ul>
                  <li>If no match is found, return -1.</li>
                </ol>
              </details>
            </div>
          )}

          {activeOperation === 'example' && (
            <div className="description-card">
              <h2>Example of Binary Search</h2>
              <p>Consider a sorted array: <code>[10, 20, 30, 40, 50]</code>, and the target element: <code>30</code>.</p>
              <details>
                <summary style={{paddingLeft:'30px'}}>Read More</summary>
                <ol>
                  <li>Initialize `low = 0` and `high = 4` (array length - 1).</li>
                  <li>Find the middle element: `mid = (0 + 4) / 2 = 2`.</li>
                  <li>Check if `array[2] == 30`. Since it's true, return index <code>2</code>.</li>
                </ol>
              </details>
            </div>
          )}

          {activeOperation === 'advantages' && (
            <div className="description-card">
              <h2>Advantages of Binary Search</h2>
              <ul>
                <li>Time complexity is <code>O(log n)</code>, making it efficient for large datasets.</li>
                <li>Works well for sorted arrays or lists.</li>
                <li>Faster than Linear Search for large datasets.</li>
              </ul>
            </div>
          )}

          {activeOperation === 'disadvantages' && (
            <div className="description-card">
              <h2>Disadvantages of Binary Search</h2>
              <ul>
                <li>Requires the data to be sorted.</li>
                <li>Not suitable for small datasets, where Linear Search might be more efficient.</li>
              </ul>
            </div>
          )}

          {activeOperation === 'applications' && (
            <div className="description-card">
              <h2>Applications of Binary Search</h2>
              <ul>
                <li>Searching in large sorted datasets.</li>
                <li>Used in algorithms like binary search trees, binary search in matrices, etc.</li>
                <li>Used in search engines, databases, and other systems requiring efficient searching.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BinaryAlgorithm;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './queue.css';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");
  const [maxSize, setMaxSize] = useState(5);
  const [message, setMessage] = useState("");
  const [removing, setRemoving] = useState(null); // Track item being removed

  const handleAdd = () => {
    if (queue.length >= maxSize) {
      setMessage("queue Overflow");
    } else if (input.trim() !== "") {
      const newQueue = [...queue, input];
      setQueue(newQueue);
      setInput("");
      setMessage("");
    }
  };

  const handleRemove = () => {
    if (queue.length === 0) {
      setMessage("queue Underflow");
    } else {
      setRemoving(queue[0]); // Track the first item to be removed
      setTimeout(() => {
        const newQueue = queue.slice(1); // Remove the first item
        setQueue(newQueue);
        setRemoving(null); // Clear after removal
        setMessage("");
      }, 300); // Match with the exit transition duration
    }
  };

  const handleMaxSizeChange = (e) => {
    const newSize = Number(e.target.value);
    if (newSize > 0) {
      setMaxSize(newSize);
      setMessage("");
    } else {
      setMessage("Please enter a valid queue size");
    }
  };

  return (
    <div className='queue-container'>
      <div className="queue-header">
        <p className='queue-header-p'>Queue</p>
        <div className="queue-input">
          <div className="queue-size">
            <p>Enter the queue size:</p>
            <input
              type="number"
              value={maxSize}
              onChange={handleMaxSizeChange}
              min="1"
            />
          </div>
          <div className="queue-element">
            <p>Enter the element:</p>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a queue item"
            />
          </div>
        </div>
        <div className="queue-buttons">
          <button onClick={handleAdd}>Add to queue</button>
          <button onClick={handleRemove}>Remove from queue</button>
        </div>
      </div>

      {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}

      <div
        className='queue'
        style={{
          height: `${60 * maxSize}px`,
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px'
        }}
      >
        <AnimatePresence>
          {queue.map((item, index) => (
            <motion.div
              key={item} // Use item as key if unique, else combine with index
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={removing === item && index === 0 ? { opacity: 0, x: -20 } : {}}
              transition={{ duration: 0.3 }}
              style={{
                background: '#4A90E2',
                color: 'white',
                padding: '10px 20px',
                margin: '5px 0',
                borderRadius: '50%',
                fontSize: '18px',
                width: '40px',
                height: '40px',
                textAlign: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Queue;

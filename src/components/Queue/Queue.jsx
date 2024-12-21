import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material'; // Assuming you're using MUI for Button
import Compiler from '../Compiler';
import Ai from '../Ai';
import QueueAlgorithm from './queueAlogorithm';
import './queue.scss';
import Nav from '../Nav';

const Queue = () => {
  const [queue, setQueue] = useState([1, 2, 3, 4]);
  const [input, setInput] = useState("");
  const [maxSize, setMaxSize] = useState(5);
  const [message, setMessage] = useState("");
  const [removing, setRemoving] = useState(null); // Track item being removed

  // Add an element to the queue
  const handleAdd = () => {
    if (queue.length >= maxSize) {
      setMessage("Queue Overflow");
    } else if (input.trim() !== "") {
      const newQueue = [...queue, input];
      setQueue(newQueue);
      setInput(""); // Reset input field
      setMessage(""); // Clear message
    }
  };

  // Remove an element from the queue
  const handleRemove = () => {
    if (queue.length === 0) {
      setMessage("Queue Underflow");
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

  // Handle maximum queue size change
  const handleMaxSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setQueue([]);
    if (newSize > 0) {
      setMaxSize(newSize);
      setMessage(""); // Clear any existing error messages
    } else {
      setMessage("Please enter a valid queue size");
    }
  };

  return (
    <div style={{background:'white'}}><Nav/>
      <div className="bg">
        <div className="input-div">
          <p>Queue</p>
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Max size of Queue"
              name="name"
              id="name"
              value={maxSize}
              onChange={handleMaxSizeChange}
              min="1"
              required
            />
            <label htmlFor="name" className="form__label">Max size of Queue</label>
          </div>
          <div className="form__group field" style={{ marginTop: '20px' }}>
            <input
              type="input"
              className="form__field"
              placeholder="Enter Your Elements"
              name="name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">Elements</label>
          </div>

          <div className='butns'>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0077FF',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#005BBB',
                  transform: 'scale(1.05)',
                },
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                padding: { xs: '10px 20px', sm: '12px 24px', md: '15px 30px' },
                width: { xs: '100%', sm: 'auto' },
                height: { xs: '40px', sm: '50px', md: '60px' },
                marginRight: { xs: 0, sm: '10px' },
                marginBottom: '10px',
              }}
              onClick={handleAdd}
            >
              Insert
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF5733',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#C74122',
                  transform: 'scale(1.05)',
                },
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                padding: { xs: '10px 20px', sm: '12px 24px', md: '15px 30px' },
                width: { xs: '100%', sm: 'auto' },
                height: { xs: '40px', sm: '50px', md: '60px' },
              }}
              onClick={handleRemove}
            >
              Delete
            </Button>
          </div>
          <div className="p-error">
            {message && (
              <p className="error-message">{message}</p>
            )}
          </div>
        </div>

        <div className="queue-main">
          {/* Front Element */}
          <div className="top-element">
            <p className="top-element-text">
              Front: {queue.length > 0 ? queue[0] : 'None'}
            </p>
            <p className="top-element-text">
              Rear: {queue.length > 0 ? queue[queue.length - 1] : 'None'}
            </p>
          </div>
          

          <div
            className="common"
            style={{
              height: '200px',
              width: '100%',
              overflowY: 'auto',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              gap: '30px',
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
                            className='queue-box'
                            
                          >
                            {item}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
        </div>
      </div>
      <QueueAlgorithm/>
      <Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" />

    </div>
  );
};

export default Queue;

import React, { useState } from 'react';
import { Button } from '@mui/material';
import './stack.scss';
import { motion, AnimatePresence } from 'framer-motion';
import StackAlgorithm from './StackAlgorithm';
import Nav from '../Nav';
import Compiler from '../Compiler';


const Stack = () => {
  const [stack, setStack] = useState([1, 2, 3, 4]);
  const [input, setInput] = useState("");
  const [maxSize, setMaxSize] = useState(5);
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    if (stack.length >= maxSize) {
      setMessage("Stack Overflow");
    } else if (input.trim() !== "") {
      setStack(prevStack => [input, ...prevStack]);
      setInput("");
      setMessage("");
    }
  };

  const handleRemove = () => {
    if (stack.length === 0) {
      setMessage("Stack Underflow");
    } else {
      setStack(prevStack => prevStack.slice(1));
      setMessage("");
    }
  };

  const handleMaxSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setStack([]);
    if (newSize > 0 && newSize <= 6) {
      setMaxSize(newSize);
      setMessage("");
    } else {
      setMessage("Please enter a valid stack size");
    }
  };

  const topElement = stack.length > 0 ? stack[0] : "Stack is empty";

  return (
    <div style={{background:'white'}}>
    <Nav/>
      <div className="bg">
        <div className="input-div">
        <p>Stack</p>
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Max size of Stack"
              name="name"
              id='name'
              value={maxSize}
              onChange={handleMaxSizeChange}
              min="1"
              required
            />
            <label htmlFor="name" className="form__label">Max size of Stack</label>
          </div>
          <div className="form__group field" style={{ marginTop: '20px' }}>
            <input
              type="input"
              className="form__field"
              placeholder="Enter Your Elements"
              name="name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              id='name'
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
                height: { xs: '40px', sm: '50px', md: '60px' }, // Adjust height for responsive design
                marginRight: { xs: 0, sm: '10px' },
                marginBottom: '10px',
              }}
              onClick={handleAdd}
            >
              Push
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
                height: { xs: '40px', sm: '50px', md: '60px' }, // Same height for the button
              }}
              onClick={handleRemove}
            >
              Pop
            </Button>
          </div>
          <div className="p-error">
            {message && (
              <p className='error-message'>{message}</p>
            )}
          </div>

        </div>


        <div className="stack-main">
          
        <div className="top-element">
            <p className='top-element-text'>
              Top: {topElement}
            </p>
          </div>
            <div
              className='common'
              style={{
                height: `${80 * maxSize}px`,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
              }}
            >
              <AnimatePresence>
                {stack.slice(0).reverse().map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.4 }}
                    className='common-item'
                    style={{
                      color: '#fff',
                      backgroundColor: '#2D9CDB',
                      padding: '20px',
                      margin: '5px auto',
                      borderRadius: '8px',
                      fontSize: '20px',
                      width: '200px',
                      height: '60px',
                      textAlign: 'center',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        
      </div>

      <StackAlgorithm/>
      <Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" />

    </div>
  );
};

export default Stack;
 
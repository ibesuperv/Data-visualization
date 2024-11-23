// Stack.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './stack.css';
import Compiler from '../Compiler';
import StackAlgorithm from './stackAlgorithm';
import Ai from '../Ai';

const Stack = () => {
  const [stack, setStack] = useState([]);
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
    if (newSize > 0 && newSize <= 6) {
      setMaxSize(newSize);
      setMessage("");
    } else {
      setMessage("Please enter a valid stack size");
    }
  };

  return (
    <>
      <div className="bg" >
        <div className='stack-container'>
          <div className="stack-header">
            <p className='stack-header-p'>STACK</p>
            <div className="stack-input">
              <div className="stack-size" >
                <p style={{textAlign:'center', margin:'10px'}}>Enter the stack size:</p>
                <input
                  type="number"
                  value={maxSize}
                  onChange={handleMaxSizeChange}
                  min="1"
                />


              </div>
              <div className="stack-element"  >
                <p style={{textAlign:'center',margin:'10px'}}>Enter the element:</p>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter a stack item"
                />
              </div>
            </div>
            <div className="stack-buttons">
              <motion.button   whileTap={{ scale: 0.85 }} onClick={handleAdd}>Add to Stack</motion.button>
              <motion.button  whileTap={{ scale: 0.85 }} onClick={handleRemove}>Remove from Stack</motion.button>
            </div>
          </div>

          <div className="p-error" >
            {message && (
              <p className='e-msg'>{message}</p>
            )}
          </div>

          <div className="stack-center">
            <div
              className='stack'
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
                    transition={{ duration: 0.3 }}
                    className='stack-item-color'
                    style={{
                      color: 'black',
                      padding: '20px',
                      margin: '5px auto',
                      borderRadius: '5px',
                      fontSize: '18px',
                      width: '190px',
                      height: '60px',
                      textAlign: 'center',
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="algorithmm">
                <StackAlgorithm/>
        </div><div className="ai-holder">
                <Ai name="STACK" search={"List applications of stack in bullet points."} />
        </div>
        <Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" />

      </div>
    </>
  );
};

export default Stack;

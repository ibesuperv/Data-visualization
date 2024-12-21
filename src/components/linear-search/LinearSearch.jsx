import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './linear.scss';
import { Button } from '@mui/material';
import LinearAlgorithm from './LinearAlgorithm';
import Nav from '../Nav';
import Compiler from '../Compiler';

const LinearSearch = () => {
  const [array, setArray] = useState([1, 2, 3, 4]);
  const [searchElement, setSearchElement] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [searching, setSearching] = useState(false);
  const [status, setStatus] = useState('');
  const [maxSize, setMaxSize] = useState(5);

  const handleMaxSizeChange = (e) => {
    const newSize = Number(e.target.value);
    if (newSize >= 1 && newSize <= 8) {
      setArray([]); // Reset array if maxSize is changed
      setMaxSize(newSize);
      setStatus(''); // Clear any error message
    } else {
      setStatus("Please enter a valid array size between 1 and 8");
    }
  };
  
  const boxVariants = {
    default: { scale: 1, backgroundColor: 'red', opacity: 1 },
    traversed: { scale: 1.2, backgroundColor: '#ffeb3b', color: 'black' },
    found: { scale: 1.5, backgroundColor: '#4caf50', opacity: 1 },
    notFound: { scale: 1, backgroundColor: '#f44336', opacity: 0.6 },
  };
  const search = () => {
    if (!searchElement.trim() || searching) return;
    setFoundIndex(-1);
    setSearching(true);
    setStatus('Searching...');

    let i = 0;
    const interval = setInterval(() => {
      setCurrentIndex(i);

      if (array[i] === parseInt(searchElement, 10)) {
        clearInterval(interval);
        setFoundIndex(i);
        setStatus(`Element found at index ${i}`);
        setSearching(false);
      } else if (i === array.length - 1) {
        clearInterval(interval);
        setStatus('Element not found!');
        setSearching(false);
      }

      i++;
    }, 1000);
  };

  const handleAdd = () => {
    if (!searchElement.trim() || isNaN(parseInt(searchElement, 10))) return;
    if (array.length >= maxSize) {
      setStatus(`Array is full. Max size is ${maxSize}.`);
      return;
    }
    setArray([...array, parseInt(searchElement, 10)]);
    setSearchElement('');
    setStatus('');
  };

  return (
    <div style={{background:'white'}}>
    <Nav/>
      <div className="bg">
        <div className="input-div">
          <p>Linear Search</p>
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
            <label htmlFor="name" className="form__label">Max size of Array</label>
          </div>
          <div className="form__group field" style={{ marginTop: '20px' }}>
            <input
              type="input"
              className="form__field"
              placeholder="Enter Your Elements"
              name="name"
              value={searchElement}
              onChange={(e) => setSearchElement(e.target.value)}
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
                fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' },
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
                backgroundColor: '#25ea07',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#caef75',
                  transform: 'scale(1.05)',
                },
                fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' },
                padding: { xs: '10px 20px', sm: '12px 24px', md: '15px 30px' },
                width: { xs: '100%', sm: 'auto' },
                height: { xs: '40px', sm: '50px', md: '60px' },
              }}
              onClick={search}
            >
              Search
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
                fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' },
                padding: { xs: '10px 20px', sm: '12px 24px', md: '15px 30px' },
                width: { xs: '100%', sm: 'auto' },
                height: { xs: '40px', sm: '50px', md: '60px' },
              }}
              
              onClick={() => { setArray([]); setStatus(''); }}
            >
              Clear
            </Button>
          </div>

        </div>
        <div className='linear-main'>
          <div style={{ marginTop: '80px', fontSize: '20px', fontWeight: 'bold' ,color:'black'}}>
          <p className="top-element-text">  {status}</p>
                      </div>
            <div className='linear-boxes'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                gap: '50px',
                marginTop: '50px',
              }}
            >
              {array.map((num, index) => (
                <motion.div
                  key={index}
                  initial="default"
                  transition={{ duration: 0.3 }}
                  animate={
                    index === currentIndex
                      ? foundIndex === index
                        ? 'found'
                        : 'traversed'
                      : foundIndex !== -1
                      ? 'notFound'
                      : 'default'
                  }
                  variants={boxVariants}
                  className='linear-box'
                >
                  {num}
                </motion.div>
              ))}
            </div>

</div>
          
      </div>
      <LinearAlgorithm/>
      <Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" />

    </div>
  );
};

export default LinearSearch;

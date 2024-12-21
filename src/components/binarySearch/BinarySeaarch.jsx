import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Compiler from '../Compiler';
import Ai from '../Ai'; // Uncomment if Ai is used elsewhere
import './binary.scss';
import { Button } from '@mui/material';
import BinaryAlgorithm from './BinaryAlgorithm';
import Nav from '../Nav';

const BinarySearch = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5,]);
  const [searchElement, setSearchElement] = useState('');
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(array.length - 1);
  const [mid, setMid] = useState(Math.floor((low + high) / 2));
  const [foundIndex, setFoundIndex] = useState(-1);
  const [searching, setSearching] = useState(false);
  const [status, setStatus] = useState('');
  const [maxSize, setMaxSize] = useState(7);

  const boxVariants = {
    default: { scale: 1, backgroundColor: 'red', opacity: 1 },
    low: { scale: 1.2, backgroundColor: 'pink', color: 'white' },
    high: { scale: 1.2, backgroundColor: '#ff5722', color: 'white' },
    mid: { scale: 1.5, backgroundColor: '#ffeb3b', color: 'black' },
    found: { scale: 1.5, backgroundColor: '#4caf50', opacity: 1 },
    notFound: { scale: 1, backgroundColor: '#f44336', opacity: 0.6 },
  };

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
  

  const binarySearch = () => {
    if (!searchElement.trim() || searching) return;
    setFoundIndex(-1);
    setSearching(true);
    setStatus('Searching...');

    let l = 0;
    let h = array.length - 1;
    let m = Math.floor((l + h) / 2);

    const interval = setInterval(() => {
      setLow(l);
      setHigh(h);
      setMid(m);

      if (array[m] === parseInt(searchElement, 10)) {
        clearInterval(interval);
        setFoundIndex(m);
        setStatus(`Element found at index ${m}`);
        setSearching(false);
      } else if (array[m] > parseInt(searchElement, 10)) {
        h = m - 1;
      } else {
        l = m + 1;
      }

      if (l > h) {
        clearInterval(interval);
        setStatus('Element not found!');
        setSearching(false);
      }

      m = Math.floor((l + h) / 2);
    }, 1000);
  };
  const handleAdd = () => {
    if (!searchElement.trim() || isNaN(parseInt(searchElement, 10))) return;
  
    if (array.length >= maxSize) {
      setStatus(`Array cannot exceed the maximum size of ${maxSize}.`);
      return;
    }
  
    const newArray = [...array, parseInt(searchElement, 10)].sort((a, b) => a - b);
    setArray(newArray);
    setSearchElement('');
    setStatus(''); // Clear any error message
  };
  
  return (
    <div style={{background:'white'}}>
    <Nav/>
      <div className="bg">
      <div className="input-div">
          <p>Binary Search</p>
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Max size of Array"
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
              onClick={binarySearch}
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
        

        <div className='binary-main'>
          <div style={{ marginTop: '80px', fontSize: '20px', fontWeight: 'bold' ,color:'black'}}>
          <p className="top-element-text">  {status}</p>
                      </div>

                      
            <div className='binary-boxes'
              style={{
                gap: '50px',
                marginTop: '50px',
              }}
            >
              {array.map((num, index) => (
                <motion.div
                  key={index}
                  initial="default" className='binary-box'
                  transition={{ duration: 1.6 }}
                  animate={
                    index === low
                      ? 'low'
                      : index === high
                      ? 'high'
                      : index === mid
                      ? 'mid'
                      : foundIndex === index
                      ? 'found'
                      : 'default'
                  }
                  variants={boxVariants}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                    position: 'relative', // To position the small font labels
                  }}
                >
                  <div>
                    {num}
                    {(index === low || index === high || index === mid) && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '5px', // position the label at the bottom
                          fontSize: '10px',
                          color: 'black',
                          textAlign: 'center',
                        }}
                      >
                        {index === low ? 'Left' : index === high ? 'Right' : 'Mid'}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

            </div>

</div>

      </div>
      <BinaryAlgorithm/>
      <Compiler embedUrl="https://www.jdoodle.com/embed/v1/a6668178bc43c646" />

    </div>
  );
};

export default BinarySearch;

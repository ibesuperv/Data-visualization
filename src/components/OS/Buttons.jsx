import React from 'react';
import { Button } from '@mui/material'; // Assuming you're using MUI for Button


const Buttons = ({ handleAddProcess, simulate }) => (
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
    onClick={handleAddProcess}
  >
    Add Process
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
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      padding: { xs: '10px 20px', sm: '12px 24px', md: '15px 30px' },
      width: { xs: '100%', sm: 'auto' },
      height: { xs: '40px', sm: '50px', md: '60px' },
    }}
    onClick={simulate}
  >
    Simulate
  </Button>
</div>
);

export default Buttons;



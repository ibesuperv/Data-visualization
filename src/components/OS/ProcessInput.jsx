import React from 'react';
import { Button } from "@mui/material";

const ProcessInput = ({ index, process, handleInputChange, handleRemoveProcess }) => (
  <div className="process-input" >
    <label style={{ marginRight: "10px" }}>Process {process.id}:</label>


    <div className="form__group1 field">
            <input
              type="number"
              className="form__field1"
              placeholder="Max size of Array"
              name="name"
              id="name"
              value={process.arrival}
              onChange={(e) => handleInputChange(index, "arrival", e.target.value)}
              required
            />
            <label htmlFor="name" className="form__label">Arrival Time</label>
          </div>



          <div className="form__group1 field">
            <input
              type="number"
              className="form__field1"
              placeholder="Max size of Array"
              name="name"
              id="name"
              value={process.burst}
      onChange={(e) => handleInputChange(index, "burst", e.target.value)}
      required
            />
            <label htmlFor="name" className="form__label">Burst Time</label>
          </div>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FF5733",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#C74122",
          transform: "scale(1.05)",
        },
        fontSize: "0.9rem",
        padding: "8px 12px",
      }}
      onClick={() => handleRemoveProcess(process.id)}
    >
      Remove
    </Button>
  </div>
);

export default ProcessInput;

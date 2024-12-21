import React, { useState, useEffect } from "react";
import Buttons from './Buttons';
import ProcessInput from './ProcessInput';
import GanttChart from './GanttChart';
import Stats from './Stats';
import './os.scss';
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Nav from "../Nav";

const OsScheduling = () => {
  // Predefined processes
  const predefinedProcesses = [
    { id: 1, arrival: 0, burst: 5 },
    { id: 2, arrival: 2, burst: 3 },
    { id: 3, arrival: 4, burst: 1 },
    { id: 4, arrival: 5, burst: 2 },
  ];

  const [processes, setProcesses] = useState(predefinedProcesses);
  const [algorithm, setAlgorithm] = useState("FCFS");
  const [chart, setChart] = useState([]);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [stats, setStats] = useState({ 
    idleTime: 0, 
    completionTime: 0, 
    avgWaitingTime: 0, 
    avgTurnaroundTime: 0 
  });
  const [quantum, setQuantum] = useState(4); // Default quantum for Round Robin
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        alert("Please open in desktop site for a better experience.");
      }
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Check on window resize

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add a new empty process
  const handleAddProcess = () => {
    setProcesses([...processes, { id: processes.length + 1, arrival: 0, burst: 1 }]);
  };

  // Remove a process by ID
  const handleRemoveProcess = (id) => {
    const updatedProcesses = processes.filter(p => p.id !== id);
    setProcesses(updatedProcesses);
  };

  // Handle input change for each process
  const handleInputChange = (index, field, value) => {
    const numericValue = Number(value);
  
    if (numericValue < 0) {
      alert("Negative values are not allowed.");
      return; // Exit the function to prevent setting a negative value.
    }
  
    const updatedProcesses = processes.map((p, i) =>
      i === index ? { ...p, [field]: numericValue } : p
    );
    setProcesses(updatedProcesses);
  };
  
  // Simulate the scheduling algorithm
  const simulate = () => {
    const element = document.querySelector(".charts");
    window.scrollTo(
        {
            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        }
    )

    let schedule = [];
    let idleTime = 0;
    let completionTime = 0;
    if (algorithm === "FCFS") {
      schedule = fcfs(processes);
    } else if (algorithm === "SJF") {
      schedule = sjf(processes);
    } else if (algorithm === "RR") {
      schedule = roundRobin(processes, quantum);
    }

    if (schedule.length > 0) {
      idleTime = calculateIdleTime(schedule);
      completionTime = schedule[schedule.length - 1].end;
    }

    // Calculate average waiting and turnaround times
    const totalWaitingTime = schedule.reduce((sum, p) => sum + p.waiting, 0);
    const totalTurnaroundTime = schedule.reduce((sum, p) => sum + p.turnaround, 0);
    const avgWaitingTime = totalWaitingTime / schedule.length;
    const avgTurnaroundTime = totalTurnaroundTime / schedule.length;

    setChart(schedule);
    setStats({ 
      idleTime, 
      completionTime, 
      avgWaitingTime, 
      avgTurnaroundTime 
    });
    setIsVisualizing(true);
    setAnimationIndex(0);
  };

  // Visualization timer
  useEffect(() => {
    if (isVisualizing && animationIndex < chart.length) {
      const timeout = setTimeout(() => {
        setAnimationIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (animationIndex >= chart.length) {
      setIsVisualizing(false);
    }
  }, [isVisualizing, animationIndex, chart.length]);

  // FCFS Scheduling Algorithm
  const fcfs = (procs) => {
    const sorted = [...procs].sort((a, b) => a.arrival - b.arrival);
    let time = 0;
    return sorted.map((p) => {
      const start = Math.max(time, p.arrival);
      const end = start + p.burst;
      time = end;
      return { 
        ...p, 
        start, 
        end, 
        waiting: start - p.arrival, 
        turnaround: end - p.arrival 
      };
    });
  };

  // SJF Scheduling Algorithm
  const sjf = (procs) => {
    const sorted = [...procs].sort(
      (a, b) => a.arrival - b.arrival || a.burst - b.burst
    );
    let time = 0;
    return sorted.map((p) => {
      const start = Math.max(time, p.arrival);
      const end = start + p.burst;
      time = end;
      return { 
        ...p, 
        start, 
        end, 
        waiting: start - p.arrival, 
        turnaround: end - p.arrival 
      };
    });
  };

  // Round Robin Scheduling Algorithm
  const roundRobin = (procs, quantum) => {
    const queue = [...procs];
    let time = 0;
    let schedule = [];
    let remainingBurstTimes = procs.map(p => p.burst);

    while (queue.length > 0) {
      const currentProcess = queue.shift();
      const burstTime = Math.min(remainingBurstTimes[currentProcess.id - 1], quantum);
      const start = Math.max(time, currentProcess.arrival);
      const end = start + burstTime;

      schedule.push({
        ...currentProcess,
        start,
        end,
        waiting: start - currentProcess.arrival,
        turnaround: end - currentProcess.arrival,
      });

      remainingBurstTimes[currentProcess.id - 1] -= burstTime;
      time = end;

      if (remainingBurstTimes[currentProcess.id - 1] > 0) {
        queue.push(currentProcess); // Re-add the process if it still needs more time
      }
    }

    return schedule;
  };

  // Calculate idle time between processes
  const calculateIdleTime = (schedule) => {
    let idle = 0;
    for (let i = 1; i < schedule.length; i++) {
      const gap = schedule[i].start - schedule[i - 1].end;
      if (gap > 0) idle += gap;
    }
    return idle;
  };

  return (<div style={{background:'white'}}>
  <Nav/>
  <div className="bg">
      <div className="input-div">
          <p>CPU Scheduling</p>
<div className="algoinput">
  

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Algorithm</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}
          label="Algorithm"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="FCFS">FCFS</MenuItem>
          <MenuItem value="SJF">SJF</MenuItem>
          <MenuItem value="RR">RR</MenuItem>
        </Select>
      </FormControl>

      {
        algorithm === "RR" && (
          <div className="form__group field">
            <input
              type="number"
              className="form__field"
              placeholder="Max size of Array"
              name="name"
              id="name"
              value={quantum}
              onChange={(e) => setQuantum(Number(e.target.value))}
              min="1"
              required
            />
            <label htmlFor="name" className="form__label">Quantum</label>
          </div>
        )
      }
     </div>
     <Buttons handleAddProcess={handleAddProcess} simulate={simulate} />

        </div>
        

        <div className='binary-main'>
        {processes.map((process, index) => (
  <ProcessInput
    key={process.id}
    index={index}
    process={process}
    handleInputChange={handleInputChange}
    handleRemoveProcess={handleRemoveProcess} // Pass the remove handler
  />
))}


</div>

      </div>


      <div className="bg" style={{display:'flex',flexDirection:'column',paddingTop:'50px'}}>
<div className="input-div table" style={{border:'none'}}>
<div className="stats-table">
            <table>
              <thead>
                <tr>
                  <th>Process</th>
                  <th>Arrival Time</th>
                  <th>Burst Time</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Waiting Time</th>
                  <th>Turnaround Time</th>
                </tr>
              </thead>
              <tbody>
                {chart.map((p) => (
                  <tr key={p.id}>
                    <td>P{p.id}</td>
                    <td>{p.arrival}</td>
                    <td>{p.burst}</td>
                    <td>{p.start}</td>
                    <td>{p.end}</td>
                    <td>{p.waiting}</td>
                    <td>{p.turnaround}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="average-stats">
              <p><strong> Average Waiting Time:</strong> {stats.avgWaitingTime}</p>
              <p><strong>Average Turnaround Time:</strong> {stats.avgTurnaroundTime}</p>
            </div>
          </div>

</div>

<div className="binary-main charts" >

<GanttChart chart={chart} animationIndex={animationIndex} idleTime={stats.idleTime} />
          <Stats stats={stats} />

</div>
      </div>
  
  </div>
  );
};

export default OsScheduling;

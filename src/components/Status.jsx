// import React, { useEffect, useState } from 'react';
// import '../assets/styles/status.css'; // Import the CSS file
// import { io } from 'socket.io-client';

// const Status = () => {
//   const [status, setStatus] = useState({
//     received: false,
//     inProgress: false,
//     resolved: false,
//   });

//   // Function to update the UI based on the status
//   const updateStatusUI = (status) => {
//     setStatus(status);
//   };

//   // Function to manually fetch status (optional)
//   const fetchStatus = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/status`);
//       const data = await response.json();
//       updateStatusUI(data);
//       alert('Status updated!');
//     } catch (error) {
//       console.error('Error fetching status:', error);
//     }
//   };

//   useEffect(() => {
//     // Connect to the WebSocket server
//     const socket = io('http://localhost:3000');

//     // Listen for status updates from the server
//     socket.on('statusUpdate', (status) => {
//       updateStatusUI(status);
//     });

//     // Cleanup the socket connection on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="status-container">
//       <h1>Case Status Tracking</h1>
//       <div className="status-timeline">
//         <div className={`status-step ${status.received ? 'completed' : ''}`}>
//           <div className="circle">1</div>
//           <p>Received</p>
//         </div>
//         <div className={`status-step ${status.inProgress ? 'active' : ''}`}>
//           <div className="circle">2</div>
//           <p>In Progress</p>
//         </div>
//         <div className={`status-step ${status.resolved ? 'completed' : ''}`}>
//           <div className="circle">3</div>
//           <p>Resolved</p>
//         </div>
//       </div>
//       <button className="refresh-button" onClick={fetchStatus}>
//         Refresh Status
//       </button>
//     </div>
//   );
// };

// export default Status;
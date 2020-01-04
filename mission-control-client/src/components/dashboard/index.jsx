import React, { useEffect, useState } from 'react';
import { getData, secureRequest } from '../../services/tempServices';

const Dashboard = ({ logout, getToken }) => {
  const [server, setServer] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await secureRequest(getToken, getData);
      setServer(data);
    })();
  }, [getToken]);

  return (
    <>
      <pre>{JSON.stringify(server, null, 4)}</pre>
      <div>This is the Dashboard view</div>
      <button type="submit" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;

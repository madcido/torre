import React from 'react';

function RemoteJobs({data}) {
  return (
    <div className="card">
      <p>{data.title}</p>
    </div>
  );
}

export default RemoteJobs;

const Project = () => {
  const data = [
    {
      name: 'Salesman',
      assign: 'Ronald',
      date: '10 nov 2024',
      updates: '1 hour ago',
      status: 'Completed',
    },
    {
      name: 'Toko',
      assign: 'GusRon',
      date: '20 jul 2024',
      updates: '9 day ago',
      status: 'In Progess',
    },
    {
      name: 'Ngapp',
      assign: 'RonGus',
      date: '28 jun 2024',
      updates: '30 min ago',
      status: 'In Progess',
    },
    {
      name: 'Manager',
      assign: 'Gustavo',
      date: '02 jun 2024',
      updates: 'Yesterday',
      status: 'Completed',
    },
  ];

  return (
    <>
      <div className="project">
        <div className="project-header">
          <h2 className="project-header-text-title">Recent Projects</h2>
          <div className="project-header-right">
            <p className="project-header-right-icon">icon</p>
            <button className="project-header-right-button">All time</button>
            <button className="project-header-right-button">Monthly</button>
            <button className="project-header-right-button">Weekly</button>
          </div>
        </div>
        <table className="project-table">
          <thead className="project-thead">
            <tr className="project-thead-tr">
              <th className="project-th">Project Name</th>
              <th className="project-th">Assign</th>
              <th className="project-th">Date</th>
              <th className="project-th">Updates</th>
              <th className="project-th">Status</th>
            </tr>
          </thead>
          <tbody className="project-tbody">
            {data &&
              data.map((data: any) => {
                return (
                  <tr className="project-tbody-tr">
                    <td className="project-td">{data.name}</td>
                    <td className="project-td">{data.assign}</td>
                    <td className="project-td">{data.date}</td>
                    <td className="project-td">{data.updates}</td>
                    <td className="project-td">{data.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Project;

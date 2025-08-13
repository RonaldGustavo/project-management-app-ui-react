import { CiSearch } from 'react-icons/ci';
import { FaCaretDown } from 'react-icons/fa';

const Project = () => {
  const data = [
    {
      name: 'Salesman',
      assign: 'Ronald',
      date: '10 nov',
      year: '2024',
      updates: '1 hour ago',
      status: 'Completed',
    },
    {
      name: 'Toko',
      assign: 'GusRon',
      date: '20 jul',
      year: '2024',
      updates: '9 day ago',
      status: 'In Progess',
    },
  ];

  return (
    <>
      <div className="project">
        <div className="project-header">
          <div className="project-header-left">
            <h2 className="project-header-text-title">Recent Projects</h2>
            <FaCaretDown className="project-header-left-icon" size={24} />
          </div>
          <div className="project-header-right">
            <CiSearch className="project-header-right-icon" size={24} />
            <button className="project-header-right-button button-purple">
              All time
            </button>
            <button className="project-header-right-button button-blue">
              Monthly
            </button>
            <button className="project-header-right-button button-blue">
              Weekly
            </button>
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
                    <td className="project-td text-white">{data.name}</td>
                    <td className="project-td text-white">{data.assign}</td>
                    <td className="project-td text-white">{data.date} <span className='text-gray'>{data.year}</span></td>
                    <td className="project-td text-white">{data.updates}</td>
                    <td className="project-td ">
                      <button
                        className={`project-table-status-button ${
                          data.status === 'Completed'
                            ? 'button-green'
                            : 'button-orange'
                        }`}
                      >
                        {data.status}
                      </button>
                    </td>
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

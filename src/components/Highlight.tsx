import { FaSlack } from "react-icons/fa";
import { userImg } from "../assets/images";
import { MdDelete } from "react-icons/md";

const Highlight = () => {
  const dataLeft = [
    {
      title: "Edit your Taskboard",
      description:
        "Elevate your space to inspire innovation and collaboration while tailoring every detail to match your unique vision.",
    },

    {
      title: "Edit your Workspace",
      description:
        "Optimize your workflow to achieve maximum efficiency and satisfaction while maintaining balance and clarity in your daily routine.",
    },
  ];

  const dataMid = [
    {
      title: "Development Application Android",
      subTitle: "Slack - Engineer",
      percentage: "80",
      dayLeft: "5",
      iconProfile: "iconp",
      startDay: "14",
    },
    {
      title: "Development Application Ios",
      subTitle: "Slack - Product",
      percentage: "50",
      dayLeft: "2",
      iconProfile: "iconp",
      startDay: "20",
    },
  ];

  const dataRight = [
    {
      title: "Grooming Meeting",
      date: "01.00 - 02.00 pm",
      color: "blue",
    },
    {
      title: "Technical Meeting",
      date: "09.00 - 10.00 pm",
      color: "green",
    },
    {
      title: "Scoping Meeting",
      date: "03.00 - 04.00 pm",
      color: "orange",
    },
  ];

  return (
    <>
      <div className="highlight">
        <div className="highlight-left">
          <h2 className="highlight-left-title">Welcome to Ronald Board!</h2>
          <div className="highlight-left-wrapper">
            {dataLeft &&
              dataLeft.map((data: any) => {
                return (
                  <div className="highlight-left-card">
                    <p className="highlight-left-card-title">{data.title}</p>
                    <p className="highlight-left-card-desc">
                      {data.description}
                    </p>
                  </div>
                );
              })}
            <hr className="highlight-divider" />
            <div className="highlight-left-card-button-container">
              <button className="highlight-left-card-button">
                Getting Started
              </button>
            </div>
          </div>
        </div>
        <div className="highlight-mid">
          {dataMid &&
            dataMid.map((data: any) => {
              return (
                <div className="highlight-mid-card">
                  <div className="highlight-mid-card-container-header">
                    <FaSlack
                      className="highlight-mid-card-header-logo"
                      size={32}
                    />
                    <div className="highlight-mid-card-header-container-title">
                      <p className="highlight-mid-card-header-text-title">
                        {data.title}
                      </p>
                      <p className="highlight-mid-card-header-text-subTitle">
                        {data.subTitle}
                      </p>
                    </div>
                  </div>
                  <div className="highlight-mid-card-container-percentage">
                    <p className="highlight-mid-card-text-percentage">
                      {data.percentage}% complete
                    </p>
                    <p className="highlight-mid-card-text-dayLeft">
                      {data.dayLeft} days left
                    </p>
                  </div>
                  <div className="highlight-mid-card-bar-percentage">
                    <div
                      className="bar-fill"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                  <div className="highlight-mid-card-container-footer">
                    <img
                      src={userImg}
                      width={100}
                      className="highlight-mid-card-footer-iconProfile"
                    />
                    <div className="highlight-mid-card-footer-container-right">
                      <MdDelete
                        className="highlight-mid-card-footer-iconDelete"
                        size={32}
                      />
                      <p className="highlight-mid-card-footer-startDate">
                        Start {data.startDay} Nov
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="highlight-right">
          <div className="highlight-right-card-header">
            <h2 className="highlight-right-card-header-text-title">
              My Meetings
            </h2>
            <p className="highlight-right-card-header-text-seeAll">See all</p>
          </div>
          {dataRight &&
            dataRight.map((data: any) => {
              return (
                <div className={`highlight-right-card-body card-${data.color}`}>
                  <p className="highlight-right-card-body-text-title">
                    {data.title}
                  </p>
                  <p className="highlight-right-card-body-text-date">
                    {data.date}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Highlight;

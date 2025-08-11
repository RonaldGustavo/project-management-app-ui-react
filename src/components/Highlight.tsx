const Highlight = () => {
  const dataLeft = [
    {
      title: 'Edit your Taskboard',
      description:
        'Transform your environment to enhance productivity and creativity customize layout.',
      button: 'Getting Started',
    },

    {
      title: 'Edit your Workspace',
      description:
        'Transform your environment to enhance productivity and creativity customize layout.',
      button: 'Getting Started',
    },
  ];

  const dataMid = [
    {
      iconLogo: 'icon',
      title: 'Development Application Android',
      subTitle: 'Slack - Engineer',
      percentage: '80',
      dayLeft: '5',
      iconProfile: 'iconp',
      startDay: '14',
    },
    {
      iconLogo: 'icon',
      title: 'Development Application Ios',
      subTitle: 'Slack - Product',
      percentage: '50s',
      dayLeft: '2',
      iconProfile: 'iconp',
      startDay: '20',
    },
  ];

  return (
    <>
      <div className="highlight">
        <div className="highlight-left">
          <h2 className="highlight-left-title">Welcome to Ronald Board!</h2>
          {dataLeft &&
            dataLeft.map((data: any) => {
              return (
                <div className="highlight-left-card">
                  <p className="highlight-left-card-title">{data.title}</p>
                  <p className="highlight-left-card-desc">{data.description}</p>
                  <button className="highlight-left-card-button">{data.button}</button>
                </div>
              );
            })}
        </div>
        <div className="highlight-mid">
          {dataMid &&
            dataMid.map((data: any) => {
              return (
                <div className="highlight-mid-card">
                  <div className="highlight-mid-card-container-header">
                    <p className="highlight-mid-card-header-logo">{data.iconLogo}</p>
                    <div className="highlight-mid-card-header-container-title">
                      <p className="highlight-mid-card-header-text-title">{data.title}</p>
                      <p className="highlight-mid-card-header-text-subTitle">{data.subTitle}</p>
                    </div>
                  </div>
                  <div className="highlight-mid-card-container-percentage">
                    <p className="highlight-mid-card-text-percentage">{data.percentage}% complete</p>
                    <p className="highlight-mid-card-text-dayLeft">{data.dayLeft} days left</p>
                  </div>
                  <p className="highlight-mid-card-bar-percentage">{data.percentage}</p>
                  <div className="highlight-mid-card-container-footer">
                    <p className="highlight-mid-card-footer-iconProfile">{data.iconProfile}</p>
                    <div className="highlight-mid-card-footer-container-right">
                      <p className="highlight-mid-card-footer-iconDelete">icon</p>
                      <p className="highlight-mid-card-footer-startDate">Start {data.startDay} Nov</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="highlight-right"></div>
      </div>
    </>
  );
};

export default Highlight;

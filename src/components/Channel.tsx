const Channel = () => {
  const dataChannel = [
    {
      icon: 'icon',
      title: 'team engineer',
      notif: '2',
    },
    {
      icon: 'icon',
      title: 'team product',
      notif: '',
    },
    {
      icon: 'icon',
      title: 'team quality',
      notif: '2',
    },
    {
      icon: 'icon',
      title: 'team testing',
      notif: '0',
    },
  ];

  return (
    <>
      <div className="channel">
        <div className="channel-header">
          <p className="channel-header-title">Chat Channels</p>
          <p className="channel-header-create-channel">+Create new channel</p>
        </div>
        <input />
        {dataChannel &&
          dataChannel.map((data: any) => {
            return (
              <div className="channel-body-card">
                <div className="channel-body-card-title-container">
                  <p className="channel-body-card-icon">{data.icon}</p>
                  <p className="channel-body-card-title">{data.title}</p>
                </div>
                <p className="channel-body-card-notif">{data.notif}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Channel;

import { CiSearch } from "react-icons/ci";
import { MdGroup } from "react-icons/md";

const Channel = () => {
  const dataChannel = [
    {
      title: "team engineer",
      notif: "2",
    },
    {
      title: "team product",
      notif: "",
    },
    {
      title: "team quality",
      notif: "2",
    },
    {
      title: "team testing",
      notif: "",
    },
    {
      title: "team technical",
      notif: "5",
    },
  ];

  return (
    <>
      <div className="channel">
        <div className="channel-header">
          <p className="channel-header-title">Chat Channels</p>
          <p className="channel-header-create-channel">+ Create new channel</p>
        </div>

        <div className="channel-search-container">
          <CiSearch className="channel-search-icon" size={20} />
          <input
            placeholder="Search channel, messages, etc."
            className="channel-search-input"
          />
        </div>

        <div className="channel-list">
          {dataChannel.map((data: any) => (
            <div className="channel-body-card" key={data.title}>
              <div className="channel-body-card-title-container">
                <MdGroup className="channel-body-card-icon" size={32} />
                <p className="channel-body-card-title">{data.title}</p>
              </div>
              {data.notif && <p className="channel-body-card-notif">{data.notif}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Channel;

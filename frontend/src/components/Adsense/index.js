import React from "react";

class Adsense extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1138368574112081"
          data-ad-slot="3048716922"
          data-ad-format="auto"
        />
      </div>
    );
  }
}

export default Adsense;

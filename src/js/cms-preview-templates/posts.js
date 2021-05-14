import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw7 center ph3 pv4 off-white">
      <h1 className="f2 lh-title b mb3 primary">
        {entry.getIn(["data", "title"])}
      </h1>
      <div className="flex justify-between highlight">
        <p>{format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY")}</p>
        <p>Read in x minutes</p>
      </div>
      <div className="cms mw6">
        <p>{entry.getIn(["data", "description"])}</p>
        {/* {image && <img src={image} alt={entry.getIn(["data", "title"])} />} */}
        {widgetFor("body")}
      </div>
    </div>;
  }
}

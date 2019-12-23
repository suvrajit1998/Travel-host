import React from "react";

import PAKEGES_DATA from "../pagegesdata/pakegesdata";

import CollectionPreview from "../../components/collection-prevew/collectionprevew.component";

import "./pakeges.style.scss";

export default class Pakegespage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: PAKEGES_DATA
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...othercollectionprops }) => (
          <CollectionPreview key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}

import React from "react";

import MenuItems from "../menu-item/menu-item.component";

import "./directory.style.scss";

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Nature",
          imageurl:
            "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkurl: "nature"
        },
        {
          title: "Mountains",
          imageurl:
            "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2,
          linkurl: ""
        },
        {
          title: "Animals",
          imageurl:
            "https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkurl: ""
        },
        {
          title: "Recomendation",
          imageurl:
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 4,
          size: "large",
          linkurl: ""
        },
        {
          title: "Primium",
          imageurl:
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 5,
          size: "large",
          linkurl: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...othersectionprops }) => (
          <MenuItems key={id} {...othersectionprops} />
        ))}
      </div>
    );
  }
}

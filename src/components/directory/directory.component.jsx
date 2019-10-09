import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
class Directory extends React.Component {
  state = {
    sections: [
      {
        title: "کلاه ها",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1
      },
      {
        title: "کت ها",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2
      },
      {
        title: "کتانی ها",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3
      },
      {
        title: "زنانه",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4
      },
      {
        title: "مردانه",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5
      }
    ]
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;

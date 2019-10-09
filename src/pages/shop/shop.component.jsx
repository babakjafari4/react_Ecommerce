import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div style={{ direction: "rtl" }} className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;

import React from "react";

const Aside = () => {
  return <div className="max-xl:hidden"></div>;
};

// react.memo bileşen in aldığı proplar değişmedii müdetteçe bileşenin tekrardan render olasının önüne geçer
// Bir üst bileşenin olan feed bileşeninde user stateinin değişmesi feed bileşenin takrar render olmasına ardından aside bileşenin ise gereksiz yere render olmasına sebep oluyordu, react.memo ile bunun önüne geçtik.
export default React.memo(Aside);

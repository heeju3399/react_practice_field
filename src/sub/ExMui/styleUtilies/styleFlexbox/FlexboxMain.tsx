import AlignContent from "./AlignContent";
import PropertiesForTheParent from "./PropertiesForTheParent";
import FlexDirection from "./FlexDirection";
import FlexWrap from "./FlexWrap";
import JustifyContent from "./JustifyContent";
import PropertiesForTheChildren from "./PropertiesForTheChildren";
import AlignSelf from "./AlignSelf";
import FlexShrink from "./FlexShrink";
import AlignItems from "./AlignItems";

import FlexGrow from "./FlexGrow";

export default function FlexboxMain() {
  const MyDivider = () => {
    return (
      <hr
        style={{
          height: "3px",
          border: "0px",
          borderTop: "5px solid #663399",
          margin: "20px",
        }}
      />
    );
  };
  return (
    <>
      <PropertiesForTheParent />
      <MyDivider />
      <FlexDirection />
      <MyDivider />
      <FlexWrap />
      <MyDivider />
      <JustifyContent />
      <MyDivider />
      <AlignItems />
      <MyDivider />
      <AlignContent />
      <MyDivider />
      <PropertiesForTheChildren />
      <MyDivider />
      <FlexGrow />
      <MyDivider />
      <FlexShrink />
      <MyDivider />
      <AlignSelf />
      <MyDivider />
    </>
  );
}

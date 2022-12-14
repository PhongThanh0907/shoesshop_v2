import React from "react";

type Props = {
  title: string;
};

const TextLight = (props: Props) => {
  return <div className="text-light text-[50px] font-bold">{props.title}</div>;
};

export default TextLight;

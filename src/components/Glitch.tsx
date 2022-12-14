import React, { ReactNode } from "react";

type Props = {
  title: ReactNode;
};

const Glitch = (props: Props) => {
  return (
    <div className="glitch" data-text={props.title}>
      {props.title}
    </div>
  );
};

export default Glitch;

import React from "react";

interface Props {
  id: string;
  name: string;
}

const ButtonColor = (props: Props) => {
  return (
    <div>
      <a className="button-light text-white" href={props.id}>
        {props.name}
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </a>
    </div>
  );
};

export default ButtonColor;

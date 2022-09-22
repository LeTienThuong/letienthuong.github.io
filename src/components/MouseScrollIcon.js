import React from "react";
import styled from "styled-components";

const ScrollDowns = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;
  left: 0;
  margin: auto;
  width: 34px;
  height: 40px;

  .mousey {
    width: 3px;
    padding: 10px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;

function MouseScrollIcon() {
  return (
    <ScrollDowns>
      <div className="mousey">
        <div className="scroller" />
      </div>
    </ScrollDowns>
  );
}

export default MouseScrollIcon;

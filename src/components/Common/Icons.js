import React from "react";
import styled from "styled-components";

export const Icon = styled.div`
  display: inline-block;
  border: 1px solid white;
  width: 50px;
  height: 30px;
`;

export const FacebookIcon = ({ height, width, color }) => (
  <svg height={height} width={width}>
    <symbol id="icon-facebook" viewBox="0 0 32 32">
      <path
        style={{ fill: color }}
        d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
      ></path>
    </symbol>
  </svg>
);

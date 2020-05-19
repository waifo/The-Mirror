import React from "react";
import styled, { css, keyframes } from "styled-components";

const placeholderShimmer = keyframes`
    0% {
      background-position: -468px 0;
    }
    
    100% {
      background-position: 468px 0; 
    }
  `;

const ShimmerCss = css`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

const ShimmerContainer = styled.div`
  height: ${(props) => (props.height ? props.height : 0)};
  ${(props) => (props.customStyle ? props.customStyle : null)};
  ${ShimmerCss};
`;

export const Shimmer = ({ height, count, css }) => {
  const shimmerArray = [];
  for (let i = 0; i < count; i++) {
    shimmerArray.push(<ShimmerContainer customStyle={css} height={height} />);
  }
  return shimmerArray;
};

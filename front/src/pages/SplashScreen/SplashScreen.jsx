import React from "react";
import "./SplashScreen.css";
import splashLogo from "../../assets/splashlogo.svg";
import { useNavigate } from "react-router-dom";

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="splashRoot">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1508"
        height="865"
        viewBox="0 0 1508 865"
        fill="none"
        className="splashScreen"
      >
        <g filter="url(#filter0_d_234_1078)">
          <path
            d="M1491.83 334.212C1578.67 765.782 1183.52 912.873 858.023 838.596C532.521 764.318 43.1512 986.556 4 473.084C4 186.214 65.2367 -107.174 636.606 54.1686C809.87 103.095 1378.06 -231.188 1491.83 334.212Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_234_1078"
            x="0"
            y="0"
            width="1508"
            height="865"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_234_1078"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_234_1078"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <img src={splashLogo} className="splashScreen" alt="splash logo" />
      <h1>빌려온 사주</h1>
      <button onClick={() => navigate("/login")}>시작하기</button>
    </div>
  );
}
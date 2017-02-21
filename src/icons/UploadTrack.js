import React from 'react'
import {grey400} from 'theme'


const Camera = ({style, fill, height, width, viewBox}) => {
  return (
    <svg
      style={style}
      width={width || "118px"} height={height ||"130px"} viewBox={viewBox || "661 177 118 130"} version="1.1" xmlns="http://www.w3.org/2000/svg" >

      <g id="Upload-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(661.000000, 177.000000)">
          <text id="Upload-Track" fontFamily="HelveticaNeue-Light, Helvetica Neue" fontSize="20" fontWeight="300" fill={fill || grey400}>
              <tspan x="1" y="126">Upload Track</tspan>
          </text>
          <path d="M56.8333333,47.5 L42.75,61.5340909 L39.5,58.2954545 L59,38.8636364 L78.5,58.2954545 L75.25,61.5340909 L61.1666667,47.5 L61.1666667,95 L56.8333333,95 L56.8333333,47.5 L56.8333333,47.5 Z M52.5,69.0909091 L22.1788714,69.0909091 C12.6243995,69.0909091 4.83333333,61.3576457 4.83333333,51.8181818 C4.83333333,43.6335419 10.5733096,36.7552232 18.2710398,34.9865758 L18.2710398,34.9865758 C17.9835971,33.4438073 17.8333333,31.8530267 17.8333333,30.2272727 C17.8333333,15.9180762 29.4739291,4.31818182 43.8333333,4.31818182 C55.1669136,4.31818182 64.8067802,11.5444728 68.366172,21.625632 C71.721696,18.9041897 76.0029886,17.2727273 80.6666667,17.2727273 C90.8861517,17.2727273 99.2695102,25.1066259 100.099231,35.0769022 L100.099231,35.0769022 C107.596131,36.9770106 113.166667,43.7518881 113.166667,51.8181818 C113.166667,61.3382346 105.400805,69.0909091 95.8211285,69.0909091 L65.5,69.0909091 L65.5,73.4090909 L95.8357604,73.4090909 C107.80059,73.4090909 117.5,63.718248 117.5,51.8181818 C117.5,42.765463 111.92426,35.0140097 103.992408,31.8056118 L103.992408,31.8056118 C101.726761,21.0392586 92.1441699,12.9545455 80.6666667,12.9545455 C76.9274407,12.9545455 73.3893356,13.8126362 70.239836,15.3419889 C65.0284536,6.18125597 55.1552816,0 43.8333333,0 C27.0806951,0 13.5,13.5332101 13.5,30.2272727 C13.5,30.8238334 13.5173423,31.4163575 13.551552,32.0043721 L13.551552,32.0043721 C5.87185463,35.3296731 0.5,42.962157 0.5,51.8181818 C0.5,63.7425114 10.1741414,73.4090909 22.1642397,73.4090909 L52.5,73.4090909 L52.5,69.0909091 L52.5,69.0909091 L52.5,69.0909091 Z" id="cloud-upload" fill={fill || grey400}></path>
      </g>
    </svg>
  )
}

export default Camera

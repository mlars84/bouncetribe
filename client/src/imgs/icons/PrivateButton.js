import React from 'react'

const PrivateButton = (props) => {
  return (
    <svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Only-Me-(Unactive)" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <circle id="Oval" fill={props.fill} cx="37.5" cy="37.5" r="37.5"></circle>
            <path d="M49.5002039,55.5 L25.4997961,55.5 C23.842525,55.5 22.5004957,54.1567835 22.5004957,52.5002499 L22.5004957,37.5 C22.5004957,35.8434663 23.8440261,34.4987507 25.4997961,34.4987507 L26.9994463,34.4987507 L26.9994463,29.9998751 C26.9994463,24.2012576 31.7010523,19.5 37.5,19.5 C43.2989477,19.5 48.0005537,24.2012576 48.0005537,29.9998751 L48.0005537,34.4987507 L49.5002039,34.4987507 C51.157475,34.4987507 52.4995043,35.8419672 52.4995043,37.5 L52.4995043,52.5002499 C52.4995043,54.1552844 51.1559739,55.5 49.5002039,55.5 Z M43.500102,29.9998751 C43.500102,26.6868077 40.813041,24.0003748 37.5,24.0003748 C34.186959,24.0003748 31.499898,26.6868077 31.499898,29.9998751 L31.499898,34.4987507 L43.500102,34.4987507 L43.500102,29.9998751 Z" id="Lock" fill="#FFFFFF"></path>
        </g>
    </svg>
  )
}

export default PrivateButton
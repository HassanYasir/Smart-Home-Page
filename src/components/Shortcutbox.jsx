import PropTypes from "prop-types";
import "../App.css";
import { useState } from "react";
import { useSelector } from 'react-redux';

function Shortcutbox({
  link,
  src,
  title,
  disabled,
  setDilog,
  setSId,
  id,
  deleteShortcut,
}) {
    const [image, setImage] = useState(`${link}icon.ico`);
    const mainColor = useSelector((state) => state.color); 
  const handleEdit = () => {
    setSId(id);
    setDilog("EDIT");
  };
  const handleDelete = () => {
    deleteShortcut(id);
  };

  return (
    <div
      onClick={
        disabled
          ? () => {
              setDilog("CREATE");
            }
          : () => {}
      }
      className="shortcut-box "
    >
      <a
        className="box-cover"
        href={!disabled ? link : undefined}
        target="_blank"
      >
        <img src={image} alt="" onError={() => setImage(src)} />
      </a>
      <p className="tittle">{title}</p>
      <div className="edit-cont">
        {!disabled && 
        <svg
          className="delete"
          onClick={handleDelete}
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
        >
          <circle
            style={{
              fill: "#dedede",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 5.48896,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "stroke fill markers",
            }}
            id="path5"
            cx="256"
            cy="256"
            r="256"
          />
          <path
            id="path2"
            style={{
              fill: "#0d0d0d",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 5.07448,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "stroke fill markers",
            }}
            d="m 255.84561,72.65423 c -38.21707,-0.268191 -33.79133,34.07395 -33.79133,34.07395 l 67.85202,-0.1678 c 0,0 4.15638,-33.637961 -34.06069,-33.90615 z m -33.79133,34.07395 -102.58395,0.25391 c 0,0 -12.87288,-1.34088 -12.60469,11.66634 0.26818,13.00721 -0.26715,15.5544 -0.26715,15.5544 l 298.49425,-0.40183 0.26936,-16.09091 c 0,0 2.54656,-10.59553 -11.93572,-10.59553 -14.48225,0 -56.32037,-0.66899 -56.32037,-0.66899 z m -93.46547,54.83008 -1.60954,2.41318 12.06818,254.24426 c 0,0 -1.3391,20.38212 16.62963,21.18665 17.96873,0.80458 51.22242,10e-6 51.22242,0 l 147.50511,0.26936 c 0,0 18.5054,-9.5e-4 19.30997,-17.9698 0.80458,-17.96873 -0.53651,-25.20938 -0.53651,-25.20938 l 12.06818,-233.32475 z m 123.92293,35.50684 c 7.33753,-0.18512 13.34347,5.57493 13.46575,12.9138 l 2.93867,176.33979 c 0.12228,7.33887 -5.68663,13.39546 -13.02419,13.58058 -7.33755,0.18512 -13.34347,-5.57273 -13.46575,-12.91159 l -2.93867,-176.34202 c -0.12228,-7.33886 5.68663,-13.39544 13.02419,-13.58056 z m 67.51203,0 c 7.33754,-0.18512 13.34348,5.57493 13.46576,12.9138 l 2.93867,176.33979 c 0.12227,7.33887 -5.68665,13.39546 -13.02418,13.58058 -7.33755,0.18512 -13.34349,-5.57273 -13.46576,-12.91159 l -2.93867,-176.34202 c -0.12229,-7.33886 5.68663,-13.39544 13.02418,-13.58056 z m -132.74776,0.75951 c 7.33754,-0.18513 13.34348,5.57271 13.46576,12.91158 l 2.93866,176.34202 c 0.12228,7.33886 -5.68663,13.39543 -13.02419,13.58056 -7.33753,0.18512 -13.34347,-5.57493 -13.46574,-12.91379 l -2.93867,-176.33981 c -0.12229,-7.33886 5.68663,-13.39544 13.02418,-13.58056 z"
          />
        </svg>
        }
        {!disabled &&
        <svg
          className="edit"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleEdit}
        >
          <circle
            style={{
              fill: `${mainColor}`,
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 4.35011,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "stroke fill markers",
            }}
            id="path2"
            cx="256.66788"
            cy="255.95859"
            r="251.97748"
          />
          <path
            id="path1"
            style={{
              fill: "#dddddd",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 4.66066,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              paintOrder: "stroke fill markers",
            }}
            d="m 337.62035,109.39058 c -3.52701,0.0327 -7.05463,0.64276 -10.18976,2.21033 -12.54054,6.27027 -37.62205,37.62001 -37.62205,37.62001 l 73.85098,73.85098 32.74313,-33.44271 c 0,0 11.8447,-23.68726 0.69756,-36.92449 -11.14715,-13.23722 -38.31759,-38.31758 -38.31759,-38.31758 0,0 -10.58119,-5.0945 -21.16227,-4.99654 z m -63.18264,54.99637 -137.94006,140.12806 -15.27148,45.3237 c 0,0 -0.49264,2.95576 -8.37486,33.00674 -7.88221,30.05096 20.19906,16.74974 20.19906,16.74974 l 78.82115,-26.6029 135.71757,-136.49828 z"
          />
        </svg>
        }
      </div>
    </div>
  );
}

Shortcutbox.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
  tittle: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Shortcutbox;

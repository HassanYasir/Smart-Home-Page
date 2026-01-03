import { useSelector, useDispatch } from 'react-redux';
import { changePageSize } from '../store/pageSizeSlice';


function Slider() {
  const pageSize = useSelector((state) => state.pageSize);
  const dispatch = useDispatch();
  const mainColor = useSelector((state) => state.color); 

  const progress = (pageSize / 10) * 100; // value in percentage
  const trackStyle = {
    background: `linear-gradient(to right,${mainColor} ${progress-5}%, #4b4b4b ${progress}%)`,
  };
  const handleChange = (e) => {

    dispatch(changePageSize(e.target.value));

    
  };

  return (
    <div style={{ width: "80%", fontFamily: "sans-serif",alignContent:"center",margin:"5px" }} className="Slider">
      <input
        type="range"
        min="1"
        max="10"
        value={pageSize}
        onChange={handleChange}
        style={trackStyle}
      />
      <span style={{ marginLeft: "10px", fontWeight: "bold" }}>{pageSize}</span>
    </div>
  );
}

export default Slider;
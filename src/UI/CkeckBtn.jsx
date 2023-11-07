const CheckBtn = ({ onChange, checked }) => {
  return (
    <label className="switch">
      <input onChange={onChange} type="checkbox" checked={checked} />
      <span className="slider round"></span>
    </label>
  );
};

export default CheckBtn;

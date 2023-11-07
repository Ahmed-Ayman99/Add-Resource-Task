import BookingOptions from "./BookingOptions";
import NumberSelected from "./NumberSelected";
import TimeOptions from "./TimeOptions";

const OptionsArea = () => {
  return (
    <div className="option-area">
      <NumberSelected />
      <TimeOptions />
      <BookingOptions />
    </div>
  );
};

export default OptionsArea;

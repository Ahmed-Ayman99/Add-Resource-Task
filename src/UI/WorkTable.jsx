import { useDirection } from "../context/DirectionContext";
import { weekDays } from "../utils/constans";
import TableRow from "./TableRow";

const WorkTable = () => {
  const { direction } = useDirection();

  return (
    <div className="work-table">
      {weekDays.map((day, ind) => (
        <TableRow direction={direction} key={ind} day={day} />
      ))}
    </div>
  );
};

export default WorkTable;

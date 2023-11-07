import { useEffect } from "react";

import { useDirection } from "./context/DirectionContext";
import ResourceAvailable from "./UI/ResourceAvailable";
import ResourceBooking from "./UI/ResourceBooking";
import ResourceData from "./UI/ResourceData";
import ResourceInfo from "./UI/ResourceInfo";
import WorkTable from "./UI/WorkTable";
import WorkTime from "./UI/WorkTime";
import Header from "./UI/Header";
import Main from "./UI/Main";

const App = () => {
  const { direction } = useDirection();

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  return (
    <div className="container">
      <Header />

      <Main>
        <ResourceData>
          <div className="info-container">
            <ResourceInfo />
            <ResourceBooking />
          </div>
          <ResourceAvailable />
        </ResourceData>

        <WorkTime>
          <WorkTable />
        </WorkTime>
      </Main>
    </div>
  );
};

export default App;

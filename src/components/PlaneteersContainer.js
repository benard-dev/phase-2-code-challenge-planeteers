import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteersArray}) {
  const renderPlaneteers = planeteersArray.map((planeteer) => <Planeteer key={planeteer.name} planeteer={planeteer}></Planeteer>)

  return (
    <ul className="cards">
      {renderPlaneteers}
    </ul>
  );
}

export default PlaneteersContainer;

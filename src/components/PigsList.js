import React from "react";
import PigCard from "./PigCard";

const PigsList = ({pigs}) => {
  const currentPigs = pigs.map((pig, index) => {
    return <PigCard
      key={index}
      name={pig.name}
      greased={pig.greased}
      specialty={pig.specialty}
      highestMedalAchieved={pig["highest medal achieved"]}
      weight={pig["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
    />
  });
  return (
    <div className="ui special four cards">

      {currentPigs}
    </div>
  );
};

export default PigsList;
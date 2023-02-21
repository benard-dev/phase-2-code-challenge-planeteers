import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteersArray, setPlaneteersArray] = useState([])
  const [filteredPlaneteersArray, setFilteredPlaneteersArray] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
    filterPlaneteersArray(event.target.value)
  }

  const filterPlaneteersArray = (search) => {
    setFilteredPlaneteersArray(planeteersArray.filter((planeteer) => {
      if (search === "") return true
      else if (planeteer.bio.includes(search) || planeteer.name === search) return true
      else return false
    }))
  }

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
    .then((r) => r.json())
    .then((planeteers) => {
      setPlaneteersArray(planeteers)
      setFilteredPlaneteersArray(planeteers)
    })
  }, [])

  return (
    <div>
      <Header />
      <SearchBar search={search} handleSearch={handleSearch} />
      <RandomButton />
      <PlaneteersContainer planeteersArray={filteredPlaneteersArray} />
    </div>
  );
}

export default App;

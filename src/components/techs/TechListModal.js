import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Technician List</h4>

        {!loading && techs.length === 0 ? (
          <p className="center">No technicians</p>
        ) : (
          <ul className="collection">
            {techs.map((tech) => (
              <TechItem tech={tech} key={tech.id}></TechItem>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TechListModal;

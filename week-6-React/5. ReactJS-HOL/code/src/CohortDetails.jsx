import React from "react";
import styles from "./CohortDetails.module.css";

const CohortDetails = ({ cohort }) => {
  return (
    <div className={styles.box}>
      <h3 style={{ color: cohort.status.toLowerCase() === "ongoing" ? "green" : "blue" }}>
        {cohort.name}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startedOn}</dd>

        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>

        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>

        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
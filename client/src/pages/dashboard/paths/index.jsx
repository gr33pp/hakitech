import React, { useContext } from "react";
import { usageData } from "@/utils";
import { DashboardUsageCardItem } from "..";
import { notifications } from "../../../utils";
import { NotificationsCard } from "../navigation";
import "./path.scss";
import { UserContext } from "@/context";
import UsageChart from "@/charts";

export const Usage = ({ filter }) => {
  return (
    <div className="usage">
      <div className="card-usage path dashboard-usage">
        {usageData.map((data, i) => (
          <DashboardUsageCardItem key={i} {...data} />
        ))}
      </div>
      <UsageChart _filter={filter || "hourly"} />
    </div>
  );
};

export const Payments = () => {
  const { history } = useContext(UserContext);
  return (
    <div className="payments">
      {history.length > 0 ? (
        history.map((data, i) => (
          <NotificationsCard key={i} msg={data.message} fixed />
        ))
      ) : (
        <NotificationsCard msg="No payment history" fixed />
      )}
    </div>
  );
};

// const

import React, { useContext } from "react";
import { usageData } from "@/utils";
import { DashboardUsageCardItem } from "..";
import { notifications } from "../../../utils";
import { NotificationsCard } from "../navigation";
import "./path.scss";
import { UserContext } from "@/context";

export const Usage = () => {
  return (
    <div className="card-usage path">
      {usageData.map((data, i) => (
        <DashboardUsageCardItem key={i} {...data} />
      ))}
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

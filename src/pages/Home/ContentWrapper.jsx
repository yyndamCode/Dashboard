import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { SalesOverview } from "./SalesOverview";
import RevenueGenerated from "./RevenueGenerated";
import { EarningReports } from "./EarningReports";
import { SupportTracker } from "./SupportTracker";
import { WebsiteAnalytics } from "./WebsiteAnalytics";
import { TotalEarningCard } from "./TotalEarningCard";
import { MonthlyCampaign } from "./MonthlyCampaign";
import { SalesCountriesCard } from "./SalesCountries";
import { CampaignData, salesData } from "../../service/data";
import { Projects } from "./Projects";
export const ContentWrapper = () => {
  return (
    <section className="my-[20px] ">
      <div className="grid grid-cols-2 gap-6">
        <WebsiteAnalytics />
        <div className="flex gap-6">
          <SalesOverview
            title="Sales Overview"
            icon={<FiShoppingCart />}
            percentage="+18.2%"
            value="$42.5k"
            secondaryValue="62.2%"
          />
          <RevenueGenerated value={`${97.5}k`} />
        </div>
        <EarningReports />
        <SupportTracker />
      </div>
      <div className="grid grid-cols-3 gap-6 w-full my-[20px]">
        <SalesCountriesCard sales_Data={salesData} />
        <TotalEarningCard />
        <MonthlyCampaign
          Campaign_Data={CampaignData}
          title="Monthly Campaign State"
          subTitle="8.52k Social Visitors"
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <MonthlyCampaign
            Campaign_Data={CampaignData}
            title="Source Visits"
            subTitle="38.4k Visitors"
          />
        </div>
        <div className="col-span-2">
          <Projects />
        </div>
      </div>
    </section>
  );
};

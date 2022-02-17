import { AppLayout } from "../app-layout";
import "../styles.css";
import { DetaiClusterPage, mockRouter } from "./detail-cluster-page";

export default {
  title: "Managed Service / Pages /Clusters",
};

export const DetailCluster = () => (
  <AppLayout router={mockRouter}>
    <DetaiClusterPage />
  </AppLayout>
);

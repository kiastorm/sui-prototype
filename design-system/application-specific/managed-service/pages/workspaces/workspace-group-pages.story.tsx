import { AppLayout } from "../../one-offs/app-layout";
import "../../styles.css";
import {
  DetailWorkspaceGroupPage,
  mockRouter,
} from "./detail-workspace-group-page";

export default {
  title: "Managed Service/Pages/Workspaces",
};

export const DetailWorkspaceGroup = () => (
  <AppLayout router={mockRouter}>
    <DetailWorkspaceGroupPage />
  </AppLayout>
);

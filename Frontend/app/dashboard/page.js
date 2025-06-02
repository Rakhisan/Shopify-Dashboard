import Dashboard from "@/app/dashboard/Dashboard";
import ImportPlatformsDashboard from "@/app/dashboard/ImportPlatformsDashboard";
import ExportPlatformsDashboard from "@/app/dashboard/ExportPlatformsDashboard";

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
      <ExportPlatformsDashboard />
      <ImportPlatformsDashboard />
    </>
  );
}

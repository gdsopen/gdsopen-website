import { createFileRoute } from "@tanstack/react-router";
import { PageBase } from "@/components/PageBase";

export const Route = createFileRoute("/about")({
  component: App,
});

function App() {
  return (
    <PageBase>
      <p>運営者情報</p>
    </PageBase>
  );
}

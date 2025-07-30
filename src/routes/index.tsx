import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { PageWrap } from "@/components/PageWrap";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <Navbar
        contents={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <PageWrap>
        <p>123あ</p>
      </PageWrap>
    </div>
  );
}

import { css } from "styled-system/css";
import { Navbar } from "./navbar";
import { PageWrap } from "./PageWrap";

type PageBaseProps = {
  children: React.ReactNode;
};

export const PageBase: React.FC<PageBaseProps> = ({ children }) => {
  return (
    <div>
      <Navbar
        contents={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <PageWrap className={css({ marginTop: "10px" })}>{children}</PageWrap>
    </div>
  );
};

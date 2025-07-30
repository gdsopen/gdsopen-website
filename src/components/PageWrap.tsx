import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { css } from "styled-system/css";

type PageWrapProps = {
  className?: string;
};

export const PageWrap: React.FC<PropsWithChildren<PageWrapProps>> = ({ children, className }) => {
  return (
    <div className={clsx(css({ maxWidth: "1140px", marginX: "auto" }), className)}>{children}</div>
  );
};

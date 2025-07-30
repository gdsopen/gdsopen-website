import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { css } from "styled-system/css";

type NavbarProps = {
  contents: {
    label: string;
    href: string;
  }[];
};

export const Navbar: React.FC<NavbarProps> = ({ contents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={css({ position: "relative" })}>
      <div
        className={css({
          margin: "0 auto",
          maxWidth: "1200px",
          paddingY: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        })}
      >
        <Link to="/">
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "10px",
              fontFamily: "heading",
            })}
          >
            <img
              src="/logo.svg"
              alt="GDSOPENのロゴ"
              className={css({
                width: "120px",
                lg: {
                  width: "160px",
                },
              })}
            />
            <p
              className={css({
                fontWeight: 500,
                fontSize: "13px",
                lg: {
                  fontSize: "20px",
                },
              })}
            >
              Open Source
            </p>
          </span>
        </Link>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          type="button"
          onClick={toggleMenu}
          className={css({
            display: { base: "flex", lg: "none" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "40px",
            height: "40px",
            padding: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            gap: "4px",
            _hover: {
              opacity: 0.7,
            },
          })}
          aria-label="メニューを開く"
        >
          <span
            className={css({
              display: "block",
              width: "24px",
              height: "3px",
              backgroundColor: "#333",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
            })}
          />
          <span
            className={css({
              display: "block",
              width: "24px",
              height: "3px",
              backgroundColor: "#333",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: isMenuOpen ? 0 : 1,
            })}
          />
          <span
            className={css({
              display: "block",
              width: "24px",
              height: "3px",
              backgroundColor: "#333",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
            })}
          />
        </button>
      </div>

      {/* デスクトップ用ナビゲーション */}
      <div
        className={css({
          display: { base: "none", lg: "flex" },
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#9cd0e1",
          gap: "20px",
          fontWeight: 700,
        })}
      >
        {contents.map((content, index) => (
          <span
            key={content.href}
            className={css({
              fontFamily: "heading",
              textDecoration: "none",
              color: "#333",
              ...(index < contents.length - 1 && {
                borderRight: "1px solid #333",
                paddingRight: "20px",
              }),
              _hover: {
                textDecoration: "underline",
              },
            })}
          >
            <Link
              to={content.href}
              className={css({
                paddingX: "10px",
                paddingY: "5px",
              })}
            >
              {content.label}
            </Link>
          </span>
        ))}
      </div>

      {/* モバイル用ナビゲーション */}
      <div
        className={css({
          display: { base: "flex", lg: "none" },
          flexDirection: "column",
          backgroundColor: "#9cd0e1",
          position: "fixed",
          top: "auto",
          fontFamily: "heading",
          left: 0,
          right: 0,
          maxHeight: isMenuOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          zIndex: 1000,
          boxShadow: isMenuOpen ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          borderBottom: "2px solid #CCC",
        })}
      >
        {contents.map((content) => (
          <Link
            key={content.href}
            to={content.href}
            className={css({
              display: "block",
              padding: "15px 20px",
              color: "#333",
              textDecoration: "none",
              fontWeight: 700,
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              _hover: {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              },
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            {content.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

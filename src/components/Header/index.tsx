import { useEffect, useState } from "react";
import { useScrollPosition } from "../../hooks/hooks";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/logo.svg";
import {
  DropdownAppButton,
  DropdownItems,
  DropdownMenuClose,
  DropdownMenuContent,
  DropdownOpenButton,
  HeaderBtn,
  HeaderContainer,
  HeaderImage,
  HeaderNav,
} from "./styles";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [showDropdown, setShowDropdown] = useState<boolean>(window.innerWidth < 1100);

  const updateWidth = () => {
    if (window.innerWidth < 1100) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <HeaderContainer className={scrollPosition > 400 ? "showBackground" : "hideBackground"}>
      <HeaderImage>
        <img src={Logo} alt="Logo do colecionável.digital" />
      </HeaderImage>
      {showDropdown ? (
        <Menu>
          {({ open }) => (
            <>
              <DropdownOpenButton>
                <GiHamburgerMenu />
              </DropdownOpenButton>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, position: "absolute", width: "100vw", height: "100vh", left: 0, top: 0, y: "-10%" }}
                    animate={{ opacity: 1, y: "0" }}
                    exit={{ opacity: 0, y: "10%" }}
                  >
                    <DropdownItems>
                      <DropdownMenuClose>
                        <Menu.Item>
                          <button>
                            <IoMdClose />
                          </button>
                        </Menu.Item>
                      </DropdownMenuClose>
                      <DropdownMenuContent>
                        <img src={Logo} alt="Logo do colecionável.digital" />
                        <Menu.Item>
                          <a href="#">Sobre</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="#info-section">Como funciona</a>
                        </Menu.Item>
                        <Menu.Item>
                          <a href="#faq-section">Perguntas Frequentes</a>
                        </Menu.Item>
                        <Menu.Item>
                          <DropdownAppButton href="https://app.colecionavel.digital/" target="_blank" className="appRedirect">
                            Acessar App
                          </DropdownAppButton>
                        </Menu.Item>
                      </DropdownMenuContent>
                    </DropdownItems>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Menu>
      ) : (
        <>
          <HeaderNav>
            <a href="#">Sobre</a>
            <a href="#info-section">Como funciona</a>
            <a href="#faq-section">Perguntas Frequentes</a>
          </HeaderNav>
          <HeaderBtn>
            <a href="https://app.colecionavel.digital/" target="_blank">
              Acessar App
            </a>
          </HeaderBtn>
        </>
      )}
    </HeaderContainer>
  );
}

import React from "react";
import { Icon } from "@iconify/react";
export const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 bg-gray-700 text-white">
        <aside className="items-center grid-flow-col">
          <Icon icon="icon-park:new-computer" width="50" height="50" />
          <p>Since 2021 - DIM Store </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <Icon icon="logos:mastercard" width="50" />
          </a>
          <a>
            <Icon icon="logos:paypal" width="40" height="35" />
          </a>
          <a>
            <Icon icon="logos:visaelectron" width="50" height="40" />
          </a>
          <a>
            <Icon icon="logos:maestro" width="50" height="40" />
          </a>
        </nav>
      </footer>
    </>
  );
};

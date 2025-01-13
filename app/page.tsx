"use client";

import Accordion from "./components/Accordion";
import cn from "./utils/cn";

export default function Home() {
  return (
    <main className="home">
      <h1>Opened Accordion when the page is loaded</h1>
      <Accordion className="accordion">
        <Accordion.Summary open>
          {(open) => (
            <div className={cn("accordion__summary", open && "active")}>
              <h4>Heading</h4>
              <svg
                width="14"
                height="7"
                viewBox="0 0 14 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8332 0.5L6.99984 6.33333L1.1665 0.5"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </Accordion.Summary>
        <Accordion.Content className="accordion__content">
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Accordion.Content>
      </Accordion>
      <h2>Closed Accordion when the page is loaded</h2>
      <Accordion className="accordion">
        <Accordion.Summary>
          {(open) => (
            <div className={cn("accordion__summary", open && "active")}>
              <h4>Heading</h4>
              <svg
                width="14"
                height="7"
                viewBox="0 0 14 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8332 0.5L6.99984 6.33333L1.1665 0.5"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </Accordion.Summary>
        <Accordion.Content className="accordion__content">
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Accordion.Content>
      </Accordion>
    </main>
  );
}

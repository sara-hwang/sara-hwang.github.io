import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <section
          className="intro"
          data-scroll //This attribute makes this section an independent scrollable container
          data-scroll-speed="4"
          data-scroll-section
        >
          <h1> 👋 Hi! I'm Sara</h1>
          <h2>
            Nice to meet you, please make yourself comfortable as you look
            around 😄
          </h2>
        </section>
        <section className="contents" data-scroll-section>
          <h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="9"
          >
            I Love React
          </h1>
          <h1
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="9" // Values provided here affect the animations
          >
            That's why I code every day
          </h1>
        </section>
        <section id="stick" data-scroll-section className="cookbook">
          <h1
            data-scroll
            data-scroll-speed="5"
            data-scroll-sticky // Attibute that enables the sticky scroll
            data-scroll-target="#stick"
            data-scroll-class="spin"
            data-scroll-repeat="true"
          >
            Cookbook Web App
          </h1>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
          <p>other contents</p>
        </section>
        <section className="footer" data-scroll-section>
          <h1>Don't let this be the end...</h1>
          <h1
            className="op-class"
            data-scroll
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll-speed="2"
          >
            Drop me a line!
            <div className="contact-buttons">
              <IconButton href="mailto:shw9925@gmail.com" target="_blank">
                <MailOutline sx={{ color: "rgb(83, 51, 0)" }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/sara-hwang1/"
                target="_blank"
              >
                <LinkedIn sx={{ color: "rgb(83, 51, 0)" }} />
              </IconButton>
              <IconButton href="https://github.com/sara-hwang/" target="_blank">
                <GitHub sx={{ color: "rgb(83, 51, 0)" }} />
              </IconButton>
            </div>
          </h1>
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;

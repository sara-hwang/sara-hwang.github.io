import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";

function App() {
  return (
    <div className="mandatory-scroll-snap">
      <div
        style={{
          position: "fixed",
          display: "flex",
          top: 0,
          width: "100%",
          height: "fit-content",
          backgroundColor: "#abf1ff",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <IconButton
          disableRipple
          href="mailto:shw9925@gmail.com"
          target="_blank"
        >
          <MailOutline sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          disableRipple
          href="https://linkedin.com/in/sara-hwang1/"
          target="_blank"
        >
          <LinkedIn sx={{ color: "black" }} />
        </IconButton>
        <IconButton
          disableRipple
          href="https://github.com/sara-hwang/"
          target="_blank"
        >
          <GitHub sx={{ color: "black" }} />
        </IconButton>
      </div>
      <section id="about" className="intro">
        <Grid>
          <Grid container direction="row" spacing={5}>
            <Grid item container direction="column" spacing={1} xs>
              <Grid item>
                <h1>👋 Hi! I'm Sara,</h1>
              </Grid>
              <Grid item>
                <h3>a software developer from Vancouver, BC</h3>
              </Grid>
              <Grid item container direction="row" spacing={1}>
                <Grid item>
                  <h3> with a passion for </h3>
                </Grid>
                <Grid item>
                  <div class="typewriter">
                    <div class="text">
                      <div class="wrapper">
                        <p>solving problems</p>
                        <p>learning new skills</p>
                        <p>elevating UX</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <img src="picture.png" width="200px" />
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section id="projects">
        <Grid>
          <Grid container>
            <Grid item xs={12}>
              <h2>Cookbook </h2>
            </Grid>
            <Grid item container direction="row">
              <Grid
                item
                container
                direction="column"
                xs={12}
                md={4}
                spacing={2}
              >
                <Grid item>
                  <h4>
                    Hosted using AWS and Netlify at
                    <a href="https://susanscookbook.netlify.app">
                      <u>www.susanscookbook.netlify.app</u>
                    </a>
                  </h4>
                </Grid>
                <Grid item>
                  <h4>Securely encrypted with HTTPS using Let's Encrypt</h4>
                </Grid>
                <Grid item>
                  <h4>Tech Stack:</h4>
                  <ul>
                    <li>Front-end: TypeScript and React</li>
                    <li>Back-end: JavaScript and Express</li>
                    <li>Database: MongoDB</li>
                  </ul>
                </Grid>
                <Grid item>
                  <h4>APIs:</h4>
                  <ul>
                    <li>Imgur</li>
                    <li>Food Data Central</li>
                  </ul>
                </Grid>
                <Grid item>
                  <h4>Libraries:</h4>
                  <ul>
                    <li>Formik</li>
                    <li>MaterialUI</li>
                    <li>React Auth Kit</li>
                    <li>Redux Toolkit</li>
                    <li>Splide.js</li>
                    <li>Yup</li>
                  </ul>
                </Grid>
              </Grid>
              <Grid item xs>
                <img
                  src="cookbook.png"
                  style={{ display: "flex", maxWidth: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <div style={{ position: "sticky", bottom: 0 }}>
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
      </div>
    </div>
  );
}

export default App;

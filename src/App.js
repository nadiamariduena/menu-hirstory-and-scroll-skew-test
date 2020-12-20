import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import useWindowSize from "./hooks/useWindowSize"; //3
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // HOOK
  //   4
  const size = useWindowSize();
  //
  //
  //1  ---------------
  //   REF
  const porto = useRef();
  const scrollContainer = useRef();
  const steve = useRef();
  //
  //
  //
  //
  //   ---------------
  // 7 related to the 6 step
  const skewConfigs = {
    ease: 0.1, //this is the reason why it dodnt work the first time, the problem was that i set it up at 1 instead of 0.1
    current: 0,
    previous: 0,
    rounded: 0,
  };
  //
  //
  // 2 ------------------
  //
  useEffect(() => {
    //   what the useEffect is doing here is replacing the componentdidMOunt
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
    // 5  after you add this: const size = useWindowSize(); THEN ADD this: [size.height]);
  }, [size.height]);
  //
  //
  //

  //
  // //    useEffect(() => {  BEFORE** this error:
  //   Line 48:6:  React Hook useEffect has a missing dependency: 'skewScrolling'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  //     requestAnimationFrame(() => skewScrolling());
  // }, []);
  //
  //
  // 6 ------------------
  //
  const skewScrolling = () => {
    //   all the following is connected to the skewConfigs function on line 18
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //

    //
    //
    // 8 ------------  Difference between
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width; //you access size.width through useWindowSize(); on line 9, thats connected to the function in the HOOK file
    const velocity = +acceleration;
    const skew = velocity * 5.5; //original 7.5  the more the scroll is emphasized the more the deg of the image/content , is going to move in a direction
    //
    //
    // 9 ----------    //Assign skew and smooth scrolling to the scroll container
    // debugger
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    //

    // 10 ------------
    // console.log("I am running constantly");
    // console.log(scrollContainer);
    steve.current = requestAnimationFrame(skewScrolling);
  };
  //
  //
  // 11 ------------
  useEffect(() => {
    if (skewScrolling) {
      steve.current = requestAnimationFrame(skewScrolling);
      return () => cancelAnimationFrame(steve.current);
    }
  }, [skewScrolling]);
  //
  //
  //
  //

  return (
    <Router>
      <div className="App">
        <div ref={porto} className="home">
          <div ref={scrollContainer} className="scroll">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/opportunities" component={Opportunities} />
              <Route exact path="/solutions" component={Solutions} />
              <Route exact path="/contact-us" component={Contact} />
            </Switch>
          </div>
        </div>
        {/* --------------- */}
      </div>
    </Router>
  );
}

function Opportunities() {
  // you can import the content component of this page "Opportunities"
  return (
    <div className="routes-content">
      <div className="routes-content-top">
        <p>Discover our numerous opportunities</p>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <div className="routes-content">
      <div className="routes-content-top">
        <p>Solutions that help you.</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="routes-content">
      <div className="routes-content-top">
        <p>Feel free to reach us.</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home-content">
      <div className="home-content-top">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
      {/* ---------- */}
      <div className="home-content-middle">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
      <div className="home-content-middle">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
      <div className="home-content-middle">
        <h5>
          The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
      </div>
    </div>
  );
}

export default App;

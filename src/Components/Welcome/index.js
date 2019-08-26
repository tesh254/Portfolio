import React from "react";
import "./index.scss";
import Typewriter from "./Typewriter";
import Comms from "./Comms";

const Welcome = () => (
    <section className="welcome">
        <Typewriter />
        <Comms />
    </section>
)

export default Welcome;

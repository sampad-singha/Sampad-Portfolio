import React from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import { SiTailwindcss } from "react-icons/si";
import {
    DiReact,
    DiMysql,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

import {
    FaLaravel,
    FaPhp,
    FaBootstrap,
} from "react-icons/fa";

function TechStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <FaLaravel/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoJavascript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTailwindcss/>
            </Col>
        </Row>
    );
}

export default TechStack;

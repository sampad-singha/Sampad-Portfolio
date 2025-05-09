import React, {useState, useEffect} from "react";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import {Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Sampad_Singha_PUST.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {IconButton} from "@mui/material";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (<div>
        <Container fluid className="resume-section">
            <Particle/>
            <Row style={{justifyContent: "center", position: "relative"}}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{maxWidth: "250px"}}
                >
                    <AiOutlineDownload/>
                    &nbsp;Download CV
                </Button>
            </Row>

            <Row className="resume">
                <Document
                    file={pdf}
                    className="d-flex justify-content-center"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={currentPage} scale={width > 786 ? 1.7 : 0.6}/>
                </Document>
            </Row>

            <Row style={{justifyContent: "center", position: "relative", marginTop: "20px"}}>
                <Col md={12} className="text-center">
                    <IconButton
                        onClick={handlePreviousPage}
                        color="secondary"
                        disabled={currentPage <= 1}
                    >
                        <FaArrowAltCircleLeft size={34}/>
                    </IconButton>

                    <span style={{margin: "0 15px"}}>
                        Page {currentPage} of {numPages}
                    </span>

                    <IconButton
                        onClick={handleNextPage}
                        color="secondary"
                        disabled={currentPage >= numPages}
                    >
                        <FaArrowAltCircleRight size={32}/>
                    </IconButton>
                </Col>
            </Row>

            <Row style={{justifyContent: "center", position: "relative", marginTop: "20px"}}>
                <Button
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{maxWidth: "250px"}}
                >
                    <AiOutlineDownload/>
                    &nbsp;Download CV
                </Button>
            </Row>
        </Container>
    </div>);
}

export default ResumeNew;
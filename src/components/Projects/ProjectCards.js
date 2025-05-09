import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsGithub} from "react-icons/bs";
import {Chip} from "@mui/material";



function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                    {props.description}
                    {
                        props.tags &&
                        <div className='mt-4 mb-2 flex flex-wrap gap-2'>
                            {
                                props.tags.map((tag, i) => {
                                    return <Chip sx={{ mr: 2}} key={i} label={tag} color="info" variant="outlined"/>
                                })
                            }
                        </div>
                    }
                </Card.Text>
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub/> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{marginLeft: "10px"}}
                    >
                        <CgWebsite/> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;

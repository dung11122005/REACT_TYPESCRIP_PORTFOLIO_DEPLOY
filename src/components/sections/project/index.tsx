import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useCurrentApp } from "@/components/context/app.context";
import { useTranslation } from "react-i18next";


type TLanguage = "vi" | "en";

const Project = () => {

    const { theme } = useCurrentApp();
    const { t, i18n } = useTranslation();


    const currentlanguage = (i18n.resolvedLanguage) as TLanguage;

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">My Recent <span className="brand-red">Works</span> </h3>
                    <h6 className="text-center mb-md-5 mb-2">Here are a few projects I've worked on recently.</h6>
                </Col>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {PROJECTS?.map(item => {
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title[currentlanguage]}
                                description={item.description[currentlanguage]}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;
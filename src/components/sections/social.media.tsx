import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


interface IProps {
    github: string;
    facebook: string;
    linkedin: string;
}

const SocialMedia = (props: IProps) => {
    const { github, linkedin, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Github Hoàng Tấn Dũng">
                <FaGithub size={30} />
            </a>
            <a href={linkedin} target='_blank' className="highlight" title="Linkedin Hoàng Tấn Dũng">
                <FaLinkedin size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Hoàng Tấn Dũng">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;
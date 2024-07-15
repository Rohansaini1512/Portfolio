import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
    // let year = new Date().getFullYear();
    return (
        <footer className="relative left-0 bottom-0 py-8 px-6 sm:px-20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white bg-gray-900">
            <section className="w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col gap-4">
                <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
                    Contact Information
                </h3>
                <p>
                    Feel free to reach out to me anytime. I prefer 
                    <br />
                    to communicate and discuss any ideas over email
                </p>
                <div className="flex flex-row items-center gap-2">
                    <AiOutlineMail className="text-[#727C57]" />
                    <p className="text-[#fefffa]"><a href="mailto:rohansaini15120@gmail.com">rohansaini15120@gmail.com</a></p>
                </div>
            </section>
            <section className="w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col gap-4">
                <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
                    Current Availability
                </h3>
                <p className="text-lg text-[#727C57]">
                    I usually dabble between multiple projects and opportunities <br /> but
                    I'll be happy to discuss any new ideas. Let's get in touch!
                </p>
            </section>
            <section className="w-full sm:w-1/3 flex flex-col gap-4">
                <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
                    Follow Me On
                </h3>
                <div className="flex flex-col gap-2 py-2">
                    <a href="https://www.linkedin.com/in/rohan-saini-9b3060257/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#fefffa]">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/Rohansaini1512" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#fefffa]">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.instagram.com/rohansaini346?igsh=MTRqMXBjenQwbnFzNA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#fefffa]">
                        <FaInstagram /> Instagram
                    </a>
                </div>
            </section>
            {/* <div>
                <div className="flex justify-center items-center gap-2">
                    <FaRegCopyright className="text-[#727C57]"/>
                    <p className="text-[#727C57]">Yogit Nainani {year} </p>
                </div>
            </div> */}
        </footer>
    );
}

export default Footer;

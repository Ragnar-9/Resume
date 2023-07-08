import '../components/components.css';
import Utils, { ResumeItem } from '../utils/utils';

   export class About extends ResumeItem {
        constructor() {
            super();

            const template: any = document.getElementById('about');

            let info: any = {
                name: 'Jayant Kumar Soni', age: '29', email: 'jayant.k.soni@gmail.com',
                education: 'Bachelor of Engineering (2008-2012)',
                aboutMe: this.aboutMe,
                contact: '+61 412 978 029'
            }

            template.innerHTML = Utils.replaceTokens(template.innerHTML, info);
            const templateContent = template.content;
            this.attachShadow({ mode: 'open' })
                .appendChild(templateContent.cloneNode(true));

        }

        create(){
        }

        private get aboutMe() {
            return `
With over 10 years of experience in full stack development with heavy front-end development experience and a comprehensive skill set encompassing Angular, React, Vue, Java, and Node.js, I am confident in my ability to contribute to your organization's success.
Throughout my career, I have been actively involved in developing robust and scalable web applications, focusing on delivering high-quality software solutions. My proficiency in Angular, React, Vue, Java, and Node.js allows me to adapt to different technologies and frameworks, ensuring efficient development processes and seamless user experiences. I have successfully delivered numerous projects, collaborating with cross-functional teams and stakeholders to meet project goals and objectives.

Here are some highlights of my qualifications:

Full Stack Expertise: I possess extensive knowledge and hands-on experience in both front-end and back-end development, enabling me to design and implement end-to-end solutions that align with business requirements.
Angular, React, Vue: I have a deep understanding of these popular JavaScript frameworks, leveraging their capabilities to build dynamic, interactive, and responsive user interfaces. I am adept at developing reusable components, managing state with Redux, and optimizing performance.

Java: With my strong command over Java programming language and related frameworks like Spring and Hibernate, I have developed robust and scalable server-side applications. I am well-versed in RESTful API development, database integration, and implementing security measures.
Node.js: I have utilized Node.js to build efficient server-side applications and APIs, leveraging its non-blocking, event-driven architecture. I am proficient in Express.js and have experience with popular databases like MongoDB.

Strong Problem-Solving Skills: I am adept at analyzing complex technical challenges and providing innovative solutions. My ability to quickly grasp new concepts and technologies allows me to adapt to evolving project requirements and deliver optimal results.
Collaborative Team Player: I have a proven track record of working effectively in cross-functional teams, fostering open communication, and delivering projects on time. I thrive in fast-paced environments and enjoy collaborating with diverse professionals to achieve common goals.

I am excited about the opportunity to contribute my skills, expertise and commitment to excellence in software development. I am confident that my strong technical background, combined with my dedication and passion for creating innovative solutions, will enable me to make a positive impact on your team.

Thank you for considering my application. I would welcome the opportunity to discuss my qualifications further and demonstrate how I can contribute to your organization's growth. Please find my attached resume for additional details. I am available at your convenience for an interview.`
        }
    }
    window.customElements.define('app-about', About);

    


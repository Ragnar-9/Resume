
import "../ui/assets/fontawesome-free-5.14.0-web/css/all.css";
import "../ui/assets/resume.css";

import {Resume} from './resume'
import {About} from './components/about';
import {Employement} from './components/employment';
import {Project} from './components/projects';


//define components
new About();
new Employement();
new Project();

// initialise
(new Resume()).init('about');


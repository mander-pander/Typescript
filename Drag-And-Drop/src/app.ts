import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

//can also import * instead of { ProjectList } and use dot notation to avoid name clashing
//default exports also remove curly braces, this is nice if you have one thing per file

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

import Hello from "./Hello"
import info, {age} from "./Hello"

alert(info);
alert(age);

import details, {age as a } from "./Hello"

alert(details);

alert(a);

import * as hello from "./Hello"

alert(hello.name)
alert(hello.age)
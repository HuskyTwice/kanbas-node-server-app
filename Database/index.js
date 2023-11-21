import { assert } from "console";
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import grades from "./grades.json";
import enrollments from "./enrollments.json";

// Validate the type of the imported JSON objects
// assert(typeof courses === "object", "courses.json is not of type object");
// assert(typeof modulesData === "object", "modules.json is not of type object");
// assert(typeof assignmentsData === "object", "assignments.json is not of type object");
// assert(typeof usersData === "object", "users.json is not of type object");
// assert(typeof gradesData === "object", "grades.json is not of type object");
// assert(typeof enrollmentsData === "object", "enrollment.json is not of type object");


export default {
    courses,
    modules,
    assignments,
    users,
    grades,
    enrollments
};
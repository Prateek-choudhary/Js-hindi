const course = {
    coursename: "JS in hindi",
    price : "999",
    courseInstructor: "Prateek"
}

// console.log(course.courseInstructor)
const {courseInstructor : instructor} = course //destructuring the objects instead of accesing object each element manually

// console.log(courseInstructor);

// console.log(instructor);

// {                                            //representing API json format
//     "name": "hitesh",
//     "courseName" : "Js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
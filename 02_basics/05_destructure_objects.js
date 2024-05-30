const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh sir" 
}

// console.log(course.courseInstructor);
//now if we want to print this courseInstructor again and again, we have to write course.courseInstructor inside console.log many times

//better syntax to eliminate above problem is
const {courseInstructor} = course;
console.log(courseInstructor)

//we can also reduce or change name accordingly with above method as shown here:
const {coursename: cname} = course;
console.log(cname);


    function courseInfo(obj={}){
    def={courseName:"ML",courseDuration:20,courseOwner:"shahd"}
   if(Object.keys(obj).length<=Object.keys(def).length) {
    res=Object.assign(def,obj)
    return `the name of the course ${res.courseName}, its duration ${res.courseDuration} and the owner of the course ${res.courseOwner} `
    
   }else{
    throw Error("this is not valid")
   }

    }

console.log(courseInfo({courseName:"machine",courseDuration: 10,courseOwner:"mona"})) 

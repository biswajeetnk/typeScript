class Facebook
{
    private fId : string;
    private name : string;
    private email : string;
    private phone : number;
    age : number;
    about : string;
    gender : string;
    DoB : string;
    languagesKnown : string[];
    school : string[];
    college : string[];
    placesLived : string[];
    hometown : string;
    currentCity : string;

    constructor(fId : string, name: string, email: string, phone: number, age: number, about: string, gender: string,
                DoB: string, languagesKnown: string[], school: string[], college: string[], placesLived: string[],
                hometown: string, currentCity: string)
    {
        this.fId = fId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.about = about;
        this.gender = gender;
        this.DoB = DoB;
        this.languagesKnown = languagesKnown;
        this.school = school;
        this.college = college;
        this.placesLived = placesLived;
        this.hometown = hometown;
        this.currentCity = currentCity;
    }

    getFacebookId = () =>
    {
        return this.fId;
    }

    getName = () =>
    {
        return this.name;
    }

    getEmail = () =>
    {
        return this.email;
    }

    getPhone = () =>
    {
        return this.phone;
    }

    getAge = () =>
    {
        return this.age;
    }

    getAbout = () =>
    {
        return this.about;
    }

    setAbout = (userAbout : string) =>
    {
        this.about = userAbout;
    }

    getGender = () =>
    {
        return this.gender;
    }

    getPlacesLived = () =>
    {
        return this.placesLived;
    }

    setPlacesLived = (userPlacesLived : string[]) =>
    {
        this.placesLived = userPlacesLived;
    }
}

let user1 = new Facebook("FId1", "Biswajeet", "bn@email.com", 213213132, 25, "This is description about Biswajeet", "Male", "DD-MM-YYYY", ["ENglish", "Hindi"], ["school1", "school2"], ["college1", "college2"], ["place1"], "hometown", "currentCity");


console.log("Facebook Id : "+user1.getFacebookId());
console.log("User Name : "+user1.getName());
console.log("User EmailId : "+user1.getEmail());
console.log("User Phone # : "+user1.getPhone());
console.log("Gender : "+user1.getGender());
console.log("User Age : "+user1.getAge());
console.log("User's About Before Change : "+user1.getAbout());
user1.setAbout("-----Description Changed-----");
console.log("User's About : "+user1.getAbout());
console.log("Places Lived : "+user1.getPlacesLived());
user1.setPlacesLived(["location changed-1", "location changed-2"]);
console.log("Places Lived : "+user1.getPlacesLived());
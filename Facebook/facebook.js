var Facebook = /** @class */ (function () {
    function Facebook(fId, name, email, phone, age, about, gender, DoB, languagesKnown, school, college, placesLived, hometown, currentCity) {
        var _this = this;
        this.getFacebookId = function () {
            return _this.fId;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getPhone = function () {
            return _this.phone;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getAbout = function () {
            return _this.about;
        };
        this.setAbout = function (userAbout) {
            _this.about = userAbout;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getPlacesLived = function () {
            return _this.placesLived;
        };
        this.setPlacesLived = function (userPlacesLived) {
            _this.placesLived = userPlacesLived;
        };
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
    return Facebook;
}());
var user1 = new Facebook("FId1", "Biswajeet", "bn@email.com", 213213132, 25, "This is description about Biswajeet", "Male", "DD-MM-YYYY", ["ENglish", "Hindi"], ["school1", "school2"], ["college1", "college2"], ["place1"], "hometown", "currentCity");
console.log("Facebook Id : " + user1.getFacebookId());
console.log("User Name : " + user1.getName());
console.log("User EmailId : " + user1.getEmail());
console.log("User Phone # : " + user1.getPhone());
console.log("Gender : " + user1.getGender());
console.log("User Age : " + user1.getAge());
console.log("User's About Before Change : " + user1.getAbout());
user1.setAbout("-----Description Changed-----");
console.log("User's About : " + user1.getAbout());
console.log("Places Lived : " + user1.getPlacesLived());
user1.setPlacesLived(["location changed-1", "location changed-2"]);
console.log("Places Lived : " + user1.getPlacesLived());

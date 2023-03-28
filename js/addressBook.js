class AddressBookData {
    id;

    get name() { 
        return this._name; 
    }
    set name(name){ 
        let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}[ ]{0,1})+$');
        if(nameRegex.test(name)) 
            this._name = name;
        else throw "Invalid Name";
    }

    get profession() {
        return this._profession;
    }
    set profession(profession) {
        this._profession = profession;
    } 

    get EmailID() {
        return this._EmailID;
    }
    set EmailID(EmailID) {
        this._EmailID = EmailID;
    }

    get address() {
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$')
        if(addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address"
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        let phoneRegex = RegExp('(?:6[1-9]|[7-9][0-9])\d{8}$')
        if(phoneRegex.test(phoneNumber)) 
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number"
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zipcode() {
        return this._zipcode;
    }
    set zipcode(zipcode){
        let zipRegex = RegExp('^[0-9]{6}')
        if(zipRegex.test(zipcode))
            this._zipcode = zipcode;
        else throw "Invalid Zip Code"
    }
    //to string method
    toString(){
        return "id : "+this.id+", Name : "+this.name+ ", profession : "+this.profession+ ", EmailID : "+this.EmailID + ", Address : "+this.address+", Phone : "+this.phoneNumber+
        ", State : "+this.state+", City : "+this.city+", ZipCode : "+this.zipcode;
    }
}
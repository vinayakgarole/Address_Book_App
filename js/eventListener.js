isUserNameValid = (username, regex = /^([A-Z]{1}[a-z]{2,}[ ]{0,1})+$/)=> regex.test(username);
isMobileNumberValid = (mobileNo, regex = /(?:6[1-9]|[7-9][0-9])\d{8}$/)=> regex.test(mobileNo);
iszipValid = (zip, regex = /^[0-9]{6}/)=> regex.test(zip);

let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function() {
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try {
            checkName(name.value);
            textError.textContent = "";
        }catch (e) {
            textError.textContent = e;
        }
    });

    const profession = document.querySelector('#profession');
    const profession_Error = document.querySelector('.profession-error');
    profession.addEventListener('input',function() {
        if(profession.value.length == 0){
            profession_Error.textContent = "";
            return;
        }
        try {
            checkName(profession.value);
            profession_Error.textContent = "";
        }catch (e) {
            profession_Error.textContent = e;
        }
    });

    const EmailID = document.querySelector('#EmailID');
    const EmailID_Error = document.querySelector('.EmailID-error');
    EmailID.addEventListener('input',function() {
        if(EmailID.value.length == 0){
            EmailID_Error.textContent = "";
            return;
        }
        try {
            checkName(profession.value);
            EmailID_Error.textContent = "";
        }catch (e) {
            EmailID_Error.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const output = document.querySelector('.address-error');
    address.addEventListener('input',function(){
        if(address.value.length == 0){
            output.textContent = "";
            return;
        }
        try {
            checkAddress(address.value);
            output.textContent = "";
        }catch (e) {
            output.textContent = e;
        }
    });

    const zipcode = document.querySelector('#zipcode');
    const zip_error = document.querySelector('.zip-error');
    zipcode.addEventListener('input',function(){
        if(zipcode.value.length == 0){
            zip_error.textContent = "";
            return;
        }
        try {
            checkZip(zipcode.value);
            zip_error.textContent = "";
        }catch (e) {
            zip_error.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phone');
    const phone_error = document.querySelector('.number-error');
    phoneNumber.addEventListener('input',function(){
        if(phoneNumber.value.length == 0){
            phone_error.textContent = "";
            return;
        }
        try {
            checkNumber(phoneNumber.value);
            phone_error.textContent = "";
        }catch (e) {
            phone_error.textContent = e;
        }
    });

    checkForUpdate();
});

const save = (event) => {
    try {
        setAddressBookObj();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    }catch (e) {
        return;
    }
}

const setAddressBookObj = () => {
    if (!isUpdate && site_properties.use_local_storage.match("true")){ 
        addressBookObj.id = createNewContactId();
    }
    addressBookObj._name = document.querySelector('#name').value;
    addressBookObj._profession = document.querySelector('#profession').value;
    addressBookObj._EmailID = document.querySelector('#EmailID').value;
    addressBookObj._address = document.querySelector('#address').value;
    addressBookObj._city = document.querySelector('#city').value;
    addressBookObj._state = document.querySelector('#state').value;
    addressBookObj._zipcode = document.querySelector('#zipcode').value;
    addressBookObj._phoneNumber = document.querySelector('#phone').value;
}

const createAndUpdateStorage = () => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList){
        let addressBookData = addressBookList.find(contactData => contactData.id == addressBookObj.id)
        if(!addressBookData) {
            addressBookList.push(addressBookObj);
        }else {
            const index = addressBookList.map(contactData => contactData.id).indexOf(addressBookData.id);
            addressBookList.splice(index,1,addressBookObj);
        }
    }else {
        addressBookList = [addressBookObj]
    }
    if(isUserNameValid(addressBookObj._name)){
        if(isMobileNumberValid(addressBookObj._phoneNumber))
        {
            if(iszipValid(addressBookObj._zipcode))
            {
                
                if(confirm("do you want to add information ?"))
                { 
            
                    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
                    
                }
                
            } 
            else{
                alert("invalid ZIP CODE")
            }

        }
        else{
            alert("invalid mOBILEnUMBER")
        }
    }
    else{
        alert("invalid name")
    }
}

const createNewContactId = () => {
    let contactId = localStorage.getItem("ContactID");
    contactId = !contactId  ? 1 : (parseInt(contactId)+1).toString();
    localStorage.setItem("ContactID",contactId);
    return contactId;
  }

const resetForm = () => {
    setValue('#name','');
    setTextValue('.text-error','');

    setValue('#profession','');
    setTextValue('.profession-error','');

    setValue('#EmailID','');
    setTextValue('.EmailID-error','');

    setValue('#address','');
    setTextValue('.address-output','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zipcode','');
    setTextValue('.zip-error','');
    setValue('#phone','');
    setTextValue('.number-error','');
}

const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id,value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem("editContact");
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

const setForm = () => {
    setValue('#name',addressBookObj._name);
    setValue('#profession',addressBookObj._profession);
    setValue('#EmailID',addressBookObj._EmailID);
    setValue('#address',addressBookObj._address);   
    setValue('#city',addressBookObj._city);
    setValue('#state',addressBookObj._state);
    setValue('#zipcode',addressBookObj._zipcode);
    setValue('#phone',addressBookObj._phoneNumber);
}
const checkName = (name) => {
    let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}[ ]{0,1})+$');
    if(!nameRegex.test(name)) throw 'Inavlid Name';
}

const checkAddress = (address) => {
    let addressRegex = RegExp(/^[a-zA-Z0-9\s,'-]*$/);
    if(!addressRegex.test(address)) throw 'Inavlid Address';
}

const checkZip = (zipcode) => {
    let zipRegex = RegExp('^[0-9]{6}')
    if(!zipRegex.test(zipcode)) throw 'Inavlid Zipcode';
}

const checkNumber = (phoneNumber) => {
    let phoneRegex = RegExp('^([+0-9]{3}.{1}[0-9]{6,11})$')
    if(!phoneRegex.test(phoneNumber)) throw 'Inavlid Phone Number';
}
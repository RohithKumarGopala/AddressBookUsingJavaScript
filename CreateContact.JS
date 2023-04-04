class ContactDetails{
    firstName;
    LastName;
    address;
    city;
    state;
    zip;
    phonenumber;
    email;

    //constructor
    constructor(firstName,LastName,address,city,state,zip,phonenumber,email){
        this.firstName = firstName;
        this.LastName= LastName;
        this.address= address;
        this.city= city;
        this.state = state;
        this.zip =zip;
        this.phonenumber= phonenumber;
        this.email= email;
    }

    get firstName(){
    return this._firstName;
   }
    set firstName(firstName){
    let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
    if(firstNameRegex.test(firstName))
    this._firstName = firstName;
    else throw 'First Name start with capital letter and have minimum 3 character';
   }
    get LastName(){
    return this._LastName;
   }
    set LastName(LastName){
        let LastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}');
        if(LastNameRegex.test(LastName))
        this._LastName =LastName;
        else throw 'Last Name start with capital letter and have minimum 3 character';
       }

   get address(){
    return this._address;
   }
    set address(address){
        let addressRegex = RegExp('^[A-Za-z]{4,}');
        if(addressRegex.test(address))
        this._address =address;
        else throw 'Address is Incorrect';
       }

   get city(){
    return this._city;
   }
   set city(city){
    let cityRegex = RegExp('^[A-Za-z]{4,}');
    if(cityRegex.test(city))
    this._city =city;
    else throw 'city is Incorrect';
   }
   
   get state(){
    return this._state;
   }
   set state(state){
    let stateRegex = RegExp('^[A-Za-z]{4,}');
    if(stateRegex.test(state))
    this._state =state;
    else throw 'state is Incorrect';
   }
    get zip(){
    return this._zip;
   }
   set zip(zip){
    let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?');
    if(zipRegex.test(zip))
    this._zip =zip;
    else throw 'zip is Incorrect';
   }
   get phonenumber(){
    return this._phonenumber;
   }
   set phonenumber(phonenumber){
    let phonenumberRegex = RegExp('[19]{2}[0-9]{10}');
    if(phonenumberRegex.test(phonenumber))
    this._phonenumber =phonenumber;
    else throw 'phonenumber is Incorrect';
   }
   get email(){
    return this._email;
   }
   set email(email){
    let emailRegex = RegExp('^([A-Za-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{5}(\.[a-z])?');
    if(emailRegex.test(email))
    this._email =email;
    else throw 'email is Incorrect';
   }

 
   toString(){
    return "firstName:"+this.firstName+"\nLastName:"+this.LastName+"\naddress:"+this.address+"\ncity:"+this.city+"\nstate:"+this.state+"\nzip:"+this.zip+"\nphone:"+this.phonenumber+"\nemail:"+this.email;
   }
}

   let contactDetails = new ContactDetails("Rohith","Gopala","BheemReddyNagar","Hyderabad","Telangana",500098,916304871072,'abc@gmail.com');
   console.log(contactDetails.toString());
   let contactDetailsnew = new ContactDetails("Rahul","Gopala","Mechigan","Detroit","Texas",560085,918886272165,'def@gmail.com');
   console.log(contactDetailsnew.toString());
   try{
    contactDetailsnew.LastName = "mohan";
    console.log(contactDetailsnew.toString());
   }catch(e){
    console.error(e);
   }

   let contactDetailsanother = new ContactDetails("Shoban","Gopala","BheemreddyNagar","Hyderabad","Telangana",500098,917865456738,'ghj@gmail.com');
   let contactDetailarray = new Array();
   contactDetailarray.push(contactDetailsnew);
   contactDetailarray.push(contactDetailsanother);
   console.log("new contact:"+contactDetailarray)
   contactDetailarray.forEach((Details) => console.log(Details.toString()));

   let object = contactDetailarray.find((Details)=>Details._firstName =='Praveen');
   if(object != undefined){
    contactDetailarray.pop();
    object.setfirstName('Praveen');
    object.setLastName('kumar');
    object.setAddress('Banashankari');
    object.setcity('Bengaluru');
    object.setstate('Karnataka');
    object.setzip(500068);
    object.setphonenumber(919876566456);
    object.setemail('rhg@gmail.com');
    contactDetailarray.push(object);
    contactDetailarray.forEach((Details)=> console.log(Details.toString()));
   }else{
    console.log('Not found');
   }

   let objectDelete = contactDetailarray.find((Details)=>Details.firstName ==='Parvathi');
   if(objectDelete != undefined){
    contactDetailarray.pop();
    console.log("Person record deleted");
    contactDetailarray.forEach((Details)=> console.log(Details.toString()));
   }else{
    console.log('Not found');
   }
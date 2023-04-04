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
    this._firstName =firstName;
   }
    get LastName(){
    return this._LastName;
   }
    set LastName(LastName){
    this._LastName = LastName;
   }
   get address(){
    return this._address;
   }
   set address(address){
    this._address = address;
   }
   get city(){
    return this._city;
   }
   set city(city){
    this._city = city;
   }
   get state(){
    return this._state;
   }
   set state(state){
    this._state = state;
   }
   get zip(){
    return this._zip;
   }
   set zip(zip){
    this._zip = zip;
   }
   get phonenumber(){
    return this._phonenumber;
   }
   set phonenumber(phonenumber){
    this._phonenumber = phonenumber;
   }
   get email(){
    return this._email;
   }
   set email(email){
    this._email = email;
   }

 
   toString(){
    return "firstName:"+this.firstName+"\nLastName:"+this.LastName+"\naddress:"+this.address+"\ncity:"+this.city+"\nstate:"+this.state+"\nzip:"+this.zip+"\nphone:"+this.phonenumber+"\nemail:"+this.email;
   }
}

   let contactDetails = new ContactDetails("Rohith","Gopala","BodUppal","Hyderabad","Telangana",500098,916304871072,'abc@gmail.com');
   console.log(contactDetails.toString());
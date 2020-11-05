


export class AddressDetails {
    public houseNo: string;
    public street: string;
    public city: string;
    public location: string
    public district: string
    public state: string
    public pin: number

    constructor() {
        this.houseNo = '';
        this.state = '';
        this.city = '';
        this.location = '';
        this.district = '';
        this.street = '';
        this.pin = undefined
    }
}

export class PersonDetails {
    public name: string;
    public fatherName: string;
    public dateOfBirth: string;
    public gender: string;
    public phoneNumber: number;
    public qualification: string;

    constructor() {
        this.name = '';
        this.dateOfBirth = '';
        this.phoneNumber = undefined;
        this.qualification = '';
        this.fatherName = '';
        this.gender = '';
    }
}
export class AddressList {
    public premanentAddressDetails: AddressDetails;
    public presentAddressDetails: AddressDetails;

    constructor() {
        this.presentAddressDetails = new AddressDetails();
        this.premanentAddressDetails = new AddressDetails();
    }
}

export class DocumentDetails {
    public aadharFront: string;
    public aadharBack: string;
    public photo: string;

    constructor() {
        this.aadharFront = '';
        this.aadharBack = '';
        this.photo = '';
    }
}

export class rtoDetails {
    public state: string;
    public type: string;
    public office: string;
    public pin: number;

    constructor() {
        this.state = '';
        this.type = '';
        this.office = '';
        this.pin = undefined;
    }
}

export class dlDetails {
    public expiryDate: string;
    public dlNumner: string;
    public dlPhoto: string;

    constructor() {
        this.expiryDate = '';
        this.dlNumner = '';
        this.dlPhoto = '';
    }
}
export class applyLicienseModel {
    public rtoDetails: rtoDetails;
    public personDetails: PersonDetails;
    public addressDetails: AddressList;

    constructor() {
        this.rtoDetails = new rtoDetails();
        this.personDetails = new PersonDetails();
        this.addressDetails = new AddressList();
    }
}

export class RenewModel {
    public name: string;
    public fateherName: string;
    public licenseNumber: string;
    public dateOfIssue: string;
    public exipryDate: string;
    public licenseAuthority: string;
    public classOfVehicle: string;
    public addressList: AddressList;

    constructor() {
        this.name = '';
        this.fateherName = '';
        this.licenseAuthority = '';
        this.dateOfIssue = '';
        this.licenseNumber = '';
        this.classOfVehicle = '';
        this.addressList = new AddressList();
    }
}

export class TrasnferorDetails {
    public name: string;
    public fateherName: string;
    public houseNo: string;
    public street: string;
    public city: string;
    public state: string;
    public pin: number;
    public phoneNumber: number;

    constructor() {
        this.name = '';
        this.fateherName = '';
        this.houseNo = '';
        this.street = '';
        this.street = '';
        this.city = '';
        this.phoneNumber = undefined;
        this.pin = undefined;
    }
}

export class Vehicledetails {
    public model: string;
    public registerNumber: string;
    public registerDate: string;
    public chassisNumber: string;
    public engineNo: string;
    public mfr: string;
    public mfgDate: string;
    public soldDate: string;

    constructor() {
        this.mfgDate = '';
        this.chassisNumber = '';
        this.engineNo = '';
        this.mfr = '';
        this.model = '';
        this.registerDate = '';
        this.registerNumber = '';
        this.soldDate = '';
    }
}

export class TransferDetails {
    public transferorDetails: TrasnferorDetails;
    public vehicleDetails: Vehicledetails;
    public transfereeDetails: TrasnferorDetails;

    constructor() {
        this.transfereeDetails = new TrasnferorDetails();
        this.vehicleDetails = new Vehicledetails();
        this.transferorDetails = new TrasnferorDetails();
    }
}

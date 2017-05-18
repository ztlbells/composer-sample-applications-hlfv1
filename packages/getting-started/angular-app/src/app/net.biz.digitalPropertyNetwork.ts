// export namespace net.biz.digitalPropertyNetwork{
   export class LandTitle {
      titleId: string;
      owner: Person;
      information: string;
      forSale: boolean;
   }
   export class SalesAgreement {
      salesId: string;
      buyer: Person;
      seller: Person;
      title: LandTitle;
   }
   export class Person {
      personId: string;
      firstName: string;
      lastName: string;
   }
   export class RegisterPropertyForSale {
      transactionId: string;
      seller: Person;
      title: LandTitle;
      timestamp: Date;
   }
// }

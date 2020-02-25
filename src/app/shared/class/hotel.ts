import {Ihotel} from '../interfaces/ihotel';

export class Hotel implements Ihotel{
    idhotel: number;
    nombrehotel: string;
    direccionhotel: string;
    representantehotel: string;
    estadohotel: number;
}

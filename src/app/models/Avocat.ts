import { Domaine } from "./Domaine";

export class Avocat {

    id_avocat?: number;
    nom_avocat?: string;
    coordonnees?: string;
    honoraires?: number;
    photo?: string;
    Domaines?: Domaine[]
}
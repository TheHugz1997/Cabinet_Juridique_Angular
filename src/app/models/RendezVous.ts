export class RendezVous {

    date?: string;
    nom_avocat?: string;

}

export class RendezVousAvocat {

    id_utilisateur?: number;
    nom_utilisateur?: string;
    liste_rendez_vous?: RendezVousAvocat[];

}
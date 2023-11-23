type Types = "center" | "doctor";

// interface IDoctorCard {
//     position: string;
//     location: string;
//     expertise: string;
//     dateOfBrtday: Date;
//     number: string;
// }

export interface IInfoCardProps {
    type: Types;
    name: string;
    rank: string;
}

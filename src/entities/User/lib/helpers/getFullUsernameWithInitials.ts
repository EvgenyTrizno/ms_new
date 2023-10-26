export const getFullUsernameWithInitials = (
    name: string,
    surname: string,
    patronymic: string
): string => {
    return `${name.replace(surname[0], surname[0].toUpperCase())} ${name
        .slice(0, 1)
        .replace(surname[0], surname[0].toUpperCase())}. ${patronymic
        .slice(0, 1)
        .replace(patronymic[0], patronymic[0].toUpperCase())}.`;
};

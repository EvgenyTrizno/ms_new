export const setCookie = (name: string, value: string, days: number) => {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

let isRedirected = false;
const tokenRes = (token_name: string) => {
    return document.cookie
        .split(" ")
        .map((item) => item.split("="))
        .filter((item) => item[0] === token_name)
        .flat()[1]
        .replace(";", "");
};

export const getRefreshTokenFromCookies = () => {
    if (isRedirected) return;

    try {
        const token = tokenRes("refresh_token");

        if (token) {
            return token;
        } else {
            isRedirected = true;
            location.pathname = "/auth/login";
            return;
        }
    } catch (e) {
        if (location.pathname === "/auth/login") return;
        else {
            location.pathname = "/auth/login";
        }
    }
};

export const getAccessTokenFromCookies = () => {
    if (isRedirected) return;

    try {
        const token = tokenRes("access_token");

        if (token) {
            return token;
        } else {
            isRedirected = true;
            location.pathname = "/auth/login";
            return;
        }
    } catch (e) {
        if (location.pathname === "/auth/login") return;
        else {
            location.pathname = "/auth/login";
        }
    }
};

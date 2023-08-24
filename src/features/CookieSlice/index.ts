export const setCookie = (name: string, value: string, days: number) => {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

let isRedirected = false;
const cookieRes = (token_name: string) => {
    try {
        return document.cookie
            .split(" ")
            .map((item) => item.split("="))
            .filter((item) => item[0] === token_name)
            .flat()[1]
            .replace(";", "");
    } catch (e) {
        return;
    }
};

const number = cookieRes("number");

export const getRefreshTokenFromCookies = () => {
    if (isRedirected) return;

    try {
        const token = cookieRes("refresh_token");

        if (token) {
            return token;
        } else {
            if (number) {
                isRedirected = true;
                location.pathname = "/auth/login";
                return;
            }
        }
    } catch (e) {
        if (location.pathname === "/auth/login") return;
        else {
            if (number) {
                location.pathname = "/auth/login";
            }
        }
    }
};

export const getAccessTokenFromCookies = () => {
    if (isRedirected) return;

    try {
        const token = cookieRes("access_token");

        if (token) {
            return token;
        } else {
            if (number) {
                isRedirected = true;
                location.pathname = "/auth/login";
                return;
            }
        }
    } catch (e) {
        if (location.pathname === "/auth/login") return;
        else {
            if (number) {
                location.pathname = "/auth/login";
            }
        }
    }
};

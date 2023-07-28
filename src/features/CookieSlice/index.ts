export const setCookie = (name: string, value: string, days: number) => {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

let isRedirected = false;

export const getRefreshTokenFromCookies = () => {
    if (isRedirected) return;

    try {
        const token = document.cookie
            .split(" ")
            .map((item) => item.split("="))
            .filter((item) => item[0] === "refresh_token")
            .flat()[1]
            .replace(";", "");

        if (token) {
            return token;
        } else {
            isRedirected = true;
            location.pathname = "/auth/login";
            return;
        }
    } catch (e) {
        return;
    }
};

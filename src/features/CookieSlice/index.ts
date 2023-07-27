export const setCookie = (name: string, value: string, days: number) => {
    const date: Date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
};

export const getRefreshTokenFromCookies = () => {
    try {
        const token = document.cookie
            .split(" ")
            .map((item) => item.split("="))
            .filter((item) => item[0] === "refresh_token")
            .flat()[1]
            .replace(";", "");

        return token;
    } catch (e) {
        console.log(e);
    }
};

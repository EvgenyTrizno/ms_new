export const useLocation = () => {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const lng = pos.coords.longitude;
                    const lat = pos.coords.latitude;

                    return { lng, lat };
                }
            );
        } else {
            return { messages: "Неудалось получить вашу локацию" };
        }
    };

    return { getLocation };
};

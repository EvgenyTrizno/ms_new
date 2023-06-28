export const useLocation = () => {
    let lat: number;
    let lng: number;

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    lng = pos.coords.longitude;
                    lat = pos.coords.latitude;
                }
            );

            return { lat, lng };
        } else {
            return { messages: "Неудалось получить вашу локацию" };
        }
    };

    return { getLocation };
};

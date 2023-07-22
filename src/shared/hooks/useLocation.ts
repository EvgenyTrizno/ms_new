export const useLocation = () => {
    let lat = 0;
    let lng = 0;

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos: GeolocationPosition) => {
                    const { latitude, longitude } = pos.coords;

                    lng = longitude;
                    lat = latitude;
                }
            );
        } else {
            return { message: "Не удалось получить вашу локацию" };
        }
    };

    return { getLocation, lat, lng };
};

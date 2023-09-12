class DistanceService {
    public getDistanceFromLatLonInKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
        const radLat1 = Math.PI * lat1 / 180;
        const radLat2 = Math.PI * lat2 / 180;
        const theta = lng1 - lng2;
        const radTheta = Math.PI * theta / 180;
        let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
        dist = dist > 1 ? 1 : dist;
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515 * 1.609344 * 1000;

        return dist;
    }
}

export const distanceService = new DistanceService();
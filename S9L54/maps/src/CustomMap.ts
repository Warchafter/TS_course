import { User } from './User';
import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker'
// interface Mappable {
//     locatin: {
//         lat: number;
//         lng: number;
//     };
// }

// export class CustomMap {
//     private googleMap: google.maps.Map;

//     constructor(divId: string) {
//         this.googleMap = new this.googleMap.maps.Map(document.getElementById('maps') => {
//             zoom: 1,
//             center: {
//                 lat: 0,
//                 lng: 0
//             }
//         });
//     }
// };


export class CustomMap  {
    private googleMap!: google.maps.Map;

    constructor(mapContainerId: string) {
        this.initMap(mapContainerId);
    }

    private async initMap(mapContainerId: string): Promise<void> {
        // Load the Google Maps library asynchronously
        await google.maps.importLibrary("maps");

        // Initialize the map after the library has loaded
        this.googleMap = new google.maps.Map(document.getElementById(mapContainerId) as HTMLElement, {
            zoom: 1,
            center: { lat: 0, lng: 0 },
        });
    }

    public async addUserMarker(user: User): Promise<void> {
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
        new AdvancedMarkerElement({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            },
            title: user.name
        });
    }

    addCompanyMarker(company: Company): void {

    }
}
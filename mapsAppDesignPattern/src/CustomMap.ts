/// <reference types="@types/google.maps" />

// note - on having only these properties in any Class will satisfy interface
// implicit check to avoid code duplication with custom method
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  displayPopupContent(): string;

  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  //  Class Type annotation with Union
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.displayPopupContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

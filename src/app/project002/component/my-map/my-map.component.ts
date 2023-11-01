import { Component, ElementRef } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent {
  map: any;
  autocomplete: any;
  inputElement: HTMLInputElement | any;

  marker: any;
  newMarker: any= undefined;
  markers:any[]=[];

  directionsService : any;
  directionsRenderer : any;
  home : any;
  office : any;
  
  isWayShown: boolean= false;
  isLocation: boolean= false;
  

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.initMap();
    this.initAutocomplete();
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 32.06245871859258, lng: 34.77147499197573 },
      zoom: 15,
      mapId: '3cb378c4f0e1d742'
    });

    const position = new google.maps.LatLng(32.06245871859258, 34.77147499197573);
    
      this.marker = new google.maps.Marker({
      map: this.map,
      position: position,
      title: 'Moveo Office'
    });

     this.directionsService = new google.maps.DirectionsService();
     this.directionsRenderer = new google.maps.DirectionsRenderer();
     this.home = new google.maps.LatLng(31.98372757785473, 34.77648008822666);
     this.office = new google.maps.LatLng(32.06245871859258, 34.77147499197573);
    
     this.directionsRenderer.setMap(this.map);

  }

  initAutocomplete(): void{
    this.autocomplete= new google.maps.places.Autocomplete(document.getElementById('autocomplete'),
    {
      types: ['establishment'],
      componentRestriction: {'country' : 'IL' },
      fields: ['place_id', 'geometry', 'name']

    });

    this.autocomplete.addListener('place_changed', this.onPlaceChanged.bind(this));
  }

  onPlaceChanged(): void {
    this.isLocation= true;
    const place = this.autocomplete.getPlace();
    this.inputElement = document.getElementById('autocomplete');

  
    if (!place.geometry) {
      this.inputElement.placeholder = 'Enter a place';
    } else {
      this.inputElement.value = place.name;

       this.newMarker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        title: place.name,
      });
      this.markers.push(this.newMarker);
    }
  }

  removePlace(): void{
    this.isLocation= false;
    this.markers.forEach(marker => marker.setMap(null));
    this.inputElement.value= "";
  }

  calcRoute(): void{
    this.isWayShown= true;
    const request= {
      origin: this.home,
      destination: this.office,
      travelMode: google.maps.TravelMode['DRIVING'],
    };
    this.directionsService.route(request, (response: any , status:string) => {
      if (status == 'OK') {
        this.directionsRenderer.setDirections(response);
      }
    });
  }

  resetMapToInitialView(): void {
    const initialCenter = new google.maps.LatLng(32.06245871859258, 34.77147499197573);
    const initialZoom = 15;
    this.map.setCenter(initialCenter);
    this.map.setZoom(initialZoom);
  }
  
  removeRoute(): void {
    this.isWayShown = false;
    this.directionsRenderer.setDirections({ routes: [] });
    this.resetMapToInitialView();
  }
  
  
}


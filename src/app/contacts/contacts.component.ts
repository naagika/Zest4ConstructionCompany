import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadGoogleMapsScript();
    }
  }

  loadGoogleMapsScript() {
    const existingScript = document.getElementById('googleMaps');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUkBHycO-c5NUd1M-bm5_A9NazPTBsJMA`;
      script.id = 'googleMaps';
      script.onload = () => this.initMap(); // Инициализация карты только после загрузки скрипта
      document.body.appendChild(script);
    } else {
      this.initMap(); // Если скрипт уже загружен, инициализируем карту
    }
  }

  initMap(): void {
    console.log('Initializing map...');
    const center = { lat: 37.3382, lng: -121.8863 };
    const map = new (window as any).google.maps.Map(
      document.getElementById('map') as HTMLElement, 
      {
        zoom: 10,
        center: center,
      }
    );

    const locations = [
      { lat: 37.3382, lng: -121.8863, city: 'San Jose' },
      { lat: 37.5483, lng: -121.9886, city: 'Fremont' },
      { lat: 37.6688, lng: -122.0808, city: 'Hayward' },
      { lat: 37.4419, lng: -122.1430, city: 'Palo Alto' },
      { lat: 37.4852, lng: -122.2364, city: 'Redwood City' },
      { lat: 37.5630, lng: -122.3255, city: 'San Mateo' },
      { lat: 37.3861, lng: -122.0839, city: 'Mountain View' },
      { lat: 37.6624, lng: -121.8747, city: 'Pleasanton' },
    ];

    locations.forEach(location => {
      new (window as any).google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.city,
      });
    });

    console.log('Map initialized with markers.');
  }
}

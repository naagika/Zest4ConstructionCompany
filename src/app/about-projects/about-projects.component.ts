import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component'; // Adjust the path as needed
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-about-projects',
  standalone: true,
  imports: [[CommonModule], [ImageSliderComponent]],
  templateUrl: './about-projects.component.html',
  styleUrls: ['./about-projects.component.css']
})
export class AboutProjectsComponent {
  isModalOpen = false;
  isImageModalOpen = false;
  currentImageIndex = 0;
  selectedImage: string = '';

  slides: any[] = [
    { url: 'assets/7.jpg', title: '', description: '' },
    { url: 'assets/2.jpg', title: '', description: '' },
    { url: 'assets/3.jpg', title: '', description: '' },
    { url: 'assets/4.jpg', title: '', description: '' },
    { url: 'assets/5.jpg', title: '', description: '' }
  ];

  images = [
    { url: 'assets/1.jpg' },
    { url: 'assets/2.jpg' },
    { url: 'assets/3.jpg' },
    { url: 'assets/4.jpg' },
    { url: 'assets/5.jpg' },
    { url: 'assets/6.jpg' },
    { url: 'assets/7.jpg' },
    { url: 'assets/8.jpg' },
    { url: 'assets/9.jpg' },
    { url: 'assets/10.jpg' },
    { url: 'assets/11.jpg' },
    { url: 'assets/12.jpg' },
    { url: 'assets/13.jpg' },
    { url: 'assets/14.jpg' },
    { url: 'assets/15.jpg' },
    { url: 'assets/16.jpg' },
    { url: 'assets/17.jpg' },
    { url: 'assets/18.jpg' },
    { url: 'assets/19.jpg' },
    { url: 'assets/20.jpg' },
    { url: 'assets/21.jpg' }
  ];

  // Открытие модального окна для всех проектов
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // Открытие модального окна для одного изображения
  openImageModal(index: number) {
    this.currentImageIndex = index;
    this.selectedImage = this.images[this.currentImageIndex].url;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.currentImageIndex].url;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[this.currentImageIndex].url;
  }


  
}

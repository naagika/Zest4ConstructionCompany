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
    { url: 'assets/1.png', title: '', description: '' },
    { url: 'assets/2.png', title: '', description: '' },
    { url: 'assets/3.png', title: '', description: '' },
    { url: 'assets/o-9.jpg', title: '', description: '' },
    { url: 'assets/o.jpg', title: '', description: '' },
    { url: 'assets/o-8.jpg', title: '', description: '' }
  ];

  images = [
    { url: 'assets/1.png' },
    { url: 'assets/2.png' },
    { url: 'assets/3.png' },
    { url: 'assets/4.png' },
    { url: 'assets/o-9.jpg' },
    { url: 'assets/o.jpg' },
    { url: 'assets/o-8.jpg' },
    { url: 'assets/o-7.jpg' },
    { url: 'assets/o-6.jpg' },
    { url: 'assets/o-5.jpg' },
    { url: 'assets/o-4.jpg' },
    { url: 'assets/o-3.jpg' },
  
  ];
  closeModalOnBackgroundClick(event: Event) {
    // Проверяем, что клик произошел именно на фоне, а не внутри .modal-content
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
  
  closeImageModalOnBackgroundClick(event: Event) {
    // Проверяем, что клик произошел именно на фоне, а не внутри .image-modal-content
    if (event.target === event.currentTarget) {
      this.closeImageModal();
    }
  }
  

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

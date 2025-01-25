import { Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent implements OnChanges {
  @Input() qrData: string = ''; // Input data for the QR code
  @Input() size: number = 256; // Canvas size

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['qrData'] || changes['size']) {
      this.generateQRCode();
    }
  }

  private generateQRCode(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const qrMatrix = this.createQrMatrix('this.qrData');

    const cellSize = this.size / qrMatrix.length;

    // Clear canvas
    ctx.clearRect(0, 0, this.size, this.size);

    // Draw the QR matrix
    qrMatrix.forEach((row, y) => {
      row.forEach((cell, x) => {
        ctx.fillStyle = cell ? 'black' : 'white';
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      });
    });
  }

  private createQrMatrix(data: string): number[][] {
    const size = 21; // Fixed size for demonstration (real QR codes vary)
    const matrix = Array.from({ length: size }, () => Array(size).fill(0));

    // Add finder patterns (corner squares)
    this.addFinderPattern(matrix, 0, 0);
    this.addFinderPattern(matrix, size - 7, 0);
    this.addFinderPattern(matrix, 0, size - 7);

    // Simulate encoding the data (very basic example)
    let bitIndex = 0;
    const dataBits = data
      .split('')
      .map((_, index) => (index % 2 === 0 ? 1 : 0)); // Alternating bits

    for (let row = 7; row < size - 7; row++) {
      for (let col = 7; col < size - 7; col++) {
        if (bitIndex < dataBits.length) {
          matrix[row][col] = dataBits[bitIndex++];
        }
      }
    }

    return matrix;
  }

  private addFinderPattern(matrix: number[][], startX: number, startY: number): void {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (
          i === 0 ||
          i === 6 ||
          j === 0 ||
          j === 6 || // Outer square
          (i >= 2 && i <= 4 && j >= 2 && j <= 4) // Inner square
        ) {
          matrix[startY + i][startX + j] = 1;
        }
      }
    }
  }
}

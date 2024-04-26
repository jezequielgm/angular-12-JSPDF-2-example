import {
  Component,
  VERSION,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { jsPDF } from 'jspdf'; // Trying to import as in the documentation says

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('container', { static: true }) couponPage: ElementRef;
  name = 'Angular ' + VERSION.major;
  backgroundImageSrc = '';

  constructor() {}

  ngOnInit(): void {}

  openPDF(): void {
    const doc: jsPDF = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    });
    doc.html(this.couponPage.nativeElement, {
      callback: function (doc) {
        console.log(doc);
        doc.save('pdfFile.pdf');
      },
    });
  }
}

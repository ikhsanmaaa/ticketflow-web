import { ZardAccordionImports } from '@/shared/ui/accordion';
import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ZardAccordionImports],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly faqs = signal<FaqItem[]>([
    {
      question: 'Mengapa tiket saya berstatus Waiting for Customer?',
      answer:
        'Tim IT membutuhkan informasi tambahan dari Anda. Balas email tiket agar proses dapat dilanjutkan.',
    },
    {
      question: 'Mengapa tiket saya belum selesai?',
      answer: 'Beberapa permintaan membutuhkan approval, vendor, atau koordinasi dengan tim lain.',
    },
    {
      question: 'Bagaimana cara membuat request IT yang baik?',
      answer:
        'Tuliskan kronologi secara lengkap, lampirkan screenshot jika diperlukan, dan sertakan informasi yang relevan.',
    },
  ]);
}

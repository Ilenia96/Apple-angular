import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-notes',
  templateUrl: './footer-notes.component.html',
  styleUrls: ['./footer-notes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterNotesComponent implements OnInit {

  footerDates: string[] = [
    'La dimensione del display è misurata in diagonale.',
    '1TB = mille miliardi di byte. La capacità effettiva del supporto formattato è inferiore.',
    'Test condotti da Apple nell’ottobre 2020 utilizzando MacBook Air di pre‑produzione con chip Apple M1 e GPU 8‑core, configurati con 8GB di RAM e unità SSD da 512GB. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata a 8 tacche dallo zero. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
    'Per i modelli con processore Intel puoi scegliere fino a 32GB di memoria e fino a 4TB di archiviazione. 1TB = mille miliardi di byte. La capacità effettiva del supporto formattato è inferiore.',
    'Test condotti da Apple nell’ottobre 2020 utilizzando MacBook Pro 13" di pre‑produzione con chip Apple M1, 8GB di RAM e unità SSD da 512GB. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata a 8 tacche dallo zero. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
    'Test condotti da Apple nell’ottobre 2019 utilizzando MacBook Pro 16" di pre‑produzione con processore Intel Core i9 8‑core a 2,3GHz, 16GB di RAM e unità SSD da 1TB. Il test di navigazione web in wireless misura la durata della batteria durante la navigazione Wi‑Fi su 25 noti siti web con luminosità dello schermo impostata al 75% o a 12 tacche dallo zero. Il test di riproduzione di film sull’app Apple TV misura la durata della batteria durante la visione di contenuti HD a 1080p con luminosità dello schermo impostata al 75% o a 12 tacche dallo zero. Il test di autonomia in standby misura la durata della batteria lasciando che il computer entri in modalità standby mentre è collegato a una rete wireless e a un account iCloud, con le app Safari e Mail aperte e utilizzando tutte le impostazioni di sistema predefinite. La durata della batteria varia a seconda dell’uso e della configurazione; vai su <a href="#" class="footer-link color-darkgray">apple.com/it/batteries</a> per saperne di più.',
    'La misura effettiva della diagonale dello schermo è 23,5".',
    'Per il modello con processore Intel puoi scegliere fino a 64GB di memoria.',
    'Il valore di permuta dipende dalle condizioni, dall’anno di fabbricazione e dalla configurazione del dispositivo che restituisci. Per usufruire della permuta in cambio di una carta regalo Apple Store o di un credito devi avere compiuto almeno 18 anni. Non tutti i dispositivi danno diritto a ricevere un credito. Per maggiori dettagli sulla permuta dei dispositivi idonei puoi rivolgerti al nostro partner. Il servizio potrebbe essere soggetto a restrizioni e limitazioni. Il pagamento avverrà solo se il dispositivo ricevuto corrisponde alla descrizione fornita al momento della valutazione. Apple si riserva il diritto di rifiutare la permuta o limitarne la quantità per qualsiasi dispositivo e per qualsivoglia motivo. Il valore del tuo vecchio dispositivo potrà essere riconosciuto a fronte dell’acquisto di un nuovo dispositivo Apple. L’offerta potrebbe non essere disponibile in tutti gli store. Alcuni Apple Store potrebbero applicare restrizioni aggiuntive.',
    'La prova gratuita di Apple One include solo i servizi per i quali non hai attualmente attivato una prova gratuita o sottoscritto un abbonamento. Al termine del periodo di prova, l’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.',
    '€ 4,99 al mese dopo la prova gratuita. È possibile sottoscrivere un solo abbonamento per ciascun gruppo “In famiglia”. L’offerta è valida per 3 mesi dall’attivazione del dispositivo idoneo. L’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.',
    '€ 4,99 al mese dopo la prova gratuita. È possibile sottoscrivere un solo abbonamento per ciascun gruppo “In famiglia”. L’offerta è valida per 3 mesi dall’attivazione del dispositivo idoneo. L’abbonamento si rinnova automaticamente salvo disdetta. Si applicano ulteriori <a href="#" class="footer-link color-darkgray">termini</a> e restrizioni.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

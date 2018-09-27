import { Component, Input, Output } from '@angular/core';
import { Stadspas } from '../../../models/dto/stadspas/stadspas';

@Component({
    selector: 'app-stadspas-letter',
    templateUrl: 'stadspas-letter.component.html'
})
export class StadspasLetterComponent {
    @Input()
    public model: Stadspas;

    constructor() {
    }

    formatDate(date: Date): string {
        if (!date) {
            return '';
        }
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('nl-NL', options);
    }

    formatDateNoYear(date: Date): string {
        if (!date) {
            return '';
        }
        const options = { month: 'long', day: 'numeric' };
        return date.toLocaleDateString('nl-NL', options);
    }

    formattedFullName(): string {
        if (!this.model || !this.model.notificationDataBRP) {
            return '';
        }

        const salutation = this.model.notificationDataBRP.geslachtsaanduiding === 'M' ? 'Meneer' : 'Mevrouw';
        // tslint:disable-next-line:max-line-length
        const result = `${salutation} ${this.model.notificationDataBRP.voorletterAanschrijving} ${this.model.notificationDataBRP.voorvoegselGeslachtnaam} ${this.model.notificationDataBRP.geslachtsnaam}`;
        return result.replace('  ', ' ');
    }

    formattedSalutation(): string {
        if (!this.model || !this.model.notificationDataBRP) {
            return '';
        }
        const salutation = this.model.notificationDataBRP.geslachtsaanduiding === 'M' ? 'meneer' : 'mevrouw';
        // tslint:disable-next-line:max-line-length
        const result = `${salutation} ${this.model.notificationDataBRP.voorvoegselGeslachtnaam} ${this.model.notificationDataBRP.geslachtsnaam}`;
        return result.replace('  ', ' ');
    }

    formattedAddress1(): string {
        let address: any;
        if (this.model && this.model.notificationDataBRP) {
            address = this.model.notificationDataBRP.verblijfadres;
        }

        return address ? `${address.straatnaam} ${address.huisnummer}` : '';
    }

    formattedAddress2(): string {
        let address: any;
        if (this.model && this.model.notificationDataBRP) {
            address = this.model.notificationDataBRP.verblijfadres;
        }

        return address ? `${address.postcode} ${address.woonplaatsnaam.toUpperCase()}` : '';
    }
}

import {Component} from '@angular/core';
import {Api} from '../../data/api';
import {Photo} from '../../data/model/photo';
import {ImageViewerPage} from '../image-viewer/image-viewer.page';
import {ModalController, ModalController, NavController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private i: number = 0;
    pictures: Photo[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modal: ModalController,
                private api: Api) {
        this.modal = this.modalController.create({
            component: ImageViewerPage,
            componentProps: {position: i, photos: this.pictures, /*api: this.api*/}
        });
        this.api.getAllImage().subscribe(photos => {
            this.pictures = photos;
        });
    }

    onItemClick(i: number) {
        this.i = i;
        this.modal.present();
    }

}

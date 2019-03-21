import {Component} from '@angular/core';
import {Api} from '../../data/api';
import {Photo} from '../../data/model/photo';
import {ImageViewerPage} from '../image-viewer/image-viewer.page';
import {NavController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    pictures: Photo[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private api: Api) {
        this.api.getAllImage().subscribe(photos => {
            this.pictures = photos;
        });
    }

    onItemClick(i: number) {
        this.navCtrl.push(ImageViewerPage, {position: i, photos: this.pictures, api: this.api});
    }

}

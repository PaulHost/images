import {Injectable} from '@angular/core';
import {Photo} from './model/photo';
import {Observable} from 'rxjs';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Page} from './model/page';

@Injectable
export class Api {
    private url = {
        domain: 'http://api.webcost.eu/api/',
        getAllImages: url.domain + 'getAllImages',
        getImageById: url.domain + 'getImageById?id=',
        saveImage: url.domain + 'saveImage',
    };

    private page: Page;

    constructor(private http: HttpClientModule);

    public getAllImage(): Observable<Photo[]> {
        return this.getImages(this.get(this.url.getAllImages));
    }

    public getImageById(id: String): Observable<Photo> {
        return this.getImages(this.get(this.url.getImageById));
    }

    public saveImage(file: any): Observable<boolean> {
        //TODO: post query
        return this.http.post().onErrorResumeNext(false);
    }

    private get(url: string): Observable<any> {
        const headers = new HttpHeaders().set('accept', 'application/json');
        return this.http.get(url, {headers});
    }

    private getImages(observable: Observable): Observable<Photo[]> {
        observable
            .map(response => response.json())
            .map(this.pageFromJson)
            .map(page => {
                this.page = page;
                return page.photos;
            })
            .onErrorResumeNext([]);
    }

    private pageFromJson(json: any): Page {
        let photos: Photo[] = [];
        for (let image of json.items) {
            photos.push({
                id: image.id,
                url: this.url.domain + image.image,

            });
        }
        return {
            photos: photos,
            page: json.current_page_number,
            pageRange: json.page_range,
            totalPicturesCount: json.total_count,
        };
    }
}

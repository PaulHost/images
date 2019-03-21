import {Photo} from './photo';

export interface Page {
    photos: Photo[];
    page: number;
    pageRange: number;
    totalPicturesCount: number;
}

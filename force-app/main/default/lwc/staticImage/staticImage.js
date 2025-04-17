import { api, track, LightningElement } from 'lwc';
import staticPic from '@salesforce/resourceUrl/user_image';
import svgPic from '@salesforce/resourceUrl/svgPhoto';

export default class staticImage extends LightningElement {
    userImage = staticPic;
    svgImage = svgPic;
}
import { api, track, LightningElement } from 'lwc';
import LABEL1 from '@salesforce/label/c.lwcLabel';

import LABELA from '@salesforce/label/c.LabelA';
import LABELB from '@salesforce/label/c.LabelB';

export default class customLabelDemo extends LightningElement {

    label1 = LABEL1;

    //uma boa prática quando temos muitas labels é criar um objeto para armazenar
    LABELS = {
        L1 : LABELA,
        L2 : LABELB
    }
}
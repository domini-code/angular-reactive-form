import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { MessageI } from './../models/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contactCollection: AngularFirestoreCollection<MessageI>;

  constructor(afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageI>('contacts');
  }

  saveMessage(newContact: MessageI): void {
    this.contactCollection.add(newContact);
  }

}

/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Retailer
 * A participant named Pengumpul
 */
@model({name: 'Pengumpul'})
export class Pengumpul {
  constructor(data?: Partial<Pengumpul>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({name: 'nama'})
  nama?: string;

  @property({name: 'nomorHP'})
  nomorHP?: string;

  @property({name: 'username'})
  username?: string;

  @property({name: 'ttl'})
  ttl?: string;

  @property({name: 'noKK'})
  noKK?: string;
  
  @property({name: 'noNPWP'})
  noNPWP?: string;

  @property({name: 'nik'})
  nik?: string;

  @property({name: 'memberType'})
  memberType?: string;

  @property({name: 'luasLahan'})
  luasLahan?: string;

  @property({name: 'alamatToko'})
  alamatToko?: string;

  @property({name: 'alamatLahan'})
  alamatLahan?: string;

  @property({name: 'kelompokTani'})
  kelompokTani?: string;
  
  @property({name: 'userID'})
  userID?: string;
}


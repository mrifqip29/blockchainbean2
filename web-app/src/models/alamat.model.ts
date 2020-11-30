/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Address
 * A concept named Alamat
 */
@model({name: 'Alamat'})
export class Alamat {
  constructor(data?: Partial<Alamat>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.bawangmerah.Alamat';

  /**
   * 
   */
  @property({name: 'kota'})
  kota?: string;

  /**
   * 
   */
  @property({name: 'kecamatan'})
  kecamatan?: string;

  /**
   * 
   */
  @property({name: 'kelurahan'})
  kelurahan?: string;

  /**
   * 
   */
  @property({name: 'jalan'})
  jalan?: string;

  /**
   * 
   */
  @property({name: 'kodePos'})
  kodePos?: string;


}


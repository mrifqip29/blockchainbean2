/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - Grower
 * A participant named Petani
 */
@model({name: 'Petani'})
export class Petani {
  constructor(data?: Partial<Petani>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.bawangmerah.Petani';

//   /**
//    * The instance identifier for this type
//    */
//   @property({name: 'petaniId', required: true})
//   petaniId: string;

  /**
   * 
   */
  @property({name: 'kelompokTani'})
  kelompokTani?: string;

  /**
   * 
   */
  @property({name: 'luasLahanHa', required: true})
  luasLahanHa: string;

  /**
   * A concept named Alamat
   */
  @property({name: 'alamat', required: true})
  alamat: Alamat;

}


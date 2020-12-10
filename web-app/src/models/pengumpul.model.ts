/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

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

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.bawangmerah.Pengumpul';

//   /**
//    * The instance identifier for this type
//    */
//   @property({name: 'pengumpulId', required: true})
//   pengumpulId: string;

  /**
   * A concept named Alamat
   */
  @property({name: 'alamat', required: true})
  alamat: string;

}


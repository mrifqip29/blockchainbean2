/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - Grower
 * A participant named Penangkar
 */
@model({name: 'Penangkar'})
export class Penangkar {
  constructor(data?: Partial<Penangkar>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.bawangmerah.Penangkar';

  /**
   * The instance identifier for this type
   */
  @property({name: 'penangkarId', required: true})
  penangkarId: string;

  /**
   * 
   */
  @property({name: 'kelompokTani'})
  kelompokTani?: string;

  /**
   * A concept named Alamat
   */
  @property({name: 'alamat', required: true})
  alamat: Alamat;

}


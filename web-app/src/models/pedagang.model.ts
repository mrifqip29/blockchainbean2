/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - Trader
 * A participant named Pedagang
 */
@model({name: 'Pedagang'})
export class Pedagang {
  constructor(data?: Partial<Pedagang>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.bawangmerah.Pedagang';

  /**
   * The instance identifier for this type
   */
  @property({name: 'pedagangId', required: true})
  pedagangId: string;

  /**
   * A concept named Alamat
   */
  @property({name: 'alamat', required: true})
  alamat: Alamat;

}


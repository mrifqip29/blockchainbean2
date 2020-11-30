/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - addCoffee
 * A transaction named addCoffee
 */
@model({name: 'addBawangMerah'})
export class AddBawangMerah {
  constructor(data?: Partial<AddBawangMerah>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'bruto'})
  size?: number;

  /**
   * 
   */
  @property({name: 'netto'})
  roast?: number;

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;

  /**
   * The identifier of an instance of grower
   */
  @property({name: 'petaniId'})
  petaniId?: string

  /**
   * The instance identifier for this type
   */
  // @property({name: 'batchId', required: true})
  // batchId?: string;

  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}


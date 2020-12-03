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
  @property({name: 'brutoKg'})
  brutoKg?: number;

  /**
   * 
   */
  @property({name: 'nettoKg'})
  nettoKg?: number;

  /**
   * 
   */
  @property({name: 'hargaPerKg'})
  hargaPerKg?: number;

  /**
   * 
   */
  @property({name: 'hargaTotal'})
  hargaTotal?: number;

  /**
   * 
   */
  @property({name: 'varietasBawang'})
  varietasBawang?: string;

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

  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}


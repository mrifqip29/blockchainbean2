/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - addBenih
 * A transaction named addBenih
 */
@model({name: 'addBenih'})
export class AddBenih {
  constructor(data?: Partial<AddBenih>) {
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
   * 
   */
  @property({name: 'metodePengiriman'})
  metodePengiriman?: string;

  /**
   * The identifier of an instance of penangkar
   */
  @property({name: 'penangkarId'})
  penangkarId?: string

  /**
   * The identifier of an instance of penangkar
   */
  @property({name: 'petaniId'})
  petaniId?: string

  /**
   * 
   */
  @property({name: 'alamatPenangkar'})
  alamatPenangkar?: string

  /**
   * 
   */
  @property({name: 'alamatPetani'})
  alamatPetani?: string

  /**
   * 
   */
  @property({name: 'umurBenih'})
  umurBenih?: string

  /**
   * 
   */
  @property({name: 'umurDipanen'})
  umurDipanen?: string

  /**
   * 
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}


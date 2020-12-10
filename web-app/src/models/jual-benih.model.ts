/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - jualBenih
 * A transaction named jualBenih
 */
@model({name: 'jualBenih'})
export class JualBenih {
  constructor(data?: Partial<JualBenih>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The identifier of an instance of penangkar
   */
  @property({name: 'penangkarId'})
  penangkarId?: string

  /**
   * The identifier of an instance of petani
   */
  @property({name: 'petaniId'})
  petaniId?: string

  /**
   * 
   */
  @property({name: 'tanggalJual'})
  tanggalJual?: string;

  /**
   * 
   */
  @property({name: 'tanggalKirim'})
  tanggalKirim?: string;

    /**
   * 
   */
  @property({name: 'metodePengiriman'})
  metodePengiriman?: string;

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
  @property({name: 'varietasBawang'})
  varietasBawang?: string;

  /**
   * 
   */
  @property({name: 'lamaPenyimpanan'})
  lamaPenyimpanan?: string;

  /**
   * 
   */
  @property({name: 'umurPanen'})
  umurPanen?: string

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;

  // /**
  //  * 
  //  */
  // @property({name: 'timestamp'})
  // timestamp?: string;


}


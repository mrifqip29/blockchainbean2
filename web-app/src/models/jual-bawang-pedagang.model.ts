/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - jualBawangPedagang
 * A transaction named jualBawangPedagang
 */
@model({name: 'jualBawangPedagang'})
export class JualBawangPedagang {
  constructor(data?: Partial<JualBawangPedagang>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }
  /**
   * The identifier of an instance of penangkar
   */
  @property({name: 'pengumpulId'})
  pengumpulId?: string

 /**
   * The identifier of an instance of petani
   */
  @property({name: 'pedagangId'})
  pedagangId?: string
  
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
  @property({name: 'alamatPengumpul'})
  alamatPengumpul?: Alamat

  /**
   * 
   */
  @property({name: 'alamatPedagang'})
  alamatPedagang?: Alamat

  /**
   * 
   */
  @property({name: 'tanggalMasuk'})
  tanggalMasuk?: string

  /**
   * 
   */
  @property({name: 'bawangId'})
  bawangId?: string;

  /**
   * 
   */
  @property({name: 'alamatGudang'})
  alamatGudang?: Alamat

  /**
   * 
   */
  @property({name: 'teknikSorting'})
  teknikSorting?: string

  /**
   * 
   */
  @property({name: 'metodePengemasan'})
  metodePengemasan?: string

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;


}


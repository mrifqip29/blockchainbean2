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
  brutoKg?: string;

  /**
   * 
   */
  @property({name: 'nettoKg'})
  nettoKg?: string;

  /**
   * 
   */
  @property({name: 'hargaPerKg'})
  hargaPerKg?: string;

  /**
   * 
   */
  @property({name: 'alamatPengumpul'})
  alamatPengumpul?: string

  /**
   * 
   */
  @property({name: 'alamatPedagang'})
  alamatPedagang?: string

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
  alamatGudang?: string

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
}


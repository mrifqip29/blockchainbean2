/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - jualBawangKonsumen
 * A transaction named jualBawangKonsumen
 */
@model({name: 'jualBawangKonsumen'})
export class JualBawangKonsumen {
  constructor(data?: Partial<JualBawangKonsumen>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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
  @property({name: 'batchState', required: true})
  batchState?: string;
}


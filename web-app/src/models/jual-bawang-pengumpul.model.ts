/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import { Alamat } from './alamat.model';

/**
 * The model class is generated from OpenAPI schema - jualBawangPengumpul
 * A transaction named jualBawangPengumpul
 */
@model({name: 'jualBawangPengumpul'})
export class JualBawangPengumpul {
  constructor(data?: Partial<JualBawangPengumpul>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }
  /**
   * The identifier of an instance of petani
   */
  @property({name: 'petaniId'})
  petaniId?: string

  /**
   * The identifier of an instance of penangkar
   */
  @property({name: 'pengumpulId'})
  pengumpulId?: string

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
  @property({name: 'alamatPetani'})
  alamatPetani?: Alamat

  /**
   * 
   */
  @property({name: 'alamatPengumpul'})
  alamatPengumpul?: Alamat

  /**
   * 
   */
  @property({name: 'benihId'})
  benihId?: string

  /**
   * 
   */
  @property({name: 'tanggalTanam'})
  tanggalTanam?: string;

  /**
   * 
   */
  @property({name: 'tanggalPanen'})
  tanggalPanen?: string;

  /**
   * 
   */
  @property({name: 'pupuk'})
  pupuk?: string

  /**
   * 
   */
  @property({name: 'pestisida'})
  pestisida?: string

  /**
   * 
   */
  @property({name: 'kadarAir'})
  kadarAir?: string

  /**
   * 
   */
  @property({name: 'perlakuanLain'})
  perlakuanLain?: string

  /**
   * 
   */
  @property({name: 'ukuranUmbi'})
  ukuranUmbi?: string

  /**
   * 
   */
  @property({name: 'produktivitas'})
  produktivitas?: string


  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;
}


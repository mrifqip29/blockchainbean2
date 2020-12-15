/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

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

  @property({name: 'usernamePengirim'})
  usernamePengirim?: string

  @property({name: 'usernamePenerima'})
  usernamePenerima?: string

  @property({name: 'alamatPengirim'})
  alamatPengirim?: string;

  @property({name: 'alamatPenerima'})
  alamatPenerima?: string;

  @property({name: 'kuantitas'})
  kuantitas?: string;

  @property({name: 'harga'})
  harga?: string;

  @property({name: 'timestamp'})
  timestamp?: string;

  @property({name: 'ukuranUmbi'})
  ukuranUmbi?: string;

  @property({name: 'kadarAir'})
  kadarAir?: string

  @property({name: 'pupuk'})
  pupuk?: string

  @property({name: 'pestisida'})
  pestisida?: string

  @property({name: 'perlakuan'})
  perlakuan?: string;

  @property({name: 'produktivitas'})
  produktivitas?: string;

  @property({name: 'status'})
  status?: string

  @property({name: 'transaksiID', required: true})
  transaksiID?: string;

  @property({name: 'batchID', required: true})
  batchID?: string;
}


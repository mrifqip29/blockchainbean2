/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

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

  @property({name: 'umurBenih'})
  umurBenih?: string;

  @property({name: 'umurPanen'})
  umurPanen?: string

  @property({name: 'lamaPenyimpanan'})
  lamaPenyimpanan?: string

  @property({name: 'varietas'})
  varietas?: string

  @property({name: 'hargaBenih'})
  hargaBenih?: string;

  @property({name: 'status'})
  status?: string

  @property({name: 'transaksiID', required: true})
  transaksiID?: string;

  @property({name: 'batchID', required: true})
  batchID?: string;
}


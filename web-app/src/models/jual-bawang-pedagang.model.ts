/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

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

  @property({name: 'tanggalMasuk'})
  tanggalMasuk?: string;

  @property({name: 'alamatGudang'})
  alamatGudang?: string

  @property({name: 'teknikSorting'})
  teknikSorting?: string

  @property({name: 'metodePengemasan'})
  metodePengemasan?: string

  @property({name: 'status'})
  status?: string

  @property({name: 'transaksiID', required: true})
  transaksiID?: string;

  @property({name: 'batchID', required: true})
  batchID?: string;
}


/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { JualBawangPengumpul } from '../models/jual-bawang-pengumpul.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by jualBawangPengumpul
 * A transaction named jualBawangPengumpul
 */
export class JualBawangPengumpulController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/jualBawangPengumpul', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async jualBawangPengumpulCreate(@requestBody() requestBody: JualBawangPengumpul): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();

      //let dateStr = new Date().toDateString();
      let dataForJualBawangPengumpul = {
        function: 'jualBawangPengumpul',
        petaniId: requestBody.petaniId,
        pengumpulId: requestBody.pengumpulId,
        tanggalJual: requestBody.tanggalJual,
        tanggalKirim: requestBody.tanggalKirim,
        metodePengiriman: requestBody.metodePengiriman,
        brutoKg: requestBody.brutoKg,
        nettoKg: requestBody.nettoKg,
        hargaPerKg: requestBody.hargaPerKg,
        alamatPetani: requestBody.alamatPetani,
        alamatPengumpul: requestBody.alamatPengumpul,
        benihId: requestBody.benihId,
        tanggalTanam: requestBody.tanggalTanam,
        tanggalPanen: requestBody.tanggalPanen,
        pupuk: requestBody.pupuk,
        kadarAir: requestBody.kadarAir,
        pestisida: requestBody.pestisida,
        perlakuanLain: requestBody.perlakuanLain,
        ukuranUmbi: requestBody.ukuranUmbi,
        produktivitas: requestBody.produktivitas,
        batchState: requestBody.batchState,
        contract: networkObj.contract
      };

      await blockchainClient.jualBenih(dataForJualBawangPengumpul);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Jual Bawang Pengumpul to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }
  }

  /**
   *
   *

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/addCoffee')
  // async addCoffeeFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<AddCoffee[]> {
  //   throw new Error('Not implemented');
  // }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  // @operation('get', '/addCoffee/{id}')
  // async addCoffeeFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<AddCoffee> {
  //   throw new Error('Not implemented');
  // }

}


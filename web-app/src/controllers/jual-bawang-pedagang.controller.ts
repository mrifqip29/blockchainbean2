/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { JualBawangPedagang } from '../models/jual-bawang-pedagang.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by jualBawangPedagang
 * A transaction named jualBawangPedagang
 */
export class JualBawangPengumpulController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/jualBawangPedagang', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async jualBawangPedagangCreate(@requestBody() requestBody: JualBawangPedagang): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();

      //let dateStr = new Date().toDateString();
      let dataForJualBawangPedagang = {
        function: 'jualBawangPedagang',
        pengumpulId: requestBody.pengumpulId,
        pedagangId: requestBody.pedagangId,
        tanggalJual: requestBody.tanggalJual,
        tanggalKirim: requestBody.tanggalKirim,
        metodePengiriman: requestBody.metodePengiriman,
        brutoKg: requestBody.brutoKg,
        nettoKg: requestBody.nettoKg,
        hargaPerKg: requestBody.hargaPerKg,
        alamatPengumpul: requestBody.alamatPengumpul,
        alamatPedagang: requestBody.alamatPedagang,
        tanggalMasuk: requestBody.tanggalMasuk,
        bawangId: requestBody.bawangId,
        alamatGudang: requestBody.alamatGudang,
        teknikSorting: requestBody.teknikSorting,
        metodePengemasan: requestBody.metodePengemasan,
        batchState: requestBody.batchState,
        contract: networkObj.contract
      };

      await blockchainClient.jualBenih(dataForJualBawangPedagang);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Jual Bawang Pedagang to Blockchain' });
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


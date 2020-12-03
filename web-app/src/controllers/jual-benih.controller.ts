/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { JualBenih } from '../models/jual-benih.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by jualBenih
 * A transaction named jualBenih
 */
export class JualBenihController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/jualBenih', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async jualBenihCreate(@requestBody() requestBody: JualBenih): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();

      //let dateStr = new Date().toDateString();
      let dataForJualBenih = {
        function: 'jualBenih',
        penangkarId: requestBody.penangkarId,
        petaniId: requestBody.petaniId,
        tanggalJual: requestBody.tanggalJual,
        tanggalKirim: requestBody.tanggalKirim,
        metodePengiriman: requestBody.metodePengiriman,
        brutoKg: requestBody.brutoKg,
        nettoKg: requestBody.nettoKg,
        hargaPerKg: requestBody.hargaPerKg,
        alamatPenangkar: requestBody.alamatPenangkar,
        alamatPetani: requestBody.alamatPetani,
        lamaPenyimpanan: requestBody.lamaPenyimpanan,
        varietasBawang: requestBody.varietasBawang,
        umurBenih: requestBody.umurBenih,
        umurPanen: requestBody.umurPanen,
        batchState: requestBody.batchState,
        contract: networkObj.contract
      };

      await blockchainClient.jualBenih(dataForJualBenih);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Jual Benih to Blockchain' });
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

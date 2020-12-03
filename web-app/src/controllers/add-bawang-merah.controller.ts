/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { AddBawangMerah } from '../models/add-bawang-merah.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by addCoffee
 * A transaction named addCoffee
 */
export class AddCoffeeController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/addBawangMerah', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async addBawangMerahCreate(@requestBody() requestBody: AddBawangMerah): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();

      let dateStr = new Date().toLocaleString();
      let dataForAddCoffee = {
        function: 'addBawangMerah',
        brutoKg: requestBody.brutoKg,
        nettoKg: requestBody.nettoKg,
        hargaPerKg: requestBody.hargaPerKg,
        hargaTotal: requestBody.hargaTotal,
        varietasBawang: requestBody.varietasBawang,
        batchState: requestBody.batchState,
        petaniId: requestBody.petaniId,
        transactionId: requestBody.transactionId,
        timestamp: dateStr,
        contract: networkObj.contract
      };

      await blockchainClient.addCoffee(dataForAddCoffee);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Coffee to Blockchain' });
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


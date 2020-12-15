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
        usernamePengirim: requestBody.usernamePengirim,
        usernamePenerima: requestBody.usernamePenerima,
        alamatPengirim: requestBody.alamatPengirim,
        alamatPenerima: requestBody.alamatPenerima,
        kuantitas: requestBody.kuantitas,
        harga: requestBody.harga,
        timestamp: requestBody.timestamp,
        kadarAir: requestBody.kadarAir,
        pupuk: requestBody.pupuk,
        pestisida: requestBody.pestisida,
        perlakuan: requestBody.perlakuan,
        produktivitas: requestBody.produktivitas,
        status: requestBody.status,
        transaksiID: requestBody.transaksiID,
        batchID: requestBody.batchID,
        contract: networkObj.contract
      };

      await blockchainClient.jualBenih(dataForJualBawangPengumpul);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Jual Bawang Pengumpul to Blockchain', body: dataForJualBawangPengumpul });
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


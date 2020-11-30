/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { Pengumpul } from '../models/pengumpul.model';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Pengumpul
 * A participant named Pengumpul
 */
export class PengumpulController {
  constructor() { }

  /**
   *
   *
   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Pengumpul', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async pengumpulCreate(@requestBody() requestBody: Pengumpul): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('request body: ')
      console.log(requestBody)
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.pengumpulId,
        alamat: `${requestBody.alamat.kota} ${requestBody.alamat.kecamatan} ${requestBody.alamat.kelurahan} ${requestBody.alamat.jalan} ${requestBody.alamat.kodePos}` ,
        memberType: 'pengumpul',
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Pengumpul to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }

  }

}


/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { Petani } from '../models/petani.model';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Petani
 * A participant named Petani
 */
export class PetaniController {
  constructor() { }

  /**
   *
   *
   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Petani', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async petaniCreate(@requestBody() requestBody: Petani): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('request body: ')
      console.log(requestBody)
      let dataForAddMember = {
        function: 'addMember',
        //id: requestBody.petaniId,
        kelompokTani: requestBody.kelompokTani,
        luasLahan: requestBody.luasLahanHa,
        alamat: `${requestBody.alamat.kota} ${requestBody.alamat.kecamatan} ${requestBody.alamat.kelurahan} ${requestBody.alamat.jalan} ${requestBody.alamat.kodePos}` ,
        memberType: 'petani',
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Petani to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }

  }

}


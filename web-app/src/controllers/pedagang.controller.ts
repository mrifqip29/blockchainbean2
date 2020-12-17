/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { Pedagang } from '../models/pedagang.model';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Pedagang
 * A participant named Pedagang
 */
export class PedagangController {
  constructor() { }

  /**
   *
   *
   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Pedagang', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async pedagangCreate(@requestBody() requestBody: Pedagang): Promise<ResponseMessage> {
    try {
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('request body: ')
      console.log(requestBody)
      let dataForAddMember = {
        function: 'addMember',
        //id: requestBody.pedagangId,
        nama: requestBody.nama,
        nomorHP: requestBody.nomorHP,
        username: requestBody.username,
        ttl: requestBody.ttl,
        noKK: requestBody.noKK,
        noNPWP: requestBody.noNPWP,
        nik: requestBody.nik,
        memberType: requestBody.memberType,
        luasLahan: requestBody.luasLahan,
        alamatToko: requestBody.alamatToko,
        alamatLahan: requestBody.alamatLahan,
        kelompokTani: requestBody.kelompokTani,
        userID: requestBody.userID,
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Pedagang to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }

  }

}


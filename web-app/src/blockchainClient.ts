
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

const path = require('path');

const configPath = path.join(process.cwd(), './../server/config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
var userName = config.appAdmin;
var gatewayDiscovery = config.gatewayDiscovery;
var connection_file = config.connection_file;


// connect to the connection file
const ccpPath = path.join(process.cwd(), './../server/' + connection_file);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./../server/wallet');

export module BlockChainModule {

  export class BlockchainClient {
    async connectToNetwork() {


      const gateway = new Gateway();

      try {

        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Connect to our local fabric
        const network = await gateway.getNetwork('channel1');
  

        console.log('Connected to channel1. ');

        // Get the contract we have installed on the peer
        const contract = await network.getContract('bawangmerah');


        let networkObj = {
          contract: contract,
          network: network
        };

        return networkObj;

      } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
      } finally {
        console.log('Done connecting to network.');
        // gateway.disconnect();
      }

    }

    async addMember(args: any) {
      //call addMember smart contract function
      //$TODO: dynamically call submitTransaction
      if(args.luasLahan == "string") {
        args.luasLahan = "0"
      } 
      if(args.kelompokTani == "string") {
        args.kelompokTani = "Tidak memiliki kelompok tani"
      }       
      if(args.alamatToko == "string") {
        args.alamatToko = "Tidak memiliki toko"
      } 
      if(args.alamatLahan == "string") {
        args.alamatLahan = "Tidak memiliki lahan"
      }

      let response = await args.contract.submitTransaction(args.function,
        args.nama, args.nomorHP, args.username, args.ttl, args.noKK, 
        args.nik, args.memberType, args.luasLahan, args.alamatToko, 
        args.alamatLahan, args.kelompokTani);
      return response;
    }

    async jualBenih(args: any) {
      console.log('args in the blockchain client,jualBenih')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.usernamePengirim, args.usernamePenerima, args.alamatPengirim, 
        args.alamatPengirim, args.kuantitas, args.harga, args.timestamp, 
        args.umurBenih, args.umurPanen, args.lamaPenyimpanan, args.varietas, 
        args.hargaBenih, args.status, args.transaksiID, args.batchID
      );

      console.log(args.brutoKg.toString())

      return response;
    }

    async jualBawangPengumpul(args: any) {
      console.log('args in the blockchain client,jualBawangPengumpul')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.usernamePengirim, args.usernamePenerima, args.alamatPengirim, 
        args.alamatPengirim, args.kuantitas, args.harga, args.timestamp, 
        args.kadarAir, args.pupuk, args.pestisida, args.perlakuan, 
        args.produktivitas, args.status, args.transaksiID, args.batchID
      );

      return response;
    }

    async jualBawangPedagang(args: any) {
      console.log('args in the blockchain client,jualBawangPedagang')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.usernamePengirim, args.usernamePenerima, args.alamatPengirim, 
        args.alamatPengirim, args.kuantitas, args.harga, args.timestamp, 
        args.tanggalMasuk, args.alamatGudang, args.teknikSorting, 
        args.metodePengemasan, args.status, args.transaksiID, args.batchID);

      return response;
    }

    async queryByKey2(contract: any, keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await contract.submitTransaction('query', keyPassed);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async queryAll(contract: any) {
      let response = await contract.evaluateTransaction('queryAll');
      console.log(response.toString())
      return response;
    }

    async deleteByKey(contract: any, keyPassed: any) {

      let response = await contract.submitTransaction('deleteKey', keyPassed);
      console.log('delete by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async queryByKey(keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await keyPassed.contract.submitTransaction('query', keyPassed.id);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed.id} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async submitFairTradeData(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.reportName, args.orgDescription, args.reportYear, args.fairTradePremiumInvested,
        args.investmentTitle1, args.investmentAmount1, args.investmentAmount2, args.investmentTitle2,
        args.investmentAmount3, args.investmentTitle3, args.batchId, args.transactionId, args.timestamp);
      return response;

    }

    async submitCupping(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.cupper, args.aroma, args.flavor, args.afterTaste,
        args.acidity, args.body, args.finalScore, args.batchId,
        args.transactionId, args.timestamp);
      return response;

    }

    async submitPackingList(args: any) {
      console.log('args in the blockchain client, packing list')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.grower, args.trader, args.PL_Invoice_no, args.PL_IssueDate,
        args.PL_ICO_no, args.PL_ICO_Lot, args.PL_FDA_NO,
        args.PL_Bill_of_Lading_No, args.PL_LoadedVessel, args.PL_VesselVoyage_No,
        args.PL_Container_No, args.PL_Seal_no, args.PL_timestamp, args.batchId,
        args.transactionId, args.timestamp
      );

      return response;

    }

    async submitWeightTally(args: any) {
      console.log('args in the blockchain client,weight tally')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.dateStripped, args.marks, args.bagsExpected, args.condition,
        args.insectActivity, args.batchId, args.transactionId, args.timestamp
      );

      return response;

    }

    async addCoffee(args: any) {
      console.log('args in the blockchain client,addcoffee')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.size, args.roast, args.batchState, args.grower,
        args.transactionId, args.timestamp
      );

      return response;

    }

    async pourCup(args: any) {
      console.log('args in the blockchain client,addcoffee')
      console.log(args)


      let response = await args.contract.submitTransaction(args.function,
        args.cupId, args.batchId, args.transactionId
      );

      if (response.length === 2) {
        response = `batchId ${args.batchId} does not exist`;
        return response;
      }

      return response;

    }
  }
}
/* eslint-disable no-constant-condition */
/* eslint-disable quotes */
/*
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const { Contract } = require("fabric-contract-api");

class MyContract extends Contract {
    /**
     *
     * addMember
     *
     * Menambahkan anggota ke dalam blockchain - dapat menjadi penangkar, petani, pengumpul, atau pedagang
     *
     * @param nama
     * @param nomorHP
     * @param username
     * @param ttl
     * @param noKK
     * @param noNPWP
     * @param nik
     * @param memberType
     * @param luasLahan
     * @param alamatToko
     * @param alamatLahan
     * @param kelompokTani
     * @param userID
     *
     */

    async addMember(
        ctx,
        nama,
        nomorHP,
        username,
        ttl,
        noKK,
        noNPWP,
        nik,
        memberType,
        luasLahan,
        alamatToko,
        alamatLahan,
        kelompokTani
    ) {
        console.info("addMember invoked");

        //create object to hold details of our new member
        let newMember = {};
        // "kelompokTani": "Sejahtera Abadi"
        //let id = memberType + "-" + Math.random().toString(29).substring(10);
        //newMember.id = id;

        // newMember.kelompokTani = kelompokTani;
        // newMember.alamat = alamat;
        // newMember.luasLahan = luasLahan;
        // newMember.memberType = memberType;

        newMember.nama = nama;
        newMember.nomorHP = nomorHP;
        newMember.username = username;
        newMember.ttl = ttl;
        newMember.noKK = noKK;
        newMember.noNPWP = noNPWP;
        newMember.nik = nik;
        newMember.memberType = memberType;
        newMember.luasLahan = luasLahan;
        newMember.alamatToko = alamatToko;
        newMember.alamatLahan = alamatLahan;
        newMember.kelompokTani = kelompokTani;
        newMember.userID = userID;

        await ctx.stub.putState(userID, Buffer.from(JSON.stringify(newMember)));
        console.info("updated ledger with key: " + userID + "and value: ");
        console.info(JSON.stringify(newMember));

        return newMember;
    }

    async init(ctx) {
        console.info("init invoked");
    }

    /**
     *
     * jualBenih
     *
     * Ketika penangkar menjual benih ke petani.
     * Fungsi ini membuat aset benih ke dalam blockchain.
     *
     * @param usernamePengirim
     * @param usernamePenerima
     * @param alamatPengirim
     * @param alamatPenerima
     * @param kuantitas
     * @param harga
     * @param timestamp
     * @param umurBenih
     * @param umurPanen
     * @param lamaPenyimpanan
     * @param varietas
     * @param hargaBenih
     * @param status
     * @param transaksiID
     * @param batchID
     *
     */

    async jualBenih(
        ctx,
        usernamePengirim,
        usernamePenerima,
        alamatPengirim,
        alamatPenerima,
        kuantitas,
        harga,
        timestamp,
        umurBenih,
        umurPanen,
        lamaPenyimpanan,
        varietas,
        hargaBenih,
        status,
        transaksiID,
        batchID
    ) {
        console.info("jualBenih invoked");

        let batchBenih = {};
        // generate random benihId from Math.random function
        // let batchId =
        //     "batch-" -
        //     Math.random()
        //         .toString(36)
        //         .substring(2);
        // let transactionId =
        //     "transaksi-" +
        //     Math.random()
        //         .toString(27)
        //         .substring(10);
        // let dateStr = new Date().toLocaleString();
        // //jadi username penerima pengirim
        // // batchBenih.penangkarId = penangkarId;
        // // batchBenih.petaniId = petaniId;
        // batchBenih.transactionId = transactionId;

        // batchBenih.tanggalJual = tanggalJual;
        // batchBenih.tanggalKirim = tanggalKirim;
        // batchBenih.metodePengiriman = metodePengiriman;

        // batchBenih.brutoKg = brutoKg;
        // batchBenih.nettoKg = nettoKg;
        // batchBenih.hargaPerKg = hargaPerKg;
        // batchBenih.hargaTotal = hargaPerKg * nettoKg;

        // batchBenih.alamatPenangkar = alamatPenangkar;
        // batchBenih.alamatPetani = alamatPetani;

        // batchBenih.batchId = batchId;
        // batchBenih.umurBenih = umurBenih;
        // batchBenih.lamaPenyimpanan = lamaPenyimpanan;
        // batchBenih.varietasBawang = varietasBawang; //jadi varietas aja
        // batchBenih.umurPanen = umurPanen;

        // //batchBenih.batchState = batchState;
        // batchBenih.timestamp = dateStr;

        batchBenih.usernamePengirim = usernamePengirim;
        batchBenih.usernamePenerima = usernamePenerima;
        batchBenih.alamatPengirim = alamatPengirim;
        batchBenih.alamatPenerima = alamatPenerima;
        batchBenih.kuantitas = kuantitas;
        batchBenih.harga = harga;
        batchBenih.timestamp = timestamp;
        batchBenih.umurBenih = umurBenih;
        batchBenih.umurPanen = umurPanen;
        batchBenih.lamaPenyimpanan = lamaPenyimpanan;
        batchBenih.varietas = varietas;
        batchBenih.hargaBenih = hargaBenih;
        batchBenih.status = status;
        batchBenih.transaksiID = transaksiID;
        batchBenih.batchID = batchID;

        await ctx.stub.putState(
            batchID,
            Buffer.from(JSON.stringify(batchBenih))
        );
        console.info("updated ledger with key: " + batchID + "and value: ");
        console.info(JSON.stringify(batchBenih));
        return batchBenih;
    }

    /**
     *
     * jualBawangPengumpul
     *
     * Ketika petani menjual bawang ke pengumpul.
     * Fungsi ini membuat aset bawang ke dalam blockchain.
     *
     * @param usernamePengirim
     * @param usernamePenerima
     * @param alamatPengirim
     * @param alamatPenerima
     * @param kuantitas
     * @param harga
     * @param timestamp
     * @param ukuranUmbi
     * @param kadarAir
     * @param pupuk
     * @param pestisida
     * @param perlakuan
     * @param produktivitas
     * @param status
     * @param transaksiID
     * @param batchID
     *
     */

    async jualBawangPengumpul(
        ctx,
        usernamePengirim,
        usernamePenerima,
        alamatPengirim,
        alamatPenerima,
        kuantitas,
        harga,
        timestamp,
        ukuranUmbi,
        kadarAir,
        pupuk,
        pestisida,
        perlakuan,
        produktivitas,
        status,
        transaksiID,
        batchID
    ) {
        console.info("jualBawangPengumpul invoked");

        let benihAsBytes = await ctx.stub.getState(batchID);
        if (!benihAsBytes || benihAsBytes.length === 0) {
            return new Error(`${batchID} batch does not exist`);
        }

        let batchBawang = JSON.parse(benihAsBytes);

        // // let bawangId = "bawang+" - Math.random().toString(36).substring(3);
        // let transactionId =
        //     "transaksi-" +
        //     Math.random()
        //         .toString(27)
        //         .substring(10);
        // let dateStr = new Date().toLocaleString();

        // // batchBawang.petaniId = petaniId;
        // // batchBawang.pengumpulId = pengumpulId;
        // batchBawang.transactionId = transactionId;

        // batchBawang.tanggalJual = tanggalJual;
        // batchBawang.tanggalKirim = tanggalKirim;
        // batchBawang.metodePengiriman = metodePengiriman;

        // batchBawang.brutoKg = brutoKg;
        // batchBawang.nettoKg = nettoKg;
        // batchBawang.hargaPerKg = hargaPerKg;
        // batchBawang.hargaTotal = hargaPerKg * nettoKg;

        // batchBawang.alamatPetani = alamatPetani;
        // batchBawang.alamatPengumpul = alamatPengumpul;

        // batchBawang.batchId = batchId;
        // // batchBawang.bawangId = bawangId;
        // batchBawang.tanggalTanam = tanggalTanam;
        // batchBawang.tanggalPanen = tanggalPanen;
        // batchBawang.pupuk = pupuk;
        // batchBawang.kadarAir = kadarAir;
        // batchBawang.pestisida = pestisida;
        // batchBawang.perlakuanLain = perlakuanLain;
        // batchBawang.ukuranUmbi = ukuranUmbi;
        // batchBawang.produktivitas = produktivitas;

        // //batchBawang.batchState = batchState;
        // batchBawang.timestamp = dateStr;

        batchBawang.usernamePengirim = usernamePengirim;
        batchBawang.usernamePenerima = usernamePenerima;
        batchBawang.alamatPengirim = alamatPengirim;
        batchBawang.alamatPenerima = alamatPenerima;
        batchBawang.kuantitas = kuantitas;
        batchBawang.harga = harga;
        batchBawang.timestamp = timestamp;
        batchBawang.ukuranUmbi = ukuranUmbi;
        batchBawang.kadarAir = kadarAir;
        batchBawang.pupuk = pupuk;
        batchBawang.pestisida = pestisida;
        batchBawang.perlakuan = perlakuan;
        batchBawang.produktivitas = produktivitas;
        batchBawang.status = status;
        batchBawang.transaksiID = transaksiID;
        batchBawang.batchID = batchID;

        await ctx.stub.putState(
            batchID,
            Buffer.from(JSON.stringify(batchBawang))
        );
        console.info("updated ledger with key: " + batchID + "and value: ");
        console.info(JSON.stringify(batchBawang));
        return batchBawang;
    }

    /**
     *
     * JualBawangPedagang
     *
     * Ketika pengumpul menjual bawang ke pedagang.
     *
     * @param usernamePengirim
     * @param usernamePenerima
     * @param alamatPengirim
     * @param alamatPenerima
     * @param kuantitas
     * @param harga
     * @param timestamp
     * @param tanggalMasuk
     * @param alamatGudang
     * @param teknikSorting
     * @param metodePengemasan
     * @param status
     * @param transaksiID
     * @param batchID
     *
     */

    async jualBawangPedagang(
        ctx,
        usernamePengirim,
        usernamePenerima,
        alamatPengirim,
        alamatPenerima,
        kuantitas,
        harga,
        timestamp,
        tanggalMasuk,
        alamatGudang,
        teknikSorting,
        metodePengemasan,
        status,
        transaksiID,
        batchID
    ) {
        console.info("JualBawangPedagang invoked");

        let bawangAsBytes = await ctx.stub.getState(batchID);
        if (!bawangAsBytes || bawangAsBytes.length === 0) {
            return new Error(`${batchID} batch does not exist`);
        }

        let batchBawang = JSON.parse(bawangAsBytes);
        // generate random benihId from Math.random function
        // let transactionId =
        //     "transaksi-" +
        //     Math.random()
        //         .toString(27)
        //         .substring(10);
        // let dateStr = new Date().toLocaleString();

        // batchBawang.pengumpulId = pengumpulId;
        // batchBawang.pedagangId = pedagangId;
        // batchBawang.transactionId = transactionId;

        // batchBawang.tanggalJual = tanggalJual;
        // batchBawang.tanggalKirim = tanggalKirim;
        // batchBawang.metodePengiriman = metodePengiriman;

        // batchBawang.brutoKg = brutoKg;
        // batchBawang.nettoKg = nettoKg;
        // batchBawang.hargaPerKg = hargaPerKg;
        // batchBawang.hargaTotal = hargaPerKg * nettoKg;

        // batchBawang.alamatPengumpul = alamatPengumpul;
        // batchBawang.alamatPedagang = alamatPedagang;

        // batchBawang.tanggalMasuk = tanggalMasuk;
        // batchBawang.bawangId = bawangId;
        // batchBawang.alamatGudang = alamatGudang;
        // batchBawang.teknikSorting = teknikSorting;
        // batchBawang.metodePengemasan = metodePengemasan;

        // batchBawang.batchState = batchState;
        // batchBawang.timestamp = dateStr;

        batchBawang.usernamePengirim = usernamePengirim;
        batchBawang.usernamePenerima = usernamePenerima;
        batchBawang.alamatPengirim = alamatPengirim;
        batchBawang.alamatPenerima = alamatPenerima;
        batchBawang.kuantitas = kuantitas;
        batchBawang.harga = harga;
        batchBawang.timestamp = timestamp;
        batchBawang.tanggalMasuk = tanggalMasuk;
        batchBawang.alamatGudang = alamatGudang;
        batchBawang.teknikSorting = teknikSorting;
        batchBawang.metodePengemasan = metodePengemasan;
        batchBawang.status = status;
        batchBawang.transaksiID = transaksiID;
        batchBawang.batchID = batchID;

        await ctx.stub.putState(
            batchID,
            Buffer.from(JSON.stringify(batchBawang))
        );
        console.info("updated ledger with key: " + batchID + "and value: ");
        console.info(JSON.stringify(batchBawang));
        return batchBawang;
    }

    async query(ctx, key) {
        console.info("query by key " + key);
        let returnAsBytes = await ctx.stub.getState(key);
        console.info(returnAsBytes);
        if (!returnAsBytes || returnAsBytes.length === 0) {
            return new Error(`${key} does not exist`);
        }
        let result = JSON.parse(returnAsBytes);
        console.info("result of getState: ");
        console.info(result);
        return JSON.stringify(result);
    }

    async deleteKey(ctx, key) {
        console.info("delete key: " + key);
        let returnAsBytes = await ctx.stub.deleteState(key);
        console.info(returnAsBytes);
        if (!returnAsBytes || returnAsBytes.length === 0) {
            console.info("no bytes returned");
            return new Error(`successfully deleted key: ${key}`);
        }
        // let result = JSON.parse(returnAsBytes);
        // console.info('result of deleteState: ');
        // console.info(result);
        return JSON.stringify(returnAsBytes);
    }

    async queryAll(ctx) {
        let queryString = {
            selector: {}
        };

        let queryResults = await this.queryWithQueryString(
            ctx,
            JSON.stringify(queryString)
        );
        return queryResults;
    }

    async queryWithQueryString(ctx, queryString) {
        console.log("query String");
        console.log(JSON.stringify(queryString));

        let resultsIterator = await ctx.stub.getQueryResult(queryString);

        let allResults = [];

        while (true) {
            let res = await resultsIterator.next();

            if (res.value && res.value.value.toString()) {
                let jsonRes = {};

                console.log(res.value.value.toString("utf8"));

                jsonRes.Key = res.value.key;

                try {
                    jsonRes.Record = JSON.parse(
                        res.value.value.toString("utf8")
                    );
                } catch (err) {
                    console.log(err);
                    jsonRes.Record = res.value.value.toString("utf8");
                }

                allResults.push(jsonRes);
            }
            if (res.done) {
                console.log("end of data");
                await resultsIterator.close();
                console.info(allResults);
                console.log(JSON.stringify(allResults));
                return JSON.stringify(allResults);
            }
        }
    }
}

module.exports = MyContract;

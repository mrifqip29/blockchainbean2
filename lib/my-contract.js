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
     * @param kelompokTani - anggota dari kelompokTani apa member tersebut
     * @param alamat - alamat member
     * @param luasLahan - luas lahan petani atau penangkar
     * @param memberType - dapat menjadi penangkar, petani, pengumpul, atau pedagang
     */

    async addMember(ctx, kelompokTani, alamat, luasLahan, memberType) {
        console.info("addMember invoked");

        //create object to hold details of our new member
        let newMember = {};

        let id = memberType + "-" + Math.random().toString(29).substring(10);
        newMember.id = id;
        newMember.kelompokTani = kelompokTani;
        newMember.alamat = alamat;
        newMember.luasLahan = luasLahan;
        newMember.memberType = memberType;

        await ctx.stub.putState(id, Buffer.from(JSON.stringify(newMember)));
        console.info("updated ledger with key: " + id + "and value: ");
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
     * @param penangkarId - id penangkar penanam benih
     * @param petaniId - id petani penanam bawang merah
     * @param tanggalJual - tanggal penjualan
     * @param tanggalKirim - ianggal penjualan
     * @param metodePengiriman
     * @param brutoKg - berat kotor
     * @param nettoKg - berat bersih
     * @param hargaPerKg - harga bawang per kg
     * @param alamatPenangkar - alamat penangkar
     * @param alamatPetani - alamat petani
     * @param lamaPenyimpanan - lama penyimpanan benih
     * @param varietasBawang - varietas benih bawang yang ditanam
     * @param umurBenih - umur benih dalam hari atau bulan
     * @param umurDipanen - umur benih dipanen untuk siap dijual
     * @param batchState -  kondisi dari batch produk
     * (SIAP_DIJUAL_KE_PETANI, SIAP_DIJUAL_KE_PENGUMPUL, SIAP_DIJUAL_KE_PEDAGANG, SIAP_DIJUAL_KE_KONSUMEN,
     * TERJUAL_KE_PETANI, TERJUAL_KE_PENGUMPUL, TERJUAL_KE_PEDAGANG, TERJUAL_KE_KONSUMEN)
     *
     */

    async jualBenih(
        ctx,
        penangkarId,
        petaniId,
        tanggalJual,
        tanggalKirim,
        metodePengiriman,
        brutoKg,
        nettoKg,
        hargaPerKg,
        alamatPenangkar,
        alamatPetani,
        lamaPenyimpanan,
        varietasBawang,
        umurBenih,
        umurPanen,
        batchState
    ) {
        console.info("jualBenih invoked");

        let batchBenih = {};
        // generate random benihId from Math.random function
        let benihId = "benih+" - Math.random().toString(36).substring(3);
        let transactionId =
            "transaksi-" + Math.random().toString(27).substring(10);
        let dateStr = new Date().toLocaleString();

        batchBenih.penangkarId = penangkarId;
        batchBenih.petaniId = petaniId;
        batchBenih.transactionId = transactionId;

        batchBenih.tanggalJual = tanggalJual;
        batchBenih.tanggalKirim = tanggalKirim;
        batchBenih.metodePengiriman = metodePengiriman;

        batchBenih.brutoKg = brutoKg;
        batchBenih.nettoKg = nettoKg;
        batchBenih.hargaPerKg = hargaPerKg;
        batchBenih.hargaTotal = hargaPerKg * nettoKg;

        batchBenih.alamatPenangkar = alamatPenangkar;
        batchBenih.alamatPetani = alamatPetani;

        batchBenih.benihId = benihId;
        batchBenih.umurBenih = umurBenih;
        batchBenih.lamaPenyimpanan = lamaPenyimpanan;
        batchBenih.varietasBawang = varietasBawang;
        batchBenih.umurPanen = umurPanen;

        batchBenih.batchState = batchState;
        batchBenih.timestamp = dateStr;

        await ctx.stub.putState(
            benihId,
            Buffer.from(JSON.stringify(batchBenih))
        );
        console.info("updated ledger with key: " + benihId + "and value: ");
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
     * @param petaniId - id petani penanam bawang merah
     * @param pengumpulId - id pengumpul
     * @param tanggalJual - tanggal penjualan
     * @param tanggalKirim - ianggal penjualan
     * @param metodePengiriman
     * @param brutoKg - berat kotor
     * @param nettoKg - berat bersih
     * @param hargaPerKg - harga bawang per kg
     * @param alamatPetani - alamat petani
     * @param alamatPengumpul - alamat pengumpul
     * @param benihId - id dari benih
     * @param tanggalTanam - tanggal penanaman benih
     * @param tanggalPanen - tanggal pemanenan benih
     * @param pupuk - jenis pupuk yang digunakan
     * @param kadarAir
     * @param pestisida - jenis pestisida yang digunakan
     * @param perlakuanLain
     * @param ukuranUmbi
     * @param produktivitas
     * @param batchState -  kondisi dari batch produk
     * (SIAP_DIJUAL_KE_PETANI, SIAP_DIJUAL_KE_PENGUMPUL, SIAP_DIJUAL_KE_PEDAGANG, SIAP_DIJUAL_KE_KONSUMEN,
     * TERJUAL_KE_PETANI, TERJUAL_KE_PENGUMPUL, TERJUAL_KE_PEDAGANG, TERJUAL_KE_KONSUMEN)
     *
     */

    async jualBawangPengumpul(
        ctx,
        petaniId,
        pengumpulId,
        tanggalJual,
        tanggalKirim,
        metodePengiriman,
        brutoKg,
        nettoKg,
        hargaPerKg,
        alamatPetani,
        alamatPengumpul,
        benihId,
        tanggalTanam,
        tanggalPanen,
        pupuk,
        kadarAir,
        pestisida,
        perlakuanLain,
        ukuranUmbi,
        produktivitas,
        batchState
    ) {
        console.info("jualBawangPengumpul invoked");

        let batchBawang = {};
        let bawangId = "bawang+" - Math.random().toString(36).substring(3);
        let transactionId =
            "transaksi-" + Math.random().toString(27).substring(10);
        let dateStr = new Date().toLocaleString();

        batchBawang.petaniId = petaniId;
        batchBawang.pengumpulId = pengumpulId;
        batchBawang.transactionId = transactionId;

        batchBawang.tanggalJual = tanggalJual;
        batchBawang.tanggalKirim = tanggalKirim;
        batchBawang.metodePengiriman = metodePengiriman;

        batchBawang.brutoKg = brutoKg;
        batchBawang.nettoKg = nettoKg;
        batchBawang.hargaPerKg = hargaPerKg;
        batchBawang.hargaTotal = hargaPerKg * nettoKg;

        batchBawang.alamatPetani = alamatPetani;
        batchBawang.alamatPengumpul = alamatPengumpul;

        batchBawang.benihId = benihId;
        batchBawang.bawangId = bawangId;
        batchBawang.tanggalTanam = tanggalTanam;
        batchBawang.tanggalPanen = tanggalPanen;
        batchBawang.pupuk = pupuk;
        batchBawang.kadarAir = kadarAir;
        batchBawang.pestisida = pestisida;
        batchBawang.perlakuanLain = perlakuanLain;
        batchBawang.ukuranUmbi = ukuranUmbi;
        batchBawang.produktivitas = produktivitas;

        batchBawang.batchState = batchState;
        batchBawang.timestamp = dateStr;

        await ctx.stub.putState(
            bawangId,
            Buffer.from(JSON.stringify(batchBawang))
        );
        console.info("updated ledger with key: " + bawangId + "and value: ");
        console.info(JSON.stringify(batchBawang));
        return batchBawang;
    }

    /**
     *
     * JualBawangPedagang
     *
     * Ketika pengumpul menjual bawang ke pedagang.
     *
     * @param pengumpulId - id pengumpul
     * @param pedagangId - id pedagang
     * @param tanggalJual - tanggal penjualan
     * @param tanggalKirim - ianggal penjualan
     * @param metodePengiriman
     * @param brutoKg - berat kotor
     * @param nettoKg - berat bersih
     * @param hargaPerKg - harga bawang per kg
     * @param alamatPengumpul - alamat pengumpul
     * @param alamatPedagang - alamat pedagang
     * @param tanggalMasuk - tanggal bawang masuk gudang
     * @param bawangId - id bawang
     * @param alamatGudang - alamat gudang penyimpanan
     * @param teknikSorting
     * @param metodePengemasan - jenis pestisida yang digunakan
     * @param batchState -  kondisi dari batch produk
     * (SIAP_DIJUAL_KE_PETANI, SIAP_DIJUAL_KE_PENGUMPUL, SIAP_DIJUAL_KE_PEDAGANG, SIAP_DIJUAL_KE_KONSUMEN,
     * TERJUAL_KE_PETANI, TERJUAL_KE_PENGUMPUL, TERJUAL_KE_PEDAGANG, TERJUAL_KE_KONSUMEN)
     *
     */

    async jualBawangPedagang(
        ctx,
        pengumpulId,
        pedagangId,
        tanggalJual,
        tanggalKirim,
        metodePengiriman,
        brutoKg,
        nettoKg,
        hargaPerKg,
        alamatPengumpul,
        alamatPedagang,
        tanggalMasuk,
        bawangId,
        alamatGudang,
        teknikSorting,
        metodePengemasan,
        batchState
    ) {
        console.info("JualBawangPedagang invoked");

        let batchBawang = {};
        // generate random benihId from Math.random function
        let transactionId =
            "transaksi-" + Math.random().toString(27).substring(10);
        let dateStr = new Date().toLocaleString();

        batchBawang.pengumpulId = pengumpulId;
        batchBawang.pedagangId = pedagangId;
        batchBawang.transactionId = transactionId;

        batchBawang.tanggalJual = tanggalJual;
        batchBawang.tanggalKirim = tanggalKirim;
        batchBawang.metodePengiriman = metodePengiriman;

        batchBawang.brutoKg = brutoKg;
        batchBawang.nettoKg = nettoKg;
        batchBawang.hargaPerKg = hargaPerKg;
        batchBawang.hargaTotal = hargaPerKg * nettoKg;

        batchBawang.alamatPengumpul = alamatPengumpul;
        batchBawang.alamatPedagang = alamatPedagang;

        batchBawang.tanggalMasuk = tanggalMasuk;
        batchBawang.bawangId = bawangId;
        batchBawang.alamatGudang = alamatGudang;
        batchBawang.teknikSorting = teknikSorting;
        batchBawang.metodePengemasan = metodePengemasan;

        batchBawang.batchState = batchState;
        batchBawang.timestamp = dateStr;

        await ctx.stub.putState(
            bawangId,
            Buffer.from(JSON.stringify(batchBawang))
        );
        console.info("updated ledger with key: " + bawangId + "and value: ");
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
            selector: {},
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

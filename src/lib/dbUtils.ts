import { openDB } from 'idb';
interface KeyPair {
    idx: number;
    publicKey: string;
    privateKey: string;
}

interface MnemonicData {
    keyPairs: KeyPair[];
}

interface NetworkData {
    [mnemonic: string]: MnemonicData;
}

class DbService {
    private DB_NAME = 'walletDB';
    private DB_VERSION = 1;
    private STORE_NAME = 'wallets';

    constructor() {
        console.log('DbService constructor');
    }

    private async initDB() {
        return openDB(this.DB_NAME, this.DB_VERSION, {
            upgrade: (db) => {
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    db.createObjectStore(this.STORE_NAME);
                }
            },
        });
    }

    public async saveMnemonicToDB(mnemonic: string, keyPairs: { idx: number, publicKey: string, privateKey: string }[], network: string) {
        const db = await this.initDB();
        const store = db.transaction(this.STORE_NAME, 'readwrite').objectStore(this.STORE_NAME);
        const existingData = (await store.get(network)) || {};
        existingData[mnemonic] = { keyPairs };
        await store.put(existingData, network);
    }

    public async getMnemonicFromDB(network: string) {
        const db = await this.initDB();
        const store = db.transaction(this.STORE_NAME, 'readonly').objectStore(this.STORE_NAME);
        const data = await store.get(network);
        return data;
    }

    public async removeWalletFromDB(network: string, mnemonic: string, idx: number): Promise<void> {
        const db = await this.initDB();
        const store = db.transaction(this.STORE_NAME, 'readwrite').objectStore(this.STORE_NAME);
        const existingData: NetworkData = (await store.get(network)) || {};

        if (existingData[mnemonic] && existingData[mnemonic].keyPairs) {
            existingData[mnemonic].keyPairs = existingData[mnemonic].keyPairs.filter((keypair) => keypair.idx !== idx);
            await store.put(existingData, network);
        }
    }

    public async clearWallets(network: string): Promise<void> {
        const db = await this.initDB();
        const store = db.transaction(this.STORE_NAME, 'readwrite').objectStore(this.STORE_NAME);
        await store.delete(network);
    }
}

export default DbService;
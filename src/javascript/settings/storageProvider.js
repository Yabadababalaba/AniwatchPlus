const { assigned } = require("../utils/helpers")

class StorageProviderChromium {

    setData(key, value) {
        let obj = {};
        obj[key] = value;

        this.getStorage().set(obj);
    }

    getData(key, defaultValue, callback) {
        this.getStorage().get(key, items => {
            if (assigned(items)) {
                callback(items[key]);
            }
            else {
                callback(defaultValue);
            }
        })
    }

    getStorage() {
        if (assigned(chrome.storage.sync)) {
            return chrome.storage.sync;
        }

        return chrome.storage.local;
    }
}


class StorageProviderFirefox {

    setData(key, value, callback) {
    }

    getData(key, defaultValue, callback) {
    }

    getStorage() {
    }
}

let __storageProvieder = undefined;

function createStorageProvider() {
    // chrome based browser
    if (assigned(chrome?.app)) {
        __storageProvieder = new StorageProviderChromium();
    }
    // firefox
    else {
        __storageProvieder = new StorageProviderFirefox();
    }

}

export function getGlobalStorageProvider() {
    if (!assigned(__storageProvieder)) {
        createStorageProvider();
    }

    return __storageProvieder;
}
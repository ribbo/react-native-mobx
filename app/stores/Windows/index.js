import { observable, computed, action } from 'mobx';
import axios from 'axios';

export default class windowsStore {
    @observable windows = [];

    @action getWindows() {
        axios
            .get('/windows')
            .then((response) => {
                this.windows = response.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    @action createWindow() {
        axios
            .post('/windows', {})
            .then((response) => {
                this.addWindow(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    @action addWindow(newWindow) {
        this.windows.replace([...this.windows, newWindow]);
    }

}

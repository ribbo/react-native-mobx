import { observable, computed, action } from 'mobx';
import axios from 'axios';

export default class layoutsStore {
    @observable layouts = [];

    @action getWindows() {
        axios
            .get('/layouts')
            .then((response) => {
                this.layouts = response.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

}

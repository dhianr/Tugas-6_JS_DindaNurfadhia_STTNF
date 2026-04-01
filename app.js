import { index, store } from "./controller.js";

const main = () => {
    const form = document.getElementById('form-list');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = {
            nama: document.getElementById('nama').value,
            umur: document.getElementById('umur').value,
            alamat: document.getElementById('alamat').value,
            email: document.getElementById('email').value,
        };
        store(user);

        form.reset();
    });

    index();

}
main();

import users from "./data.js";

const index = () => {
    const listUser = document.getElementById('list-user');
    listUser.innerHTML = '';

    users.map((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.nama} - ${user.umur} - ${user.alamat} - ${user.email}
        <button onclick="hapusData(${index})">Hapus</button>`;
        listUser.appendChild(li);
    });
}

const store = (user) => {
    users.push(user);
    users.push({
        nama: 'Boo Seungkwan',
        umur: 27,
        alamat: 'Bogor',
        email:'boooo@gmail.com'
    });

        users.push({
        nama: 'Chwe Vernon',
        umur: 27,
        alamat: 'Depok',
        email:'chwe@gmail.com'
    });

    index();
};

const destroy = (indexuser) => {
    users.splice(indexuser, 1);
    index();
}

window.hapusData = destroy;

export { index, store, destroy };
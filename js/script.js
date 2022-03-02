class Counter {
    #counter = 0;

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

class Person {
    gender(gender) {
        this.gender = gender;
    }
}

const user = new Person();


const counter = new Counter();

const nilai = document.querySelector('header .counter h3');
const pesan = document.querySelector('main .pesan span');

const kurang = document.querySelectorAll('header .button button')[0];
const tambah = document.querySelectorAll('header .button button')[1];

function isiPesan() {
    let sapa;
    if(user.gender === 'pria'){
        sapa = "Tamvans";
    }else if(user.gender === 'wanita'){
        sapa = "Cangtip";
    }else{
        sapa = "Hey!";
    }
    switch (counter.get()) {
        case -1:
            counter.increment();
            nilai.textContent = 0;
            pesan.textContent = `Nanaonan maneh ${sapa}, moal bisa kana mines! wkwkwkwkwk`;
            break;
        case 0:
            pesan.textContent = "Nol";
            break;
        case 1:
            pesan.textContent = "Hiji";
            break;
        case 2:
            pesan.textContent = "Dua";
            break;
        case 3:
            pesan.textContent = "Tilu";
            break;
        case 4:
            pesan.textContent = "Opat";
            break;
        case 5:
            pesan.textContent = "Lima";
            break;
        case 6:
            pesan.textContent = "Genep";
            break;
        case 7:
            pesan.textContent = "Tujuh";
            break;
        case 8:
            pesan.textContent = "Dalapan";
            break;
        case 9:
            pesan.textContent = "Sambilan";
            break;
        case 10:
            pesan.textContent = "Sapuluh";
            break;
        case 11:
            pesan.textContent = "Geus ah cape, nepi ka sapuluh weh wkwk";
            counter.decrement();
            nilai.textContent = 10;
            break;
        default:
            pesan.textContent = "";
            break;
    }
}

tambah.addEventListener('click', function () {
    if (counter.get() <= 10) {
        counter.increment();
        nilai.textContent = counter.get();
    }

    isiPesan();
})
kurang.addEventListener('click', function () {
    if (counter.get() >= 0) {
        counter.decrement();
    }
    isiPesan();
    nilai.textContent = counter.get();
})

Swal.fire({
    title: 'Pilih Gender',
    text: "Pria atau Wanita?",
    icon: 'question',
    showCancelButton: false,
    showDenyButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Pria',
    denyButtonText: `wanita`,
}).then((result) => {
    if (result.isConfirmed) {
        user.gender('pria');
        Swal.fire({
            title: 'Hai Tamvans :v',
            text: 'Tapi lebih tamvan ice bear sih',
            imageUrl: '../img/tamvans.png',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Sa Ae Bhujank',
        })
    } else if (result.isDenied) {
        user.gender('wanita');
        Swal.fire({
            title: 'Hai Cangtip :)',
            imageUrl: '../img/cangtip.png',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Makasih, Ini udah bawaan lahir',
        })
    } else {
        user.gender();
        Swal.fire({
            title: 'Tch! Ice bear tydak suka!',
            text: "kenapa kau tidak memilihnya? Ice bear harap kau bukan g** awokwokwk",
            imageUrl: 'https://github.com/muhammadedowardaya/counter/blob/master/js',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Urraaaa',
        })
    }

})

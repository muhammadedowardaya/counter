class CounterNumber extends HTMLElement {
    connectedCallback() {
        this.number = 0;
        this.displayNumber = "Nol";
        this.render();
    }

    set number(value) {
        this._number = value;
        this.render();
    }

    set displayNumber(value) {
        this._displayNumber = value;
        this.render();
    }

    set onClickPlus(value) {
        this._onClickPlus = value;
        this.render();
    }

    set onClickMinus(value) {
        this._onClickMinus = value;
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="content-main">
                <header>
                    <div class="number">
                        <span>${this._displayNumber}</span>
                    </div>
                </header>
                <figure>
                    <div class="main-counter">
                        <h1>${this._number}</h1>
                    </div>
                    <div class="main-action">
                        <button class="main-button__minus">-</button>
                        <button class="main-button__plus">+</button>
                    </div>
                </figure>
            </section>
        `;
        this.querySelector(".main-button__plus").addEventListener(
            "click",
            this._onClickPlus
        );
        this.querySelector(".main-button__minus").addEventListener(
            "click",
            this._onClickMinus
        );
    }
}

customElements.define("counter-number", CounterNumber);

const Person = {
    gender(gender) {
        this.gender = gender;
    },
};

const Counter = {
    number: 0,

    increment() {
        this.number++;
    },

    decrement() {
        this.number--;
    },

    get() {
        return this.number;
    },
};

const User = {
    gender(gender) {
        this.gender = gender;
    },
};

const counterNumber = document.querySelector("counter-number");

function isiPesan() {
    let sapa = "";
    if (User.gender === "pria") {
        sapa = "Tamvans";
    } else if (user.gender === "wanita") {
        sapa = "Cangtip";
    } else {
        sapa = "Hey!";
    }
    switch (Counter.get()) {
        case -1:
            Counter.increment();
            counterNumber.number = 0;
            counterNumber.displayNumber = `Nanaonan maneh ${sapa}, moal bisa kana mines! wkwkwkwkwk`;
            break;
        case 0:
            counterNumber.displayNumber = "Nol";
            break;
        case 1:
            counterNumber.displayNumber = "Hiji";
            break;
        case 2:
            counterNumber.displayNumber = "Dua";
            break;
        case 3:
            counterNumber.displayNumber = "Tilu";
            break;
        case 4:
            counterNumber.displayNumber = "Opat";
            break;
        case 5:
            counterNumber.displayNumber = "Lima";
            break;
        case 6:
            counterNumber.displayNumber = "Genep";
            break;
        case 7:
            counterNumber.displayNumber = "Tujuh";
            break;
        case 8:
            counterNumber.displayNumber = "Dalapan";
            break;
        case 9:
            counterNumber.displayNumber = "Sambilan";
            break;
        case 10:
            counterNumber.displayNumber = "Sapuluh";
            break;
        case 11:
            counterNumber.displayNumber =
                "Geus ah cape, nepi ka sapuluh weh wkwk";
            Counter.decrement();
            counterNumber.number = 10;
            break;
        default:
            counterNumber.displayNumber = "";
            break;
    }
}

counterNumber.onClickPlus = () => {
    if (Counter.get() <= 10) {
        Counter.increment();
        counterNumber.number = Counter.get();
    }
    isiPesan();
};

counterNumber.onClickMinus = () => {
    if (Counter.get() >= 0) {
        Counter.decrement();
    }
    isiPesan();
    counterNumber.number = Counter.get();
};

Swal.fire({
    title: "Pilih Gender",
    text: "Pria atau Wanita?",
    icon: "question",
    showCancelButton: false,
    showDenyButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Pria",
    denyButtonText: `wanita`,
}).then((result) => {
    if (result.isConfirmed) {
        User.gender("pria");
        Swal.fire({
            title: "Hai Tamvans :v",
            text: "Tapi lebih tamvan ice bear sih",
            imageUrl:
                "https://muhammadedowardaya.github.io/counter/img/tamvans.png",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Sa Ae Bhujank",
        });
    } else if (result.isDenied) {
        User.gender("wanita");
        Swal.fire({
            title: "Hai Cangtip :)",
            imageUrl:
                "https://muhammadedowardaya.github.io/counter/img/cangtip.png",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Makasih, Ini udah bawaan lahir",
        });
    } else {
        User.gender();
        Swal.fire({
            title: "Tch! Ice bear tydak suka!",
            text: "kenapa kau tidak memilihnya? Ice bear harap kau bukan g** awokwokwk",
            imageUrl:
                "https://muhammadedowardaya.github.io/counter/img/tolak.png",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Urraaaa",
        });
    }
});

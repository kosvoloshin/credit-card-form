export const genereteMonths = () => {
    return Array.from({ length: 12 }, (v, k) => k + 1).map(num => {
        return num <= 9 ? `0${num}` : num;
    });
};

export const generateYears = () => {
    let arrYears = [];
    const currentYear = new Date().getFullYear();

    for (let i = currentYear; i <= currentYear + 10; i++) {
        arrYears.push(i);
    }

    return arrYears;
};

export const generateRandomImage = (min, max) => {
    return `./assets/images/cards/card-${Math.round(min + Math.random() * (max - min))}.jpg`;
};

export const cardLogo = num => {
    const logoPath = "./assets/images/";

    switch (num) {
        case num.match(/^4/) && num:
            return `${logoPath}visa.png`;

        case num.match(/^(34|37)/) && num:
            return `${logoPath}amex.png`;

        case num.match(/^5[1-5]/) && num:
            return `${logoPath}mastercard.png`;

        case num.match(/^60/) && num:
            return `${logoPath}discover.png`;

        case num.match(/^9792/) && num:
            return `${logoPath}troy.png`;

        case num.match(/^62/) && num:
            return `${logoPath}unionpay.png`;

        default:
            return `${logoPath}visa.png`;
    }
};

export const setMask = (mask, value) => {
    let maskArr = mask.split("");
    let valueArr = value.split("");

    valueArr.map((item, index) => {
        if (/^(4|5|6|7)$/.test(index)) {
            return (maskArr[index + 1] = "*");
        }

        if (/^(8|9|10|11)$/.test(index)) {
            return (maskArr[index + 2] = "*");
        }

        if (/^(12|13|14|15)$/.test(index)) {
            return (maskArr[index + 3] = item);
        }

        return (maskArr[index] = item);
    });

    return maskArr;
};

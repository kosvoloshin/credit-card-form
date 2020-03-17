export const months = [
    {
        value: "jan",
        label: "1",
    },
    {
        value: "feb",
        label: "2",
    },
    {
        value: "mar",
        label: "3",
    },
];

export const years = [
    {
        year: "2020",
    },
    {
        year: "2021",
    },
    {
        year: "2022",
    },
];

export const cardLogo = num => {
    const logoPath = "https://raw.githubusercontent.com/kosvoloshin/credit-card-form/master/src/Assets/images/";

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
        return (maskArr[index] = item);
    });

    return maskArr;
};

import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = `6B4F63F9AC65152565886860DDE484A6`;

export const encrypt = t => {
    const iv = crypto.randomBytes(16);
    let c = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let e = c.update(t);
    e = Buffer.concat([e, c.final()]);
    return `${iv.toString('hex')}:${e.toString('hex')}`;
};

export const decrypt = t => {
    let p = t.split(':');
    let iv = Buffer.from(p.shift(), 'hex');
    let e = Buffer.from(p.join(':'), 'hex');
    let d = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let dx = d.update(e);
    dx = Buffer.concat([dx, d.final()]);
    return dx.toString();
};

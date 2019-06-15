import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);

export const encrypt = t => {
    const cipher = crypto.createCipher(algorithm, key)
    let crypted = cipher.update(t, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
};

export const decrypt = t => {
    var decipher = crypto.createDecipher(algorithm, key)
    var dec = decipher.update(t, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
};
import random from 'random';

const CHOICES = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
const LOWER_CASE = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
const UPPER_CASE = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
const DIGITS = ['1','2','3','4','5','6','7','8','9','0'];

function generate_password () {
    let password = "";
    let index = random.int(0, 25);
    password += LOWER_CASE[index];
    index = random.int(0, 25);
    password += UPPER_CASE[index];
    index = random.int(0, 9);
    password += DIGITS[index];
    for (let i = 0; i <= 10; i++) {
        index = random.int(0, 59);
        password += CHOICES[index];
    }
    console.log(password);
    return password;
};

export default generate_password;
import crypto from "node:crypto";


function encodeBase62(num) {
  const base62chars = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z'
  ];

  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  if (num === 0) return "0";

  let result = "";
  const base = 62;

  while (num > 0) {
    const remainder = num % base;
    result = base62chars[remainder] + result;
    num = Math.floor(num / base);
  }

  return result;
}


export function generateSlug(id, url, length = 8){
  if (length < 4) throw new Error("The slug must be at least 4 characters long.");

  const idPart = encodeBase62(id);
  const maxHashLength = Math.max(length - idPart.length, 2);

  const hash = crypto
    .createHash("sha256")
    .update(id + url)
    .digest("base64url");

  const hashPart = hash.slice(0, maxHashLength);

  return idPart + hashPart;
}

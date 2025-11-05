export const cleanValue = (str) => {
  let value = str;
  value = value.replace(/,/g, '').trim();
  value = value.replace(/^\+/, '').trim();
  let total = null
  // parse numerator and denominator
  if (value.includes('/')) {
    total = value.split('/');
    value = total[0].trim();
    total = total[1].trim();
    return {
      num: Number(value),
      total: Number(total),
      str
    }
  }
  // parse flat number
  if (value.match(/^\d+$/)) {
    return {
      num: Number(value),
      str
    }
  }
  // parse percentage
  if (value.match(/^\-?\d+\%$/)) {
    return {
      num: Number(value.replace(/\%/, '')),
      str
    }
  }
  return {
    num: value,
    str
  }
}

export const cleanText = (text) => {
  text = text.replace(/[\n\r]+/g, ' ').trim();
  text = text.replace(/\*/g, '').trim();
  text = text.replace(/\s\s+/g, ' ').trim();
  text = text.replace(/–/g, '-').trim();
  return text;
}
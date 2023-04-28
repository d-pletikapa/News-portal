const countries = {
  'ae': 'الإمارات العربية المتحدة', // United Arab Emirates
  'ar': 'Argentina', // Argentina
  'at': 'Österreich', // Austria
  'au': 'Australia', // Australia
  'be': 'België', // Belgium
  'bg': 'България', // Bulgaria
  'br': 'Brasil', // Brazil
  'ca': 'Canada', // Canada
  'ch': 'Schweiz', // Switzerland
  'cn': '中国', // China
  'co': 'Colombia', // Colombia
  'cu': 'Cuba', // Cuba
  'cz': 'Česká republika', // Czech Republic
  'de': 'Deutschland', // Germany
  'eg': 'مصر', // Egypt
  'fr': 'France', // France
  'gb': 'United Kingdom', // United Kingdom
  'gr': 'Ελλάδα', // Greece
  'hk': '香港', // Hong Kong
  'hu': 'Magyarország', // Hungary
  'id': 'Indonesia', // Indonesia
  'ie': 'Éire', // Ireland
  'il': 'ישראל', // Israel
  'in': 'भारत', // India
  'it': 'Italia', // Italy
  'jp': '日本', // Japan
  'kr': '대한민국', // South Korea
  'lt': 'Lietuva', // Lithuania
  'lv': 'Latvija', // Latvia
  'ma': 'المغرب', // Morocco
  'mx': 'México', // Mexico
  'my': 'Malaysia', // Malaysia
  'ng': 'Nigeria', // Nigeria
  'nl': 'Nederland', // Netherlands
  'no': 'Norge', // Norway
  'nz': 'New Zealand', // New Zealand
  'ph': 'Pilipinas', // Philippines
  'pl': 'Polska', // Poland
  'pt': 'Portugal', // Portugal
  'ro': 'România', // Romania
  'rs': 'Србија', // Serbia
  'ru': 'Россия', // Russia
  'sa': 'المملكة العربية السعودية', // Saudi Arabia
  'se': 'Sverige', // Sweden
  'sg': 'Singapore', // Singapore
  'si': 'Slovenija', // Slovenia
  'sk': 'Slovensko', // Slovakia
  'th': 'ไทย', // Thailand
  'tr': 'Türkiye', // Turkey
  'tw': '臺灣', // Taiwan
  'ua': 'Україна', // Ukraine
  'us': 'United States', // United States
  've': 'Venezuela', // Venezuela
  'za': 'South Africa', // South Africa
};


const renderSelect = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const select = document.querySelector('.form__select');
  const options = data.map(item => {
    const option = document.createElement('option');
    console.log(item.country);
    option.value = item.country;
    option.textContent = countries[item.country];
    item.country === 'ru' ? option.selected = true : null;
    return option;
  });

  select.append(...options);

  return select;
};

export default renderSelect;

const validateMACAddress = (macAddress = '') => {
  //'00-14-22-01-23-EF'
  const pattern = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/;
  return pattern.test(macAddress);
};

export default validateMACAddress;
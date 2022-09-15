const validateIPAddress = (ipAddress = '') => {
  // 255.255.255.255
  const pattern = /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/;
  return pattern.test(ipAddress);
};

export default validateIPAddress;

/*
2. Írj egy függvényt `validateIPAddress`, ami paraméterként egy IPv4 
címet vár stringként!   
A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott IP 
cím megfelelő formátumú e, vagy sem.
*/

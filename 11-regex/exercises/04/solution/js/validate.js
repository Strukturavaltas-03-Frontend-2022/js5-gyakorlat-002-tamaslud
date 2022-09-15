const validate = (inputString = '', regexpType = '') => {
  const roles = {
    visa: /^4(\d{12}|\d{15})$/,
    ip: /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/,
    mac: /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/,
  };
  const pattern = roles[`${regexpType}`];
  return pattern.test(inputString);
};
export default validate;

/*
4. Hozz létre egy Object-et `roles` névvel!
   Ebben legyen letárolva 3 reguláris kifejezés. Ezek az alábbiak:
   - `visa`: reguláris kifejezés Visa kártyaszámra 
   - `ip`: reguláris kifejezés IP címre
   - `mac`: reguláris kifejezés MAC címre   

   Írj egy `validate` nevű függvényt, ami paraméterként két paraméter vár. 
   Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül: 
   - `visa` 
   - `ip`
   - `mac` 
   Ez az érték az, hogy milyen adatot akarunk validálni. 
   A függvény visszatérési értéke egye `Boolean`. 
*/

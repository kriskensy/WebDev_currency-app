export const convertPLNToUSD = (PLN) => {

  if(typeof PLN === "string" || PLN === undefined){
    return NaN;
  }
//TODO dopisz warunki sprawdzające czy wyrzuci Error oraz czy zwraca 0.00 dla ujemnych
  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}
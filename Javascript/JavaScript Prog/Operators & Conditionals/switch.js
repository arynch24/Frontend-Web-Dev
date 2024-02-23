const expr = 'Papayas';
switch (expr) 
{
  case 'Oranges':
    console.log('Oranges are 100/kg.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are 60/kg.');
    // Expected output: "Mangoes and papayas 60/kg"
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

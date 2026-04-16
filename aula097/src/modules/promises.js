function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A promessa de Deus será cumprida.');
      resolve();
    }, 2000);
  });
}

export default async function() {
  await promise();
  console.log('Deus cumpriu!');
 }
 